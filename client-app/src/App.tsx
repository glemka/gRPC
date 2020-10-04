import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import LoginForm from './features/login/LoginForm';
import ProductList from './features/product/ProductList';
import RpcClient from './RpcClient';

const App = () => {
  return (
    <Fragment>
      <ToastContainer position="bottom-right" />
      <LoginForm />
      <ProductList />
    </Fragment>
  );
};

export default App;
