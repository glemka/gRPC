import React from 'react';
import { createCommand as createProduct, listCommand as listProducts , test as ProductTest} from './ProductClient'
import { createCommand as createOrder, listCommand as listOrders} from './OrderClient'
import { registerCommand, listCommand as listIdentities, loginCommand, test as IdentityTest} from './IdentityClient'
import { LoginReply } from './generated/Identity/identity_pb';
const RpcClient: React.FC = () => {
  // console.log('product')
  // createProduct('test')
  // console.log('order')
  // createOrder('120');
  // listOrders();
  console.log("Ident")
  // registerCommand("test122", "test22", "2tes221@test.test", "Password123!");
  IdentityTest("2tes221@test.test", "Password123!");
  console.log('product')
  listProducts();
  console.log('product with jwt')
  ProductTest("2tes221@test.test", "Password123!")
  return <div>SampleText</div>;
};

export default RpcClient;
