import {combineReducers} from 'redux'
import authReducer from './authReducer';
import userReducer from "./userReducer";
import termGroupReducer from "./termGroupReducer";

export default combineReducers({
  authReducer, userReducer, wordSetReducer: termGroupReducer
})
