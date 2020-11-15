import {combineReducers} from 'redux'
import authReducer from './authReducer';
import userReducer from "./userReducer";
import termGroupReducer from "./termGroupReducer";
import termReducer from "./termReducer";

export default combineReducers({
  authReducer, userReducer, termGroupReducer, termReducer
})
