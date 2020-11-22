import {FAILED, IDLE, LOADING, SUCCEED} from "../helpers/requestStatus";
import {
  CREATE_TERM_FAILURE,
  CREATE_TERM_REQUEST,
  CREATE_TERM_SUCCESS
} from "../utils/constants/action-types/term";

const initialState = {
  term: {
    id: 0,
    name: "",
    definition: "",
    keyword: "",
    image: ""
  },
  terms: [],
  status: IDLE,
  error: null
};

export default function termReducer(state = initialState, action) {

  switch (action.type) {

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

    default:
      return state;
  }
}