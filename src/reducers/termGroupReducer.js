import {FAILED, IDLE, LOADING, SUCCEED} from "../helpers/requestStatus";
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

const initialState = {
  termGroup: {
    id: 0,
    name: "",
    description: "",
  },
  termGroups: [],
  status: IDLE,
  error: null
};

export default function termGroupReducer(state = initialState, action) {

  switch (action.type) {

    case GET_TERM_GROUP_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case GET_TERM_GROUP_SUCCESS:
      return {
        ...state,
        termGroup: action.payload,
        error: null,
        status: SUCCEED
      }

    case GET_TERM_GROUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case GET_TERM_GROUPS_BY_USER_ID_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case GET_TERM_GROUPS_BY_USER_ID_SUCCESS:
      return {
        ...state,
        termGroups: action.payload,
        error: null,
        status: SUCCEED
      }

    case GET_TERM_GROUPS_BY_USER_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case GET_TERM_GROUPS_BY_FOLDER_ID_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case GET_TERM_GROUPS_BY_FOLDER_ID_SUCCESS:
      return {
        ...state,
        termGroups: action.payload,
        error: null,
        status: SUCCEED
      }

    case GET_TERM_GROUPS_BY_FOLDER_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: SUCCEED
      }

    case CREATE_TERM_GROUP_FOR_USER_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case CREATE_TERM_GROUP_FOR_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        status: SUCCEED
      }

    case CREATE_TERM_GROUP_FOR_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case CREATE_TERM_GROUP_FOR_FOLDER_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case CREATE_TERM_GROUP_FOR_FOLDER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        status: SUCCEED
      }

    case CREATE_TERM_GROUP_FOR_FOLDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case UPDATE_TERM_GROUP_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case UPDATE_TERM_GROUP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        status: SUCCEED
      }

    case UPDATE_TERM_GROUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case DELETE_TERM_GROUP_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case DELETE_TERM_GROUP_SUCCESS:
      return {
        ...state,
        termGroups: action.payload,
        termGroup: initialState.termGroup,
        error: null,
        status: SUCCEED
      }

    case DELETE_TERM_GROUP_FAILURE: {
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }
    }
    default:
      return state;
  }
}
