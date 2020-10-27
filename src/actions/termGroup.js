import {
  CREATE_TERM_GROUP_FOR_FOLDER_FAILURE,
  CREATE_TERM_GROUP_FOR_FOLDER_REQUEST,
  CREATE_TERM_GROUP_FOR_FOLDER_SUCCESS,
  CREATE_TERM_GROUP_FOR_USER_FAILURE,
  CREATE_TERM_GROUP_FOR_USER_REQUEST,
  CREATE_TERM_GROUP_FOR_USER_SUCCESS,
  DELETE_TERM_GROUP_FAILURE,
  DELETE_TERM_GROUP_REQUEST,
  DELETE_TERM_GROUP_SUCCESS,
  GET_TERM_GROUP_FAILURE,
  GET_TERM_GROUP_REQUEST,
  GET_TERM_GROUP_SUCCESS,
  GET_TERM_GROUPS_BY_FOLDER_ID_FAILURE,
  GET_TERM_GROUPS_BY_FOLDER_ID_REQUEST,
  GET_TERM_GROUPS_BY_FOLDER_ID_SUCCESS,
  GET_TERM_GROUPS_BY_USER_ID_FAILURE,
  GET_TERM_GROUPS_BY_USER_ID_REQUEST,
  GET_TERM_GROUPS_BY_USER_ID_SUCCESS,
  UPDATE_TERM_GROUP_FAILURE,
  UPDATE_TERM_GROUP_REQUEST,
  UPDATE_TERM_GROUP_SUCCESS
} from "../utils/constants/action-types/termGroup";

import * as termGroupService from "../services/termGroupService"

export const getTermGroup = (id) => async (dispatch) => {
  dispatch({type: GET_TERM_GROUP_REQUEST});
  try {
    const termGroup = await termGroupService.getById(id);
    dispatch(getTermGroupSuccess(termGroup));
  } catch (error) {
    dispatch(getTermGroupError({error}));
  }
}

const getTermGroupSuccess = (termGroup) => {
  return {
    type: GET_TERM_GROUP_SUCCESS,
    payload: termGroup
  };
}

const getTermGroupError = (error) => {
  return {
    type: GET_TERM_GROUP_FAILURE,
    payload: error
  };
}


export const getUserTermGroups = (userId) => async (dispatch) => {
  dispatch({type: GET_TERM_GROUPS_BY_USER_ID_REQUEST});
  try {
    const termGroups = await termGroupService.getAllByUserId(userId);
    dispatch(getUserTermGroupsSuccess(termGroups));
  } catch (error) {
    dispatch(getUserTermGroupsError({error}));
  }
}

const getUserTermGroupsSuccess = (termGroups) => {
  return {
    type: GET_TERM_GROUPS_BY_USER_ID_SUCCESS,
    payload: termGroups
  };
}

const getUserTermGroupsError = (error) => {
  return {
    type: GET_TERM_GROUPS_BY_USER_ID_FAILURE,
    payload: error
  };
}


export const getFolderTermGroups = (folderId) => async (dispatch) => {
  dispatch({type: GET_TERM_GROUPS_BY_FOLDER_ID_REQUEST});
  try {
    const termGroups = await termGroupService.getAllByFolderId(folderId);
    dispatch(getFolderTermGroupsSuccess(termGroups));
  } catch (error) {
    dispatch(getFolderTermGroupsError(error));
  }
}

const getFolderTermGroupsSuccess = (termGroups) => {
  return {
    type: GET_TERM_GROUPS_BY_FOLDER_ID_SUCCESS,
    payload: termGroups
  };
}

const getFolderTermGroupsError = (error) => {
  return {
    type: GET_TERM_GROUPS_BY_FOLDER_ID_FAILURE,
    payload: error
  };
}


export const createUserTermGroup = (termGroup, allTermGroups) => async (dispatch) => {
  dispatch({type: CREATE_TERM_GROUP_FOR_USER_REQUEST});
  try {
    const createdTermGroup = await termGroupService.createForUser(termGroup);
    dispatch(createUserTermGroupSuccess(createdTermGroup, allTermGroups));
  } catch (error) {
    dispatch(createUserTermGroupError({error}));
  }
}

const createUserTermGroupSuccess = (termGroup, termGroups) => {
  const updatedGroups = [...termGroups];
  updatedGroups.push(termGroup);
  return {
    type: CREATE_TERM_GROUP_FOR_USER_SUCCESS,
    payload: {termGroups: updatedGroups, termGroup}
  }
}

const createUserTermGroupError = (error) => {
  return {
    type: CREATE_TERM_GROUP_FOR_USER_FAILURE,
    payload: error
  }
}


export const createFolderTermGroup = (termGroup, allTermGroups) => async (dispatch) => {
  dispatch({type: CREATE_TERM_GROUP_FOR_FOLDER_REQUEST});
  try {
    const createdTermGroup = await termGroupService.createForFolder(termGroup);
    dispatch(createFolderTermGroupSuccess(createdTermGroup, allTermGroups));
  } catch (error) {
    dispatch(createFolderTermGroupError({error}))
  }
}

const createFolderTermGroupSuccess = (termGroup, termGroups) => {
  const updatedGroups = [...termGroups];
  updatedGroups.push(termGroup);
  return {
    type: CREATE_TERM_GROUP_FOR_FOLDER_SUCCESS,
    payload: {termGroups: updatedGroups, termGroup}
  };
}

const createFolderTermGroupError = (error) => {
  return {
    type: CREATE_TERM_GROUP_FOR_FOLDER_FAILURE,
    payload: error
  };
}


export const updateTermGroup = (termGroup, allTermGroups) => async (dispatch) => {
  dispatch({type: UPDATE_TERM_GROUP_REQUEST});
  try {
    const updatedTermGroup = await termGroupService.update(termGroup);
    dispatch(updateTermGroupSuccess(updatedTermGroup, allTermGroups));
  } catch (error) {
    dispatch(updateTermGroupError({error}));
  }
}

const updateTermGroupSuccess = (termGroup, termGroups) => {
  const updatedGroups = termGroups.map(el => el.id === termGroup.id ? termGroup : el);
  return {
    type: UPDATE_TERM_GROUP_SUCCESS,
    payload: {termGroups: updatedGroups, termGroup}
  };
}

const updateTermGroupError = (error) => {
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

const deleteTermGroupSuccess = (groupId, termGroups) => {
  const updatedGroups = termGroups.filter(el => el.id !== groupId);
  return {
    type: DELETE_TERM_GROUP_SUCCESS,
    payload: updatedGroups
  }
}

const deleteTermGroupError = (error) => {
  return {
    type: DELETE_TERM_GROUP_FAILURE,
    payload: error
  };
}
