import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Demo from './Demo.js';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Netflix from './Netflix';
import LiveCovidTracker from './LiveCovidTracker';
//import Form from './Form';
//import Home from './React/Home';
import Smile from './Smile';

ReactDOM.render(
  <BrowserRouter>
    {/* <Smile/> */}
   {/*  <Netflix /> */}
  {/*  <Demo /> */}
 {/*  <Form /> */}
   <LiveCovidTracker />
    
  </BrowserRouter>
 ,
  document.getElementById('root')
);
reportWebVitals();
