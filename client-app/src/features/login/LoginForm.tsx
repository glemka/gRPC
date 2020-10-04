import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { RootStoreContext } from '../../stores/rootStore';

const LoginForm: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const { logout, login, isLoggedIn } = rootStore.userStore;
  const { jwtToken } = rootStore.commonStore;

  const loginHandler = (e: React.MouseEvent) => {
    login('2tes221@test.test', 'Password123!');
  };
  const logoutHandler = (e: React.MouseEvent) => {
    logout();
  };

  return (
    <div>
      <label>
        <b>Login Form</b>
      </label>
      <br />
      <button onClick={loginHandler}>Login</button>
      <br />
      {isLoggedIn && <button onClick={logoutHandler}>Logout</button>}
      <br />
      {isLoggedIn && `token: ${jwtToken}`}
      <hr />
    </div>
  );
};

export default observer(LoginForm);
