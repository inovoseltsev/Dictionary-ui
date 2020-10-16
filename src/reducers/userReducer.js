import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS
} from "../utils/constants/action-types/user";
import {FAILED, IDLE, LOADING, SUCCEED} from "../helpers/requestStatus";

const initialState = {
  id: null,
  firstName: "",
  lastName: "",
  status: IDLE,
  error: null
}

export default function userReducer(state = initialState, action) {

  switch (action.type) {
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

    default:
      return state
  }
}
