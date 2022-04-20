import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import Analysis from './pages/Analysis';
import ExerciseCn from './pages/ExerciseCn';
import Home from './pages/Home';
import ExamCn from './pages/ExamCn';
import ExamEn from './pages/ExamEn';
import History from './pages/History';
import MathSubject from './pages/MathSubject';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/exercise_cn'>
          <ExerciseCn />
        </Route>
        <Route path='/exam_cn'>
          <ExamCn />
        </Route>
        <Route path='/exam_en'>
          <ExamEn />
        </Route>
        <Route path='/analysis'>
          <Analysis />
        </Route>
        <Route path='/history'>
          <History />
        </Route>
        <Route path='/math_subject'>
          <MathSubject />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='*' render={() => <h1>404</h1>}></Route>
      </Switch>
    </HashRouter>
  );
}
