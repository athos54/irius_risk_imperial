/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { getData } from "services/dataService";
import orderOptions from "./orderOptions";

const useListPage = ({ entity }) => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortOnClient: false,
    order: "asc",
    page: 1,
  });

  useEffect(() => {
    if (!entity) {
      return;
    }

    if (!filter.sortOnClient) {
      getData(entity, filter).then((res) => {
        setItems(res.data);
      });
    } else {
      if (!filter.ordering) {
        return;
      }

      const sortedFunction = isNumberType() ? sortNumbers : sortLetters;
      const sortedItems = items.results.sort(sortedFunction);
      setItems({
        ...items,
        results: sortedItems,
      });
    }
  }, [filter]);

  const isNumberType = () => {
    const orderOption = orderOptions[entity];
    const sortItem = orderOption.find((el) => el.value === filter.ordering);
    return sortItem.isNumberType;
  };

  const sortNumbers = (a, b) => {
    let aNumber = parseInt(a[filter.ordering].replace(/,/g, ""));
    if (isNaN(aNumber)) {
      aNumber = -1;
    }
    let bNumber = parseInt(b[filter.ordering].replace(/,/g, ""));
    if (isNaN(bNumber)) {
      bNumber = -1;
    }
    if (filter.order === "asc") {
      return aNumber - bNumber;
    } else {
      return bNumber - aNumber;
    }
  };

  const sortLetters = (a, b) => {
    if (filter.order === "asc") {
      return a[filter.ordering].localeCompare(b[filter.ordering]);
    } else {
      return b[filter.ordering].localeCompare(a[filter.ordering]);
    }
  };

  const generateSelectOptions = () => orderOptions[entity];

  const handlePageLeft = () => {
    if (filter.page > 1) {
      setFilter((filter) => ({ ...filter, page: filter.page - 1 }));
    }
  };

  const handlePageRight = () => {
    setFilter((filter) => ({ ...filter, page: filter.page + 1 }));
  };

  return {
    items,
    generateSelectOptions,
    handlePageLeft,
    handlePageRight,
    filter,
    setFilter,
  };
};

export default useListPage;
