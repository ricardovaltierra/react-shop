import React from 'react';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Login from '../containers/Login';

const App = () => {
  return(
    <Layout>
      <Login />
    </Layout>
  );
}

export default App;
