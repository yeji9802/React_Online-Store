import React from "react";
import ProductItem from "./ProductItem";

const ProductTable = (props) => {
  const { products, filter } = props;

  const filterText = products.filter((product) => product.name === filter.text);
  const filterTextItem = filterText.length > 0 ? filterText : products;

  const productCategory = filterTextItem.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  }, {});

  const keys = Object.keys(productCategory);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {keys.map((key, idx) => (
          <ProductItem
            key={idx}
            category={key}
            items={productCategory[key]}
            inStockOnly={filter.inStockOnly}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
