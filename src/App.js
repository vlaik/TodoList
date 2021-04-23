import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Todos from './Todos/Todos';
import List from './List/List';
import Header from './Home/Header/Header';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/todos' component={Todos}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/' component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
