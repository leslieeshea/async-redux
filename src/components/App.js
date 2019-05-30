import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCharacters from '../containers/characters/AllCharacters';
import CharacterById from '../containers/characters/CharacterById';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route path="/:id" component={CharacterById} />
      </Switch>
    </Router>
  );
}
