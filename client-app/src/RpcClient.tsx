import React from 'react';
import { createCommand as createProduct, listCommand as listProducts } from './ProductClient'
import { createCommand as createOrder, listCommand as listOrders} from './OrderClient'
import { registerCommand, listCommand as listIdentities, loginCommand, test} from './IdentityClient'
import { LoginReply } from './generated/Identity/identity_pb';
const RpcClient: React.FC = () => {
  // console.log('product')
  // createProduct('test')
  // listProducts();
  // console.log('order')
  // createOrder('120');
  // listOrders();
  console.log("register")
  // registerCommand("test122", "test22", "2tes221@test.test", "Password123!");
  var c = test( "2tes221@test.test", "Password123!");
  return <div>SampleText</div>;
};

export default RpcClient;
