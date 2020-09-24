import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS
} from "../utils/constants/action-types/user";
import * as userService from "../services/userService";

export const createUserError = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error
  };
}

export const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: [user]
  };
}

export const createUser = (user) => async (dispatch) => {
  dispatch({type: CREATE_USER_REQUEST});
  try {
    const result = await userService.create(user);
    dispatch(createUserSuccess(result));
  } catch (error) {
    dispatch(createUserError({error}));
  }
}

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: [user]
  };
}

export const getUserError = (error) => {
  return {
    type: GET_USER_FAILURE,
    payload: error
  };
}

export const getUserById = (id) => async (dispatch) => {
  dispatch({type: GET_USER_REQUEST});
  try {
    const result = await userService.getById(id);
    dispatch(getUserSuccess(result));
  } catch (error) {
    dispatch(getUserError({error}));
  }
}


