import React from 'react';
import { sendRequest } from './GreeterClient'
const RpcClient: React.FC = () => {
  sendRequest('test')
  return <div>SampleText</div>;
};

export default RpcClient;
