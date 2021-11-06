import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Pokemon from './Pokemon'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <>
  
  <Router history={history}>
  <Header/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/:id" element={<Pokemon/>}/>
    </Routes>
  </Router>
  </>,
  document.getElementById('root')
);


