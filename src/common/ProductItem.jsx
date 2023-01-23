import React from "react";

const ProductItem = (props) => {
  const { category, items, inStockOnly } = props;
 
  const filterInStockOnly = inStockOnly ? items.filter((itme) => itme.stocked === inStockOnly) : items;
  console.log(filterInStockOnly);

  return (
    <>
      <tr>
        <td>{category}</td>
      </tr>
      {filterInStockOnly.map((item, idx) => (
        <tr key={idx}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
};

export default ProductItem;
