import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; 
import combineReducers from './redux/reduser/combineReduser'

const store = createStore(combineReducers);

store.subscribe(()=>{
  console.log(store.getState())
});

console.log(store.getState())


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);

