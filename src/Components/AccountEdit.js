import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

const AccountEdit = props => {

    // const user = useSelector(state => state.user);
    const dispatch = useDispatch();
  // Setting up local state using the useState hook
  const [userEditForm, setUserEditForm] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.updateUserFromDB(userEditForm));
    props.history.push('/users/id');
  };

  const handleChange = e =>
  setUserEditForm({ ...userEditForm, [e.target.name]: e.target.value });

  const { name, email } = userEditForm;

  return (
    <div className="form-page">
        <form onSubmit={handleSubmit}>
            <h1>Edit Profile</h1>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="name"
            />
            <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="email"
            />
            <input type="submit" />
        </form>
    </div>
    
  );

};


export default AccountEdit;