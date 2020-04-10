import React from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logoutUser());
  };
  return(
    <ul className="nav">
      <li>
        <NavLink to="/" className= "homelink">Learn A Lingo</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink> /
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <NavLink to="/" onClick={handleLogout}>
        Logout
      </NavLink>
    </ul>
  )
};

export default NavBar;