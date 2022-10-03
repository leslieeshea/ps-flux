import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// creates a const called 'render' that references react-dom's render function
import { render } from 'react-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

// first arg is the component that you want to render
// second arg is the DOM element where you want to place your element
render(<HomePage />, document.getElementById('root'));
