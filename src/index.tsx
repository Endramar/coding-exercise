import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/app/app';
import AuthContextProvider from './context/auth-context';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
