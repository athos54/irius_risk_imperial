/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Filters.scss";
import Search from "./Search/Search";
import Order from "./Order/Order";
import useFilters from "./hook/useFilters";

const Filters = ({ filter, setFilter, options = [] }) => {
  const { handleSearchChange, toggleOrder, handleSelectChange } = useFilters({
    filter,
    setFilter,
  });

  return (
    <div className="filters-container">
      <div className="filters-item">
        <Search onSearchChange={handleSearchChange} />
      </div>

      <div className="order-item">
        <Order
          options={options}
          filter={filter}
          toggleOrder={toggleOrder}
          handleSelectChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default Filters;
