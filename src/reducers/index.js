import {combineReducers} from 'redux'
import authReducer from './authReducer';
import userReducer from "./userReducer";
import wordSetReducer from "./wordSetReducer";

export default combineReducers({
  authReducer, userReducer, wordSetReducer
})
