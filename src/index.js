import React from 'react';

import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App.js';
import GlobalStyle from './styles/GlobalStyle.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>,
);
