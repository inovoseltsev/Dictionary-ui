import {IDLE} from "../helpers/requestStatus";

const initialState = {
  term: {
    id: 0,
    name: "",
    definition: "",
    keyword: "",
    image: []
  },
  terms: [],
  status: IDLE,
  error: null
};

export default function termReducer(state = initialState, action) {

  switch (action.type) {
    default:
      return state;
  }
}