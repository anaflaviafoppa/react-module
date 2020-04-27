import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/HomePage.jsx';
import AboutPage from './components/About/AboutPage.jsx';
import Header from './components/common/Header.jsx';
import NotFoundPage from './components/PagenotFound/NotFoundPage.jsx';
import CoursesPage from './components/Courses/CoursesPage.jsx';
import ManegeCoursePage from './components/Courses/ManageCoursePage.jsx';
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManegeCoursePage} />
        <Route path="/course" component={ManegeCoursePage} />

        {/*<Redirect from="/about-page" to="about" /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
