import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Authprovider } from './Auth/Auth';
import { SearchProvider } from './Auth/Search';
ReactDOM.render(
  <Authprovider>
    <SearchProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </SearchProvider>
   
  </Authprovider>,
  document.getElementById('root')
);

reportWebVitals();
