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
      <div className="order-item">
        <label>
          <input
            type="checkbox"
            size="33"
            checked={filter.sortOnClient}
            onChange={(e) => {
              setFilter({ ...filter, sortOnClient: e.target.checked });
            }}
          />
          Sort on client (read{" "}
          <a
            href="https://github.com/athos54/irius_risk_imperial/blob/master/README.md"
            target="_blank"
            rel="noreferrer"
          >
            readme
          </a>{" "}
          filters section )
        </label>
      </div>
    </div>
  );
};

export default Filters;
