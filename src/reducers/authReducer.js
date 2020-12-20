import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER
} from "../utils/constants/action-types/auth";
import {FAILED, IDLE, LOADING, SUCCEED} from "../helpers/requestStatus";

const initialState = {
  authData: {
    userId: 0,
    role: "",
    createdAt: 0,
    exp: 0
  },
  isAuth: false,
  status: IDLE,
  error: null
}

export default function authReducer(state = initialState, action) {

  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        authData: action.payload,
        isAuth: true,
        error: null,
        status: SUCCEED
      }

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isAuth: false,
        error: action.payload,
        status: FAILED
      }

    case LOGOUT_USER:
      return {
        ...state,
        authData: null,
        isAuth: false,
        error: null,
        status: SUCCEED
      }

    default:
      return state
  }
}
