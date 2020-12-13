import {FAILED, IDLE, LOADING, SUCCEED} from "../helpers/requestStatus";
import {
  CREATE_TERM_FAILURE,
  CREATE_TERM_REQUEST,
  CREATE_TERM_SUCCESS,
  DELETE_TERM_FAILURE,
  DELETE_TERM_REQUEST,
  DELETE_TERM_SUCCESS,
  GET_ANSWERS_FOR_TERM_FAILURE,
  GET_ANSWERS_FOR_TERM_REQUEST,
  GET_ANSWERS_FOR_TERM_SUCCESS,
  GET_STUDY_SET_FAILURE,
  GET_STUDY_SET_REQUEST,
  GET_STUDY_SET_SUCCESS,
  GET_STUDY_SET_WITH_IMAGES_FAILURE,
  GET_STUDY_SET_WITH_IMAGES_REQUEST,
  GET_STUDY_SET_WITH_IMAGES_SUCCESS,
  GET_STUDY_SET_WITH_KEYWORDS_FAILURE,
  GET_STUDY_SET_WITH_KEYWORDS_REQUEST,
  GET_STUDY_SET_WITH_KEYWORDS_SUCCESS,
  GET_TERMS_BY_GROUP_ID_FAILURE,
  GET_TERMS_BY_GROUP_ID_REQUEST,
  GET_TERMS_BY_GROUP_ID_SUCCESS,
  UPDATE_TERM_AWARE_STATUS_FAILURE,
  UPDATE_TERM_AWARE_STATUS_REQUEST,
  UPDATE_TERM_AWARE_STATUS_SUCCESS,
  UPDATE_TERM_FAILURE,
  UPDATE_TERM_REQUEST,
  UPDATE_TERM_SUCCESS
} from "../utils/constants/action-types/term";
import {DEFAULT, IMAGES, KEYWORDS} from "../helpers/studyMode";

const initialState = {
  term: {
    id: 0,
    name: "",
    definition: "",
    keyword: "",
    imageFile: {
      name: "",
      content: ""
    },
    answers: []
  },
  terms: [],
  studySet: [],
  studyMode: DEFAULT,
  status: IDLE,
  error: null
};

export default function termReducer(state = initialState, action) {

  switch (action.type) {

    case GET_TERMS_BY_GROUP_ID_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case GET_TERMS_BY_GROUP_ID_SUCCESS:
      return {
        ...state,
        terms: action.payload,
        error: null,
        status: SUCCEED
      }

    case GET_STUDY_SET_REQUEST: {
      return {
        ...state,
        error: null,
        status: LOADING
      }
    }

    case GET_STUDY_SET_SUCCESS: {
      return {
        ...state,
        studySet: action.payload,
        studyMode: DEFAULT,
        error: null,
        status: SUCCEED,
      }
    }

    case GET_STUDY_SET_FAILURE: {
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }
    }

    case GET_STUDY_SET_WITH_KEYWORDS_REQUEST: {
      return {
        ...state,
        error: null,
        status: LOADING
      }
    }

    case GET_STUDY_SET_WITH_KEYWORDS_SUCCESS: {
      return {
        ...state,
        studySet: action.payload,
        studyMode: KEYWORDS,
        error: null,
        status: LOADING
      }
    }

    case GET_STUDY_SET_WITH_KEYWORDS_FAILURE: {
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }
    }

    case GET_STUDY_SET_WITH_IMAGES_REQUEST: {
      return {
        ...state,
        error: null,
        status: LOADING
      }
    }

    case GET_STUDY_SET_WITH_IMAGES_SUCCESS: {
      return {
        ...state,
        studySet: action.payload,
        studyMode: IMAGES,
        error: null,
        status: SUCCEED
      }
    }

    case GET_STUDY_SET_WITH_IMAGES_FAILURE: {
      return{
        ...state,
        error: action.payload,
        status: FAILED
      }
    }


    case GET_TERMS_BY_GROUP_ID_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case GET_ANSWERS_FOR_TERM_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case GET_ANSWERS_FOR_TERM_SUCCESS:
      return {
        ...state,
        term: {...state.term, answers: action.payload},
        error: null,
        status: SUCCEED
      }

    case GET_ANSWERS_FOR_TERM_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case CREATE_TERM_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case CREATE_TERM_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        status: SUCCEED
      }

    case CREATE_TERM_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case UPDATE_TERM_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case UPDATE_TERM_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: null,
        status: SUCCEED
      }

    case UPDATE_TERM_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case UPDATE_TERM_AWARE_STATUS_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case UPDATE_TERM_AWARE_STATUS_SUCCESS:
      return {
        ...state,
        error: null,
        status: SUCCEED
      }

    case UPDATE_TERM_AWARE_STATUS_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    case DELETE_TERM_REQUEST:
      return {
        ...state,
        error: null,
        status: LOADING
      }

    case DELETE_TERM_SUCCESS:
      return {
        ...state,
        terms: action.payload,
        error: null,
        status: SUCCEED
      }

    case DELETE_TERM_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    default:
      return state;
  }
}
