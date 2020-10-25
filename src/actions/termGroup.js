import {
  CREATE_TERM_GROUP_FOR_USER_FAILURE,
  CREATE_TERM_GROUP_FOR_USER_REQUEST,
  CREATE_TERM_GROUP_FOR_USER_SUCCESS,
  DELETE_TERM_GROUP_FAILURE,
  DELETE_TERM_GROUP_REQUEST,
  DELETE_TERM_GROUP_SUCCESS,
  GET_TERM_GROUPS_BY_USER_ID_FAILURE,
  GET_TERM_GROUPS_BY_USER_ID_REQUEST,
  GET_TERM_GROUPS_BY_USER_ID_SUCCESS,
  UPDATE_TERM_GROUP_FAILURE,
  UPDATE_TERM_GROUP_REQUEST,
  UPDATE_TERM_GROUP_SUCCESS
} from "../utils/constants/action-types/termGroup";

import * as termGroupService from "../services/termGroupService"

export const getUserTermGroups = (id) => async (dispatch) => {
  dispatch({type: GET_TERM_GROUPS_BY_USER_ID_REQUEST});
  try {
    const result = await termGroupService.getAllByUserId(id);
    dispatch(getUserTermGroupsSuccess(result));
  } catch (error) {
    dispatch(getUserTermGroupsError({error}));
  }
}

export const getUserTermGroupsSuccess = (termGroups) => {
  return {
    type: GET_TERM_GROUPS_BY_USER_ID_SUCCESS,
    payload: termGroups
  };
}

export const getUserTermGroupsError = (error) => {
  return {
    type: GET_TERM_GROUPS_BY_USER_ID_FAILURE,
    payload: error
  };
}


export const createUserTermGroup = (termGroup, allTermGroups) => async (dispatch) => {
  dispatch({type: CREATE_TERM_GROUP_FOR_USER_REQUEST});
  try {
    const result = await termGroupService.createForUser(termGroup);
    dispatch(createUserTermGroupSuccess(result, allTermGroups));
  } catch (error) {
    dispatch(createUserTermGroupError({error}));
  }
}

export const createUserTermGroupSuccess = (termGroup, termGroups) => {
  const updatedGroups = [...termGroups];
  updatedGroups.push(termGroup);
  return {
    type: CREATE_TERM_GROUP_FOR_USER_SUCCESS,
    payload: {termGroups: updatedGroups, termGroup}
  }
}

export const createUserTermGroupError = (error) => {
  return {
    type: CREATE_TERM_GROUP_FOR_USER_FAILURE,
    payload: error
  }
}


export const updateTermGroup = (termGroup, allTermGroups) => async (dispatch) => {
  dispatch({type: UPDATE_TERM_GROUP_REQUEST});
  try {
    const result = await termGroupService.update(termGroup);
    dispatch(updateTermGroupSuccess(result, allTermGroups));
  } catch (error) {
    dispatch(updateTermGroupError({error}));
  }
}

export const updateTermGroupSuccess = (termGroup, termGroups) => {
  const updatedGroups = termGroups.map(el => el.id === termGroup.id ? termGroup : el);
  return {
    type: UPDATE_TERM_GROUP_SUCCESS,
    payload: {termGroups: updatedGroups, termGroup}
  };
}

export const updateTermGroupError = (error) => {
  return {
    type: UPDATE_TERM_GROUP_FAILURE,
    payload: error
  };
}


export const deleteTermGroup = (groupId, allTermGroups) => async (dispatch) => {
  dispatch({type: DELETE_TERM_GROUP_REQUEST});
  try {
    await termGroupService.deleteById(groupId);
    dispatch(deleteTermGroupSuccess(groupId, allTermGroups));
  } catch (error) {
    dispatch(deleteTermGroupError({error}));
  }
}

export const deleteTermGroupSuccess = (groupId, termGroups) => {
  const updatedGroups = termGroups.filter(el => el.id !== groupId);
  return {
    type: DELETE_TERM_GROUP_SUCCESS,
    payload: updatedGroups
  }
}

export const deleteTermGroupError = (error) => {
  return {
    type: DELETE_TERM_GROUP_FAILURE,
    payload: error
  };
}
