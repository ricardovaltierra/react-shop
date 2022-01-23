import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.css';
// containers
import Layout from '../containers/Layout';
// pages
import Checkout from '../pages/Checkout';
import CreateAccount from '../containers/CreateAccount';
import Home from '../pages/Home';
import Login from '../containers/Login';
import MyAccount from '../pages/MyAccount';
import NewPassword from '../pages/NewPassword';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Orders';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/password-recovery" element={<PasswordRecovery />} />
          <Route exact path="/send-email" element={<SendEMail />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/my-account" element={<MyAccount />} />
          <Route exact path="/create-account"  element={<CreateAccount />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
