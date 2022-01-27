import React from 'react';
import  { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component'
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component'


import './App.css';
import SingInAndSignUpPage from './page/sign-in-and-sing-up/sign-in-and-sing-up.component';

function App(props) {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SingInAndSignUpPage} />
        </Switch>
    </div>
  );
}
export default App;