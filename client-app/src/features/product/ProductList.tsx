import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { RootStoreContext } from '../../stores/rootStore';

const ProductList = () => {
  const rootStore = useContext(RootStoreContext);
  const { loadProducts, products } = rootStore.productStore;
  const listHandler = (e: React.MouseEvent) => {
    loadProducts();
  };
  return (
    <div>
      <label>
        <b>Products</b>
      </label>
      <br />
      <button onClick={listHandler}>Load Products</button>
      <br />

      {products?.getItemsList().map((c) => (
        <div key={c.getId()}>
          {c.getId()} - {c.getName()}
        </div>
      ))}
      <hr />
    </div>
  );
};

export default observer(ProductList);
