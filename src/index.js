import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux'; 
import combineReducers from './redux/reduser/combineReduser'

const store = createStore(combineReducers, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);

