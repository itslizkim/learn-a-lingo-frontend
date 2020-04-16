import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';
import ProgressTrail from '../Components/ProgressTrail';
import Nav from '../Components/Navbar'

export default function Profile() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleUserDelete = () => {
    dispatch(userActions.deleteUserFromDB(user.id));
  };

  return (
    <div className="user">
      <Nav/>
      <h1>{user.name ? user.name + "'s" : "You must be logged in to view this"} Profile</h1>
      <img alt="profile_pic" src={user.profile_pic}/>
      <h3>Email: {user.email}</h3>
      <ProgressTrail/>
      <button onClick={() => handleUserDelete()}>Delete Profile</button>
    </div>
  );
}