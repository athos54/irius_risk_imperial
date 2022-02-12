/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import "./Filters.scss";
import { BiSortDown } from "react-icons/bi";
import { BiSortUp } from "react-icons/bi";
import Search from "./Search/Search";
import { SEARCH_TIMEOUT } from "config/config";

const Filters = ({ filter, setFilter, options = [] }) => {
  const [timer, setTimer] = useState(null);
  const toggleOrder = () => {
    if (filter.order === "asc") {
      setFilter({ ...filter, order: "desc" });
    } else {
      setFilter({ ...filter, order: "asc" });
    }
  };

  const handleSelectChange = (e) => {
    setFilter({ ...filter, planet: e.target.value });
  };

  const handleSearchChange = (searchValue) => {
    if (searchValue === filter.search) {
      return;
    }

    if (timer) {
      clearInterval(timer);
    }

    setTimer(
      setTimeout(() => {
        setFilter({ ...filter, search: searchValue });
      }, SEARCH_TIMEOUT)
    );
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
