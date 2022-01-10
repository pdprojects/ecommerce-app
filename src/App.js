import React from 'react';
import  { Route, Routes, Switch } from 'react-router-dom';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component'

import './App.css';

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
}
export default App;