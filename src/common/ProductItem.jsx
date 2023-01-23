import React from "react";

const ProductItem = (props) => {
  const { category, items } = props;

  return (
    <>
      <tr>
        <td>{category}</td>
      </tr>
      {items.map((item, idx) => (
        <tr key={idx}>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      ))}
    </>
  );
};

export default ProductItem;
