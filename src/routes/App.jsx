import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import CreateNewPassword from '../containers/CreateNewPassword';
import SuccessMailRecovery from '../containers/SuccessMailRecovery';
import CreateAccount from '../containers/CreateAccount';
import AccountInfo from '../containers/AccountInfo';
import Catalog from '../containers/Catalog';
import Menu from '../containers/Menu';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/create-account" element={<CreateAccount />} />
          <Route exact path="/new-password" element={<CreateNewPassword />} />
          <Route exact path="/account-info" element={<AccountInfo />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/recovery-mail-success" element={<SuccessMailRecovery />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
