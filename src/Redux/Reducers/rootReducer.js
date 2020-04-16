import { combineReducers } from 'redux';
import userReducer from './userReducer';
import languageReducer from './languageReducer';
import progressTrailReducer from './progressTrailReducer';
import lessonReducer from './lessonReducer';

const state = {
  user: userReducer,
  languages: languageReducer,
  progress_trail: progressTrailReducer,
  lessons: lessonReducer
};

export default combineReducers(state);