import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Speakers from './components/Speakers/Speakers';

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/speakers" component={Speakers} />
      </Switch>
    </div>
  );
}

export default App;
