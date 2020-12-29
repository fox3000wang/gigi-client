import './css/reset.css';
//import './css/main.css';
// require('./css/reset.css');
// require('./css/main.css');

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
