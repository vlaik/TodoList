import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Todos from './Todos/Todos';
import List from './List/List';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/todos'> 
        <Todo/>
        </Route>
        <Route path='/list'>
          <Lists/>
        </Route>
        <Route path='/'>
          <Homes/>
        </Route>
      </Switch>
    </Router>
  );
}

function Homes(){
  return <Home/>
}

function Todo(){
  return <Todos/>
}

function Lists(){
  return <List/>
}

export default App;
