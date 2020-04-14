import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import Nav from './components/Nav';
import Callback from './views/Callback';
import Auth from './Auth/Auth';
import Public from './views/Public';
import Private from './views/Private';
import Courses from './views/Courses';
import PrivateRoute from './PrivateRoute';

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
          <Route exact path="/" render={(props) => <Home auth={this.auth} {...props} />}></Route>

          <Route
            exact
            path="/callback"
            render={(props) => <Callback auth={this.auth} {...props} />}
          ></Route>

          <PrivateRoute path="/profile" component={Profile} auth={this.auth}></PrivateRoute>

          <Route path="/public" component={Public} />

          <PrivateRoute path="/private" component={Private} auth={this.auth}></PrivateRoute>

          <PrivateRoute
            path="/courses"
            component={Courses}
            auth={this.auth}
            scopes={['read:courses']}
          ></PrivateRoute>
        </div>
      </Fragment>
    );
  }
}
