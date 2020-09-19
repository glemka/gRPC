import React from 'react';
import { createCommand as createProduct, listCommand as listProducts } from './ProductClient'
import { createCommand as createOrder, listCommand as listOrders} from './OrderClient'
const RpcClient: React.FC = () => {
  console.log('product')
  createProduct('test')
  listProducts();
  console.log('order')
  createOrder('120');
  listOrders();
  return <div>SampleText</div>;
};

export default RpcClient;
