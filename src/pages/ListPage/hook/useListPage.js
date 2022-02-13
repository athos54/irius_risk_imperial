/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { getData } from "services/dataService";

const useListPage = ({ entity }) => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    planet: "",
    order: "asc",
    page: 1,
  });

  useEffect(() => {
    if (!entity) {
      return;
    }
    getData(entity, filter).then((res) => {
      setItems(res.data);
    });
  }, [filter]);

  const generateSelectOptions = () => {
    if (!items.results) {
      return [];
    }
    const itemsOptions = items.results.map((planet) => {
      const aux = planet.url.split("/");
      const id = aux[aux.length - 2];
      return {
        value: id,
        label: planet.name,
      };
    });

    const placeHolderOption = {
      value: -1,
      label: "Planet name",
    };
    return [placeHolderOption, ...itemsOptions];
  };

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
