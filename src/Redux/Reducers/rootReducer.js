import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import dogsReducer from './dogsReducer';

const state = {
  user: userReducer,
//   game: sReducer
};

export default combineReducers(state);