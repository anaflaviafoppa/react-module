import React from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Header from './components/common/Header';

const App = () => {
  function getPage() {
    const route = window.location.pathname;
    if (route === '/about') return <AboutPage />;
    return <HomePage />;
  }

  return (
    <div className="container-fluid">
      <Header />
      {getPage()};
    </div>
  );
};

export default App;
