import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const FilterableProductTable = () => {
  const [filter, setFilter] = useState({ text: "", inStockOnly: false });

  const updateFilter = (key, value) => {
    setFilter({...filter, [key]: value})
  }

  console.log(filter);

  const datas = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  return (
    <>
      <SearchBar filter={filter} updateFilter={updateFilter} />
      <ProductTable products={datas}/>
    </>
  );
};

export default FilterableProductTable;