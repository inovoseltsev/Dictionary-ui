import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from "../utils/constants/action-types/auth";
import * as authService from "../services/authService";
import * as userService from "../services/userService"
import jwt from "jwt-decode";
import {getUserSuccess} from "./user";

export const loginError = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  };
}

export const loginSuccess = (authObject) => {
  const {sub, role, iat, exp} = authObject;
  const authData = {userId: sub, role, createdAt: iat, exp};
  return {
    type: LOGIN_USER_SUCCESS,
    payload: authData
  }
}

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({type: LOGIN_USER_REQUEST});
  try {
    const token = await authService.login(credentials);
    localStorage.setItem("token", token);
    const tokenData = jwt(token);
    dispatch(loginSuccess(tokenData));
  } catch (error) {
    dispatch(loginError({error}));
  }
}


export const refreshUser = () => async (dispatch) => {
  try {
    const tokenData = jwt(localStorage.getItem("token"));
    const user = await userService.getById(tokenData.sub);
    dispatch(getUserSuccess(user));
    dispatch(loginSuccess(tokenData));
  } catch (error) {
    dispatch(logoutUser());
  }
}

export const logoutUser = () => {
  localStorage.removeItem("token");
  return {type: LOGOUT_USER}
}





