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
import AuthContext from './Context/AuthContext';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history),
    };
    
  }

  render() {
    const { auth } = this.state;
    return (
      <AuthContext.Provider value={ auth }>
        <Nav auth={auth} />
        <div className="body">
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />}></Route>

          <Route
            exact
            path="/callback"
            render={(props) => <Callback auth={auth} {...props} />}
          ></Route>

          <PrivateRoute path="/profile" component={Profile} auth={auth}></PrivateRoute>

          <Route path="/public" component={Public} />

          <PrivateRoute path="/private" component={Private} auth={auth}></PrivateRoute>

          <PrivateRoute
            path="/courses"
            component={Courses}
            auth={auth}
            scopes={['read:courses']}
          ></PrivateRoute>
        </div>
      </AuthContext.Provider>
    );
  }
}
