import React from 'react';
import {NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

const NavBar = () => {
  const dispatch = useDispatch();
  const handleUserDelete = () => {
    dispatch(userActions.deleteUserFromDB(user.id));
  };
  return(
    <ul className="nav">
      <button to="/delete" onClick={handleUserDelete}>
        Delete profile
      </button>
    </ul>
  )
};

export default NavBar;