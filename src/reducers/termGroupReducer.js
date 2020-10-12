import {FAILED, IDLE, LOADING, SUCCEED} from "../helpers/requestStatus";
import {
  GET_TERM_GROUPS_FAILURE,
  GET_TERM_GROUPS_REQUEST,
  GET_TERM_GROUPS_SUCCESS
} from "../utils/constants/action-types/termGroup";

const initialState = {
  wordSets: [],
  status: IDLE,
  error: null
};

export default function termGroupReducer(state = initialState, action) {

  switch (action.type) {

    case GET_TERM_GROUPS_REQUEST:
      return {
        ...state,
        status: LOADING,
        error: null
      }
    case GET_TERM_GROUPS_SUCCESS:
      return {
        ...state,
        wordSets: action.payload,
        error: null,
        status: SUCCEED
      }
    case GET_TERM_GROUPS_FAILURE:
      return {
        ...state,
        error: action.payload,
        status: FAILED
      }

    default:
      return state;
  }
}
