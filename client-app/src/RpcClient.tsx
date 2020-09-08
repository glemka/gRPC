import React from 'react';
import { createCommand, listCommand } from './GreeterClient'
const RpcClient: React.FC = () => {
  createCommand('test')
  listCommand();
  return <div>SampleText</div>;
};

export default RpcClient;
