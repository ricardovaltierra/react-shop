import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="recovery-password" component={RecoverPassword} />
          <Route component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>

    <Layout>
      <Login />
      <RecoveryPassword />
    </Layout>
  );
}

export default App;
