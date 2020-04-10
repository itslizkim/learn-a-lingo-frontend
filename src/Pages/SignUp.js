import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

const Signup = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [signupForm, setSignupForm] = useState({
    email: '',
    password: '',
    name: ''
  });

  // Controlled form functions
  const handleChange = e =>
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUserToDB(signupForm));
    history.push('/');
  };

  // Destructuring keys from our local state to use in the form
  const { name, email, password } = signupForm;

  // Component code
  return (
    <div className="form-page">
        <form onSubmit={handleSubmit}>
        <h1>Sign Up Page</h1>
        <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="full name"
        />
        <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
        />
        <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
        />
        <input type="submit" />
        </form>
    </div>
  );
};

export default Signup;