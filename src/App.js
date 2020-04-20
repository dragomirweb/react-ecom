import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './assets/css/main.css';

import HomePage from './pages/homepage.component'

const HatsPage = () => (
  <React.Fragment>
    <h1>Hats</h1>
  </React.Fragment>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
