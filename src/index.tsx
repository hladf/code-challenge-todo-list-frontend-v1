import App from 'app/App';
import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from 'style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
