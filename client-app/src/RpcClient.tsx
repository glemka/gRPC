import React, { useContext, useEffect, useState } from 'react';
import {
  createCommand as createProduct,
  listCommand as listProducts,
  test as ProductTest,
} from './api/ProductClient';
import {
  createCommand as createOrder,
  listCommand as listOrders,
} from './api/OrderClient';
import {
  registerCommand,
  listCommand as listIdentities,
  loginCommand,
  test as IdentityTest,
} from './api/IdentityClient';
import { LoginReply } from './generated/Identity/identity_pb';
import { observer } from 'mobx-react-lite';
import { debug } from 'console';

const RpcClient: React.FC = () => {
  // const commonStore = useContext(CommonStoreContext);



  // console.log('product')
  // createProduct('test')
  // console.log('order')
  // createOrder('120');
  // listOrders();
  // console.log("Ident")
  // registerCommand("test122", "test22", "2tes221@test.test", "Password123!");
  // IdentityTest("2tes221@test.test", "Password123!");
  // console.log('product')
  // listProducts();
  // console.log('product with jwt')
  // ProductTest("2tes221@test.test", "Password123!")
  return (
    <div>
      {/* <button onClick={onClickHandler}>Login</button> */}
      <br />
      {/* {<label>token: {jwtToken}</label>} */}
    </div>
  );
};

export default observer(RpcClient);
