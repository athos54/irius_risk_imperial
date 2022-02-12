/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Filters.scss";
import { BiSortDown } from "react-icons/bi";
import { BiSortUp } from "react-icons/bi";
import Search from "./Search/Search";

const Filters = ({ filter, setFilter, options = [] }) => {
  const toggleOrder = () => {
    console.log("toggleOrder");
    if (filter.order === "asc") {
      setFilter({ ...filter, order: "desc" });
    } else {
      setFilter({ ...filter, order: "asc" });
    }
  };

  const handleSelectChange = (e) => {
    console.log("handleSelectChange");
    setFilter({ ...filter, planet: e.target.value });
  };

  const handleSearchChange = (searchValue) => {
    console.log("searchValue", searchValue);
    if (searchValue === filter.search) {
      return;
    }
    setFilter({ ...filter, search: searchValue });
  };

  return (
    <div className="filters-container">
      <div className="filters-item">
        <Search onSearchChange={handleSearchChange} />
      </div>

      {options.length > 0 && (
        <div className="order-item">
          {filter.order === "asc" ? (
            <BiSortDown size={26} onClick={toggleOrder} />
          ) : (
            <BiSortUp size={26} onClick={toggleOrder} />
          )}
          <select onChange={handleSelectChange}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Filters;
