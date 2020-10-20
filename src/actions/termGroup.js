import {
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

export function getUserTermGroupsSuccess(termGroups) {
  return {
    type: GET_TERM_GROUPS_BY_USER_ID_SUCCESS,
    payload: termGroups
  };
}

export function getUserTermGroupsError(error) {
  return {
    type: GET_TERM_GROUPS_BY_USER_ID_FAILURE,
    payload: error
  };
}

export const getUserTermGroups = (id) => async (dispatch) => {
  dispatch({type: GET_TERM_GROUPS_BY_USER_ID_REQUEST});
  try {
    const result = await termGroupService.getAllByUserId(id);
    dispatch(getUserTermGroupsSuccess(result));
  } catch (error) {
    dispatch(getUserTermGroupsError({error}));
  }
}

export function updateTermGroupSuccess(termGroup, termGroups) {
  const updatedGroups = termGroups.map(el => el.id === termGroup.id ? termGroup : el);
  return {
    type: UPDATE_TERM_GROUP_SUCCESS,
    payload: {
      termGroup,
      termGroups: updatedGroups
    }
  };
}

export function updateTermGroupError(error) {
  return {
    type: UPDATE_TERM_GROUP_FAILURE,
    payload: error
  };
}

export const updateTermGroup = (termGroupData, termGroups) => async (dispatch) => {
  dispatch({type: UPDATE_TERM_GROUP_REQUEST});
  try {
    const result = await termGroupService.update(termGroupData);
    dispatch(updateTermGroupSuccess(result, termGroups));
  } catch (error) {
    dispatch(updateTermGroupError({error}));
  }
}

export function deleteTermGroupSuccess(groupId, termGroups) {
  const updatedGroups = termGroups.filter(el => el.id !== groupId);
  return {
    type: DELETE_TERM_GROUP_SUCCESS,
    payload: updatedGroups
  }
}

export function deleteTermGroupError(error) {
  return {
    type: DELETE_TERM_GROUP_FAILURE,
    payload: error
  };
}

export const deleteTermGroup = (groupId, termGroups) => async (dispatch) => {
  dispatch({type: DELETE_TERM_GROUP_REQUEST});
  try {
    await termGroupService.deleteById(groupId);
    dispatch(deleteTermGroupSuccess(groupId, termGroups));
  } catch (error) {
    dispatch(deleteTermGroupError({error}));
  }
}
