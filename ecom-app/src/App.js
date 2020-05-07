import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-component';
import {Route,Switch} from 'react-router-dom';
import ShopComponent from './pages/shop/shop-component';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shops" component={ShopComponent}></Route>
        <ShopComponent />
      </Switch>
    </div>
  );
}

export default App;
