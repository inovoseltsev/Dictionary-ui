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
import {FAILED, IDLE, LOADING, SUCCEED} from "../helpers/requestStatus";
import {EN} from "../helpers/languageChooser";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  locale: EN,
  status: IDLE,
  error: null
}

export default function userReducer(state = initialState, action) {

  switch (action.type) {

    case GET_USER_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        status: SUCCEED
      };

    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      };

    case CREATE_USER_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        status: SUCCEED
      };

    case CREATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      };

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        status: SUCCEED
      }

    case UPDATE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case SET_LOCALE:
      return {
        ...state,
        locale: action.payload,
        error: null,
        status: SUCCEED
      }

    default:
      return state
  }
}
