import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';
import { Button, Form } from 'semantic-ui-react'

const LoginPage = props => {
  // initializing dispatch
  const dispatch = useDispatch();
  // Setting up local state using the useState hook
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  // controlled form functions
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(loginForm));
    props.history.push('/');
  };

  const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  // Destructuring keys from our local state to use in the form
  const { email, password } = loginForm;

  // Component code
  return (
    <div className="form-page">
        <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
            />
            <input type="submit" />
        </form>
    </div>
    
  );
};

export default LoginPage;