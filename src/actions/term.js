import {
  CREATE_TERM_FAILURE,
  CREATE_TERM_REQUEST,
  CREATE_TERM_SUCCESS,
  DELETE_TERM_FAILURE,
  DELETE_TERM_REQUEST,
  DELETE_TERM_SUCCESS,
  GET_TERMS_BY_GROUP_ID_FAILURE,
  GET_TERMS_BY_GROUP_ID_REQUEST,
  GET_TERMS_BY_GROUP_ID_SUCCESS,
  UPDATE_TERM_FAILURE,
  UPDATE_TERM_REQUEST,
  UPDATE_TERM_SUCCESS
} from "../utils/constants/action-types/term";
import * as termService from "../services/termService";

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
