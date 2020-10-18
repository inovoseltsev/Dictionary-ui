import {
  GET_TERM_GROUPS_BY_USER_ID_FAILURE,
  GET_TERM_GROUPS_BY_USER_ID_REQUEST,
  GET_TERM_GROUPS_BY_USER_ID_SUCCESS
} from "../utils/constants/action-types/termGroup";

export const getUserTermGroupsSuccess = (termGroups) => {
  return {
    type: GET_TERM_GROUPS_BY_USER_ID_SUCCESS,
    payload: termGroups
  }
}

export const getUserTermGroupsError = (error) => {
  return {
    type: GET_TERM_GROUPS_BY_USER_ID_FAILURE,
    payload: error
  }
}

export const getUserTermGroups = (id) => async (dispatch) => {
  dispatch({type: GET_TERM_GROUPS_BY_USER_ID_REQUEST});
  try {

  } catch (error) {
    dispatch(getUserTermGroupsError({error}))
  }
}
