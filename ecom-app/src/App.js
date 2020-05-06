import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage-component';
import {Route,Switch} from 'react-router-dom';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
