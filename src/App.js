import React, {useEffect} from 'react';
import userActions from './Redux/Actions/userActions';
import lessonActions from './Redux/Actions/lessonActions';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages';
import {useDispatch} from 'react-redux';
import './Stylesheets/master.scss';


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.token) {
      dispatch(userActions.persistUser())
    }
    dispatch(lessonActions.getLessons());

    fetch('http://localhost:3000/lessons/fruits')
    .then(r => r.json())
    .then(fruits => {
      dispatch({
          type: "SET_FLASHCARDS",
          payload: fruits.flash_cards
      })
      console.log(fruits.flash_cards)}) 

    fetch('http://localhost:3000/lessons/alphabet')
    .then(r => r.json())
    .then(alphabet => {
      dispatch({
          type: "SET_FLASHCARDS",
          payload: alphabet.flash_cards
      })
    })

    fetch('http://localhost:3000/lessons/animals')
    .then(r => r.json())
    .then(animals => {
      dispatch({
          type: "SET_FLASHCARDS",
          payload: animals.flash_cards
      })
    })
  });

  return (
    <Router>
      <Routes/>
    </Router>
  )
}; export default App;