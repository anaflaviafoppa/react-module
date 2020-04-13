import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import Nav from './components/Nav';
import Callback from './views/Callback';
import Auth from './Auth/Auth';

export default class App extends Component {
  constructor(props) {
    super(props);

    //isnt necessary put on stage
    this.auth = new Auth(this.props.history);
  }

  render() {
    return (
      <Fragment>
        <Nav auth={this.auth} />
        <div className="body">
          <Route
            exact
            path="/"
            exact
            render={(props) => <Home auth={this.auth} {...props} />}
          ></Route>

          <Route
            exact
            path="/callback"
            exact
            render={(props) => <Callback auth={this.auth} {...props} />}
          ></Route>

          <Route
            path="/profile"
            render={(props) => 
              this.auth.isAuthenticated() ? (
                <Profile auth={this.auth} {...props} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
        </div>
      </Fragment>
    );
  }
}
