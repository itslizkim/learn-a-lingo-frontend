import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Lessons from './Lessons';
import Game from './Game';
import Profile from './Profile';
import Auth from './Auth';
// import '../Stylesheets/master.scss';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/lessons" component={Lessons} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/auth" component={Auth} />
    </Switch>
  );
}
