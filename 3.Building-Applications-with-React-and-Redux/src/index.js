import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import "./style.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);