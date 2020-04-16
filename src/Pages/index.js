import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import Game from './Game';
import Profile from './Profile';
import Auth from './Auth';
import Languages from './Languages';
import LessonsContainer from './LessonsContainer';
import { useSelector } from 'react-redux'

export default function Routes() {
      // grab user from store
      const user = useSelector(state => state.user)

  return (
    <Switch>
      <Route exact path="/" component={Object.keys(user).length ? Home : Auth} />
      <Route exact path="/lessons" component={LessonsContainer} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/languages" component={Languages} />
    </Switch>
  );
}
