import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import "./Pagination.scss";

const Pagination = ({ min, max, total, item, onPageLeft, onPageRight }) => {
  const handleClickLeft = () => {
    if (min === 1) {
      return;
    }
    onPageLeft?.();
  };

  const handleClickRight = () => {
    if (max === total) {
      return;
    }
    onPageRight?.();
  };

  return (
    <div className="pagination-container">
      <div className="pagination-content">
        <span className={min === 1 ? "arrow-no-clickable" : "arrow-clickable"}>
          <IoMdArrowDropleft
            color={min === 1 ? "#ccc" : "black"}
            size={22}
            onClick={handleClickLeft}
          />
        </span>
        <span>{`${min} to ${max} of ${total} ${item}`}</span>
        <span
          className={max === total ? "arrow-no-clickable" : "arrow-clickable"}
        >
          <IoMdArrowDropright
            color={max === total ? "#ccc" : "black"}
            disabled={true}
            size={22}
            onClick={handleClickRight}
          />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
