import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import App from './App';

ReactDOM.render((
  <StaticRouter>
    <App />
  </StaticRouter>
), document.getElementById('root'));
