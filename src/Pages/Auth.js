import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../Redux/Actions/userActions';

const Auth = props => {
  // initializing dispatch
  const dispatch = useDispatch();

  // Setting up local state using the useState hook
  const [login, setLogin] = useState(true)
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    profile_pic: ''
  });

  // controlled form functions
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(userActions.loginUserToDB(form));
    props.history.push('/');
  };

  const handleSignUpSubmit = e => {
    e.preventDefault();
    const { history } = props;
    dispatch(userActions.newUserToDB(form));
    history.push('/');
  };

  //controlled form function
  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Destructuring keys from our local state to use in the form
  const { name, email, password, profile_pic } = form;

  function toggleLogInBtn() {
    return login ? (
        <button className="login-toggle" onClick={() => setLogin(false)}>
            First time here? Click to sign up
        </button>
    ) : (
        <button className="login-toggle" onClick={() => setLogin(true)}>
            Already have an account? Log in here
        </button>
    )
}

  // Component code
  return login ? (
    <div className="form-page">
      <h1 className="header">Learn A Lingo</h1>
      <form  onSubmit={handleSubmit}>
          <h1 className="login">Login</h1>
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
          <button className="ui button" type="submit">Let's Go!</button>
      </form>
      {toggleLogInBtn()}
    </div>
  ) : (
    <div className="form-page">
      <h1 className="header">Learn A Lingo</h1>
        <form onSubmit={handleSignUpSubmit}>
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
        <input
          type="profile_pic"
          name="profile_pic"
          value={profile_pic}
          onChange={handleChange}
          placeholder="profile picture url"
        />
        <input type="submit" />
        </form>
      {toggleLogInBtn()}
    </div>
  );
}; export default Auth;

  








