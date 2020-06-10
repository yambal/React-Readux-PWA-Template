import React from 'react';

import { Home } from './containers/Home';
import { Counter } from './containers/Counter';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/React-Readux-PWA-Template">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/counter" component={Counter}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;