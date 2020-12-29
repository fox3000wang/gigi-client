import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Literacy from './pages/Literacy';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Literacy />
        </Route>
      </Switch>
    </Router>
  );
}
