import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';
import Profile from './Profile';
import Auth from './Auth';
import Languages from './Languages';
import Fruits from './Fruits'
import Animals from './Animals'
import Alphabet from './Alphabet'
import LessonsContainer from './LessonsContainer';
import { useSelector } from 'react-redux'

export default function Routes() {
      // grab user from store
      const user = useSelector(state => state.user)

  return (
    <Switch>
      <Route exact path="/" component={Object.keys(user).length ? Profile : Auth} />
      <Route exact path="/lessons" component={LessonsContainer} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/languages" component={Languages} />
      <Route exact path="/lessons/fruits" component={Fruits} />
      <Route exact path="/lessons/animals" component={Animals}/>
      <Route exact path="/lessons/alphabet" component={Alphabet}/>
    </Switch>
  );
}
