import React from "react";

const SearchBar = (props) => {
  const { text, inStockOnly } = props.filter;

  const handleChangeText = (e) => {
    props.updateFilter(e.target.name, e.target.value);
  };
  const handleChangeStock = (e) => {
    props.updateFilter(e.target.name, e.target.checked);
  };

  return (
    <section>
      <input
        type="text"
        placeholder="Search..."
        name="text"
        value={text}
        onChange={handleChangeText}
      />
      <div>
        <input
          type="checkbox"
          id="stock"
          name="inStockOnly"
          checked={inStockOnly}
          onChange={handleChangeStock}
        />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </section>
  );
};

export default SearchBar;
