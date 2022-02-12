import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import "./Pagination.scss";

const Pagination = ({ paginator }) => {
  const {
    handleClickLeft,
    handleClickRight,
    isLeftClickable,
    isRightClickable,
    getPaginatorText,
    min,
    max,
    total,
  } = paginator;
  return (
    <div className="pagination-container">
      <div className="pagination-content">
        <span className={min === 1 ? "arrow-no-clickable" : "arrow-clickable"}>
          <IoMdArrowDropleft
            color={isLeftClickable() ? "#ccc" : "black"}
            size={22}
            onClick={handleClickLeft}
          />
        </span>
        <span>{getPaginatorText()}</span>
        <span
          className={max === total ? "arrow-no-clickable" : "arrow-clickable"}
        >
          <IoMdArrowDropright
            color={isRightClickable() ? "#ccc" : "black"}
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
