import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/common/Nav';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Home from './components/Home/Home';
import Speakers from './components/Speakers/Speakers';

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/speakers" component={Speakers} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;

