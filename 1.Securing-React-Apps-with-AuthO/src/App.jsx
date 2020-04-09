import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import Nav from './components/Nav';

function App() {
  return (
    <Fragment>
      <Nav />
      <div className="body">
        <Route path="/" exact component={Home}></Route>
        <Route path="/profile" exact component={Profile}></Route>
      </div>
    </Fragment>
  );
}

export default App;
