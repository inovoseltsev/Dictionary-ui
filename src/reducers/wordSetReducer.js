import {FAILED, IDLE, LOADING, SUCCEED} from "../helpers/requestStatus";
import {
  GET_WORD_SETS_FAILURE,
  GET_WORD_SETS_REQUEST,
  GET_WORD_SETS_SUCCESS
} from "../utils/constants/action-types/wordSet";

const initialState = {
  wordSets: [],
  status: IDLE,
  error: null
};

export default function wordSetReducer(state = initialState, action) {

  switch (action.type) {

    case GET_WORD_SETS_REQUEST:
      return {
        ...state,
        status: LOADING,
        error: null
      }
    case GET_WORD_SETS_SUCCESS:
      return {
        ...state,
        wordSets: action.payload,
        error: null,
        status: SUCCEED
      }
    case GET_WORD_SETS_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    default:
      return state;
  }
}
