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
import Login from './Components/Login';
import { AuthProvider } from './Components/context/AuthProvider';
import RequireAuth from './Components/context/RequireAuth';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<Login />} />
        <Route element={<RequireAuth allowedRoles={2201} />}>
          <Route exact path='/admin' element={<Admin />} />
        </Route>
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/order-detail" element={<OrderDetail />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
