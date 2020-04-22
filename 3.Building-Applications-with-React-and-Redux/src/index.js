import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './style.css';
import configureStore from './redux/configureStore';
//This will provide Redux store data to our React components:
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('app')
);
