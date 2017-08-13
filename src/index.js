import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app2';

ReactDOM.render(
  <BrowserRouter basename="/thejulianmaz">
    <App />
  </BrowserRouter>,
    document.getElementById('root'),
);
