import {
  CREATE_TERM_FAILURE,
  CREATE_TERM_REQUEST,
  CREATE_TERM_SUCCESS,
  GET_TERMS_BY_GROUP_ID_FAILURE,
  GET_TERMS_BY_GROUP_ID_REQUEST,
  GET_TERMS_BY_GROUP_ID_SUCCESS
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

export const getTermsSuccess = (terms) => {
  return {
    type: GET_TERMS_BY_GROUP_ID_SUCCESS,
    payload: terms
  }
}

export const getTermsError = (error) => {
  return {
    type: GET_TERMS_BY_GROUP_ID_FAILURE,
    payload: error
  }
}

export const createTerm = (term, allTerms) => async (dispatch) => {
  dispatch({type: CREATE_TERM_REQUEST});
  try {
    const formData = new FormData();
    formData.append("termDto", new Blob([JSON.stringify({
      name: term.name,
      definition: term.definition,
      keyword: term.keyword
    })], {type: "application/json"}));
    formData.append("termImage", term.image[0]);
    const createdTerm = await termService.createTerm(formData);
    dispatch(createTermSuccess(createdTerm, allTerms));
  } catch (error) {
    dispatch(createTermError({error}));
  }
}

export const createTermSuccess = (term, allTerms) => {
  const terms = [...allTerms];
  terms.unshift(term);
  return {
    type: CREATE_TERM_SUCCESS,
    payload: {term, terms}
  }
}

export const createTermError = (error) => {
  return {
    type: CREATE_TERM_FAILURE,
    payload: error
  }
}