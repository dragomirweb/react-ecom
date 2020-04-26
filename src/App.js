import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './assets/css/main.css';

import HomePage from './pages/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from './components/header/header.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/contact" component={ShopPage}></Route>
        <Route exact path="/signIn" component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
