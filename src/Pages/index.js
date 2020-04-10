import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Lesson from './Lesson';
import Game from './Game';
import Profile from './Profile';
import Login from './Login';
import Signup from './SignUp';
import English from './languages/English';
import '../Stylesheets/master.scss';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/lesson" component={Lesson} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/languages/English" component={English} />
    </Switch>
  );
}
