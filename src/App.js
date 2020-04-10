import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages';
import Nav from './Components/Navbar';
import userActions from './Redux/Actions/userActions';
import {useDispatch} from 'react-redux';
import './Stylesheets/master.scss';


export default function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    if (localStorage.token) {
      dispatch(userActions.persistUser())
    }
  })

  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}