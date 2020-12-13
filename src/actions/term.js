import {
  CREATE_TERM_FAILURE,
  CREATE_TERM_REQUEST,
  CREATE_TERM_SUCCESS,
  DELETE_TERM_FAILURE,
  DELETE_TERM_REQUEST,
  DELETE_TERM_SUCCESS,
  GET_ANSWERS_FOR_TERM_FAILURE,
  GET_ANSWERS_FOR_TERM_REQUEST,
  GET_ANSWERS_FOR_TERM_SUCCESS,
  GET_STUDY_SET_FAILURE,
  GET_STUDY_SET_REQUEST,
  GET_STUDY_SET_SUCCESS,
  GET_STUDY_SET_WITH_IMAGES_FAILURE,
  GET_STUDY_SET_WITH_IMAGES_REQUEST,
  GET_STUDY_SET_WITH_IMAGES_SUCCESS,
  GET_STUDY_SET_WITH_KEYWORDS_FAILURE,
  GET_STUDY_SET_WITH_KEYWORDS_REQUEST,
  GET_STUDY_SET_WITH_KEYWORDS_SUCCESS,
  GET_TERMS_BY_GROUP_ID_FAILURE,
  GET_TERMS_BY_GROUP_ID_REQUEST,
  GET_TERMS_BY_GROUP_ID_SUCCESS,
  UPDATE_TERM_AWARE_STATUS_FAILURE,
  UPDATE_TERM_AWARE_STATUS_REQUEST,
  UPDATE_TERM_AWARE_STATUS_SUCCESS,
  UPDATE_TERM_FAILURE,
  UPDATE_TERM_REQUEST,
  UPDATE_TERM_SUCCESS
} from "../utils/constants/action-types/term";
import * as termService from "../services/termService";
import {getAnswersForTerm} from "../services/termService";
import {CHUNKS, DEFAULT, IMAGES, KEYWORDS} from "../helpers/studyMode";

export const getTerms = (termGroupId) => async (dispatch) => {
  dispatch({type: GET_TERMS_BY_GROUP_ID_REQUEST});
  try {
    const terms = await termService.getAllByGroupId(termGroupId);
    dispatch(getTermsSuccess(terms));
  } catch (error) {
    dispatch(getTermsError({error}))
  }
}

const getTermsSuccess = (terms) => {
  return {
    type: GET_TERMS_BY_GROUP_ID_SUCCESS,
    payload: terms
  }
}

const getTermsError = (error) => {
  return {
    type: GET_TERMS_BY_GROUP_ID_FAILURE,
    payload: error
  }
}

export const getTermAnswers = (termId) => async (dispatch) => {
  dispatch({type: GET_ANSWERS_FOR_TERM_REQUEST});
  try {
    const answers = await getAnswersForTerm(termId);
    dispatch(getTermAnswersSuccess(answers));
  } catch (error) {
    dispatch(getTermAnswersError({error}));
  }
}

const getTermAnswersSuccess = (answers) => {
  return {
    type: GET_ANSWERS_FOR_TERM_SUCCESS,
    payload: answers
  }
}

const getTermAnswersError = (error) => {
  return {
    type: GET_ANSWERS_FOR_TERM_FAILURE,
    payload: error
  }
}


export const getStudySet = (termGroupId, mode) => (dispatch) => {
  if (mode === KEYWORDS) {
    dispatch(getStudySetWithKeyWords(termGroupId));
  } else if (mode === IMAGES) {
    dispatch(getStudySetWithImages(termGroupId));
  } else if (mode === CHUNKS) {
    //TODO
  } else if (mode === DEFAULT) {
    dispatch(getDefaultStudySet(termGroupId));
  }
}

const getDefaultStudySet = (termGroupId) => async (dispatch) => {
  dispatch({type: GET_STUDY_SET_REQUEST});
  try {
    const studySet = await termService.getStudySet(termGroupId);
    dispatch(getDefaultStudySetSuccess(studySet));
  } catch (error) {
    dispatch(getDefaultStudySetError({error}));
  }
}

const getDefaultStudySetSuccess = (studySet) => {
  return {
    type: GET_STUDY_SET_SUCCESS,
    payload: studySet
  }
}

const getDefaultStudySetError = (error) => {
  return {
    type: GET_STUDY_SET_FAILURE,
    payload: error
  }
}


const getStudySetWithKeyWords = (termGroupId) => async (dispatch) => {
  dispatch({type: GET_STUDY_SET_WITH_KEYWORDS_REQUEST});
  try {
    const studySet = await termService.getStudySetWithKeywords(termGroupId);
    dispatch(getStudySetWithKeyWordsSuccess(studySet));
  } catch (error) {
    dispatch(getStudySetWithKeyWordsError({error}));
  }
}

const getStudySetWithKeyWordsSuccess = (studySet) => {
  return {
    type: GET_STUDY_SET_WITH_KEYWORDS_SUCCESS,
    payload: studySet
  }
}

const getStudySetWithKeyWordsError = (error) => {
  return {
    type: GET_STUDY_SET_WITH_KEYWORDS_FAILURE,
    payload: error
  }
}


const getStudySetWithImages = (termGroupId) => async (dispatch) => {
  dispatch({type: GET_STUDY_SET_WITH_IMAGES_REQUEST});
  try {
    const studySet = await termService.getStudySetWithImages(termGroupId);
    dispatch(getStudySetWithImagesSuccess(studySet));
  } catch (error) {
    dispatch(getStudySetWithImagesError({error}));
  }
}

const getStudySetWithImagesSuccess = (studySet) => {
  return {
    type: GET_STUDY_SET_WITH_IMAGES_SUCCESS,
    payload: studySet
  }
}

const getStudySetWithImagesError = (error) => {
  return {
    type: GET_STUDY_SET_WITH_IMAGES_FAILURE,
    payload: error
  }
}


export const createTerm = (term, allTerms) => async (dispatch) => {
  dispatch({type: CREATE_TERM_REQUEST});
  try {
    const formData = new FormData();
    formData.append("groupTermDto", new Blob([JSON.stringify({
      name: term.name,
      definition: term.definition,
      keyword: term.keyword,
      termGroupId: term.termGroupId
    })], {type: "application/json"}));
    formData.append("termImage", term.image[0]);
    const createdTerm = await termService.createTerm(formData);
    dispatch(createTermSuccess(createdTerm, allTerms));
  } catch (error) {
    dispatch(createTermError({error}));
  }
}

const createTermSuccess = (term, allTerms) => {
  const terms = [...allTerms];
  terms.unshift(term);
  return {
    type: CREATE_TERM_SUCCESS,
    payload: {term, terms}
  }
}

const createTermError = (error) => {
  return {
    type: CREATE_TERM_FAILURE,
    payload: error
  }
}


export const updateTerm = (term, allTerms) => async (dispatch) => {
  dispatch({type: UPDATE_TERM_REQUEST});
  try {
    const formData = new FormData();
    formData.append("termDto", new Blob([JSON.stringify({
      id: term.id,
      name: term.name,
      definition: term.definition,
      keyword: term.keyword,
    })], {type: "application/json"}));
    formData.append("termImage", term.image[0]);
    const updatedTerm = await termService.update(term.id, formData);
    dispatch(updateTermSuccess(updatedTerm, allTerms));
  } catch (error) {
    dispatch(updateTermError({error}));
  }
}

const updateTermSuccess = (term, allTerms) => {
  const updatedTerms = allTerms.map(el => el.id === term.id ? term : el);
  return {
    type: UPDATE_TERM_SUCCESS,
    payload: {terms: updatedTerms, term}
  }
}

const updateTermError = (error) => {
  return {
    type: UPDATE_TERM_FAILURE,
    payload: error
  }
}


export const updateAwareStatus = (termId, status) => async (dispatch) => {
  dispatch({type: UPDATE_TERM_AWARE_STATUS_REQUEST});
  try {
    await termService.updateAwareStatus(termId, status);
    dispatch({type: UPDATE_TERM_AWARE_STATUS_SUCCESS});
  } catch (error) {
    dispatch(updateAwareStatusError({error}));
  }
}

const updateAwareStatusError = (error) => {
  return {
    type: UPDATE_TERM_AWARE_STATUS_FAILURE,
    payload: error
  }
}


export const deleteTerm = (termId, allTerms) => async (dispatch) => {
  dispatch({type: DELETE_TERM_REQUEST});
  try {
    await termService.deleteById(termId);
    dispatch(deleteTermSuccess(termId, allTerms));
  } catch (error) {
    dispatch(deleteTermError({error}));
  }
}

const deleteTermSuccess = (termId, allTerms) => {
  const terms = allTerms.filter(term => term.id !== termId);
  return {
    type: DELETE_TERM_SUCCESS,
    payload: terms
  }
}

const deleteTermError = (error) => {
  return {
    type: DELETE_TERM_FAILURE,
    payload: error
  }
}
