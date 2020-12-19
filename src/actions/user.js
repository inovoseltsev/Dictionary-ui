import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  SET_LOCALE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS
} from "../utils/constants/action-types/user";
import * as userService from "../services/userService";

export const getUserById = (id) => async (dispatch) => {
  dispatch({type: GET_USER_REQUEST});
  try {
    const user = await userService.getById(id);
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserError({error}));
  }
}

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  };
}

const getUserError = (error) => {
  return {
    type: GET_USER_FAILURE,
    payload: error
  };
}


export const createUser = (user) => async (dispatch) => {
  dispatch({type: CREATE_USER_REQUEST});
  try {
    const createdUser = await userService.create(user);
    dispatch(createUserSuccess(createdUser));
  } catch (error) {
    dispatch(createUserError({error}));
  }
}

const createUserError = (error) => {
  return {
    type: CREATE_USER_FAILURE,
    payload: error
  };
}


const createUserSuccess = (user) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user
  };
}

export const updateUser = (user) => async (dispatch) => {
  dispatch({type: UPDATE_USER_REQUEST});
  try {
    const updatedUser = await userService.update(user);
    dispatch(updateUserSuccess(updatedUser));
  } catch (error) {
    dispatch(updateUserError({error}));
  }
}

const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user
  }
}

const updateUserError = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error
  };
}

export const setLocale = (locale) => {
  return {
    type: SET_LOCALE,
    payload: locale
  };
}


