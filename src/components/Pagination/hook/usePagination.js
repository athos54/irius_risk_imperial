/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

const usePagination = ({ filter, items, entity, onPageLeft, onPageRight }) => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [total, setTotal] = useState();
  const [item, setItem] = useState();

  useEffect(() => {
    setMax(
      !items.count
        ? ""
        : items.count > 10 * filter.page
        ? 10 * filter.page
        : items.count
    );
    setMin((filter.page - 1) * 10 + 1);
    setTotal(items.count || "");
    setItem(entity);
  }, [filter, items]);

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

  const isLeftClickable = () => min === 1;

  const isRightClickable = () => max === total;

  const getPaginatorText = () => `${min} to ${max} of ${total} ${item}`;

  return {
    handleClickLeft,
    handleClickRight,
    isLeftClickable,
    isRightClickable,
    getPaginatorText,
    min,
    max,
    total,
  };
};

export default usePagination;
