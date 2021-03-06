import { useState } from "react";
import { SEARCH_TIMEOUT } from "config/config";

const useFilters = ({ filter, setFilter }) => {
  const [timer, setTimer] = useState(null);

  const toggleOrder = () => {
    if (filter.order === "asc") {
      setFilter({ ...filter, order: "desc" });
    } else {
      setFilter({ ...filter, order: "asc" });
    }
  };

  const handleSelectChange = (e) => {
    setFilter({ ...filter, ordering: e.target.value });
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

  return {
    handleSearchChange,
    toggleOrder,
    handleSelectChange,
  };
};

export default useFilters;
