import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import userActions from '../Redux/Actions/userActions';

const NavBar = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  const [language, setLanguage] = useState("English")

  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };

  const userTrail = {
    user_id: user.id,
    language
  }

  const handleCreateTrail = () => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept:'application/json',
        Authorization: 'bearer' + localStorage.token
      },
      body: JSON.stringify(userTrail)
    }

    fetch('http://localhost:3000/trails', config)
      .then(r => r.json())
      .then(trailsData => {
        // update user results on the frontend
        const action = {
          type: 'SET_TRAILS',
          payload: trailsData.user.trails
        }
        // console.log("ACTION TO DISPATCH NEW RESULT:", action)
        dispatch(action)
      })
  }
  
  return(
    <ul className="nav">
      <li>Language:</li>
      <li >
        <NavLink to="/languages">English</NavLink>
      </li>
      <NavLink to="/" className= "homelink">Learn A Lingo</NavLink>
      <li>
        <NavLink to="/">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={handleLogout}> Logout </NavLink>
      </li>
    </ul>
  )
};

export default NavBar;