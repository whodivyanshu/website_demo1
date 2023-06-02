import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Body7 from './components/Body7';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="/admin" element={<Body7 />} />
  </Routes>
  </BrowserRouter>


);
