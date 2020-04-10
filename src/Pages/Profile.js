import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';
import ProgressTrail from '../Components/ProgressTrail';
import EditForm from '../Components/AccountEdit'

export default function Profile() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleUserDelete = () => {
    dispatch(userActions.deleteUserFromDB(user.id));
  };

  const handleUserUpdate = () => {
    return (
      <EditForm/>
    );
  };

  return (
    <div>
      <h1>{user.name ? user.name + "'s": "You must be logged in to view this"} Profile</h1>
      <h3>{user.email}</h3>
      <button onClick={() => handleUserUpdate()}>Edit Profile</button>
      <ProgressTrail/>
      <button onClick={() => handleUserDelete()}>Delete Profile</button>
    </div>
  );
}