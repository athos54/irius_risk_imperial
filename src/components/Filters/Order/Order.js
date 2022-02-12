import React from "react";
import { BiSortDown } from "react-icons/bi";
import { BiSortUp } from "react-icons/bi";

const Order = ({ options, filter, toggleOrder, handleSelectChange }) => {
  return (
    <>
      {options.length > 0 && (
        <>
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
        </>
      )}
    </>
  );
};

export default Order;
