import React from 'react';
import logo from './logo.svg';
import './App.css';

import { CopyRight } from './containers/Copyright'

import { Home } from './containers/Home';
import { Counter } from './containers/Counter';
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/counter" component={Counter}/>
    </Switch>
  );
}

export default App;