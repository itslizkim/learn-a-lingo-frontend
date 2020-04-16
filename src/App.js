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
    dispatch(lessonActions.getLessons())
  });

  return (
    <Router>
      <Routes/>
    </Router>
  )
}; export default App;