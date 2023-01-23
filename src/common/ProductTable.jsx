import React from 'react';
import ProductItem from './ProductItem';

const ProductTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {
          <ProductItem />
        }
      </tbody>
    </table>
  );
};

export default ProductTable;