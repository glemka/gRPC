import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import LoginForm from './features/login/LoginForm';
import RpcClient from './RpcClient';

const App = () => {

    return (
      <div>
      <LoginForm/>
      {/* <RpcClient/> */}
      </div>
  );  
}

export default App;
