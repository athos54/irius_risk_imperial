const usePagination = ({ min, max, total, item, onPageLeft, onPageRight }) => {
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
  };
};

export default usePagination;
