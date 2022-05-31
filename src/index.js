import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Admin from './Components/Admin/Admin';
import Payment from './Components/Payment';
import OrderDetail from './Components/OrderDetail';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path='/admin' element={<Admin/>} />
      <Route exact path="/payment" element={<Payment/>} />
      <Route exact path="/order-detail" element={<OrderDetail/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
