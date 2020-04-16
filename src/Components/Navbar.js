import React from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import userActions from '../Redux/Actions/userActions';

const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  
  return(
    <ul className="nav">
      <li>Language:</li>
      <li>
        <NavLink to="/languages">English</NavLink>
      </li>
      <NavLink to="/" className= "homelink">Learn A Lingo</NavLink>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={handleLogout}> Logout </NavLink>
      </li>
    </ul>
  )
};

export default NavBar;