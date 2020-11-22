import {
  CREATE_TERM_FAILURE,
  CREATE_TERM_REQUEST,
  CREATE_TERM_SUCCESS
} from "../utils/constants/action-types/term";
import * as termService from "../services/termService";

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