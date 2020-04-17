import { combineReducers } from 'redux';
import userReducer from './userReducer';
import languageReducer from './languageReducer';
import trailReducer from './trailReducer';
import lessonReducer from './lessonReducer';
import flashcardReducer from './flashcardReducer'

const state = {
  user: userReducer,
  languages: languageReducer,
  trail: trailReducer,
  lessons: lessonReducer,
  flashcards: flashcardReducer
};

export default combineReducers(state);