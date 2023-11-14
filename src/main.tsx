import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter }from 'react-router-dom'
import { MainContextrovider } from './context/MainContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainContextrovider>
        <BrowserRouter>
        <App />   
        </BrowserRouter>
    </MainContextrovider>
  </React.StrictMode>
);