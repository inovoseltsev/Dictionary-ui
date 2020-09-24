import {applyMiddleware, createStore} from 'redux'
import reducer from "../reducers";
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(ReduxThunk, logger));

export default store;