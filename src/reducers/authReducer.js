import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from "../utils/constants/action-types/auth";
import {FAILED, IDLE, LOADING, SUCCEED} from "../helpers/requestStatus";

const initialState = {
  authData: null,
  isAuth: false,
  status: IDLE,
  error: null
}

export default function authReducer(state = initialState, action) {

  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        status: LOADING,
        error: null
      }

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        authData: action.payload,
        isAuth: true,
        status: SUCCEED,
        error: null
      }

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        status: FAILED,
        isAuth: false,
        error: action.payload,
      }

    case LOGOUT_USER:
      return {
        ...state,
        status: SUCCEED,
        authData: null,
        isAuth: false,
        error: null,
      }

    default:
      return state
  }
}
