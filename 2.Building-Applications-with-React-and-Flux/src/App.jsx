import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Header from './components/common/Header';
import CoursesPage from './components/CoursesPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import ManegeCoursePage from './components/ManageCoursePage';

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManegeCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
