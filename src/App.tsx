import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import Analysis from './pages/Analysis';
import Exercise from './pages/Exercise';
import Home from './pages/Home';
import Literacy from './pages/Literacy';
import Report from './pages/Report';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/exercise'>
          <Exercise />
        </Route>
        <Route path='/literacy'>
          <Literacy />
        </Route>
        <Route path='/record'>
          <Report />
        </Route>
        <Route path='/analysis'>
          <Analysis />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='*' render={() => <h1>404</h1>}></Route>
      </Switch>
    </HashRouter>
  );
}
