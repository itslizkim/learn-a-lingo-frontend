import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Pages';
import Nav from './Components/Navbar';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  // const dogs = useSelector(state => state.dogs);
  // const dispatch = useDispatch();
  // console.log('doggos from the store =========> ', dogs);
  // useEffect(() => {
  //   fetch('http://localhost:3000/dogs')
  //     .then(r => r.json())
  //     .then(dogs => {
  //       const action = {
  //         type: 'SET_DOGS',
  //         payload: dogs
  //       };
  //       dispatch(action);
  //     });
  // }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}