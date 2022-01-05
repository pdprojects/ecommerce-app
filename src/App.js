import React from 'react';
import  { Route, Routes, Switch } from 'react-router-dom';

import HomePage from './page/homepage/homepage.component';

import './App.css';

const HatsPage = () => (
  <div><h1>HATS</h1></div>
)

function App(props) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
        </Switch>
    </div>
  );
}
export default App;