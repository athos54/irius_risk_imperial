/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { getPlanets } from "services/planetService";

const useListPage = ({ entity }) => {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    planet: "",
    order: "asc",
    page: 1,
  });

  useEffect(() => {
    getPlanets(entity, filter).then((res) => {
      setPlanets(res.data);
    });
  }, [filter]);

  const generateSelectOptions = () => {
    if (!planets.results) {
      return [];
    }
    const planetsOptions = planets.results.map((planet) => {
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
    return [placeHolderOption, ...planetsOptions];
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
    planets,
    generateSelectOptions,
    handlePageLeft,
    handlePageRight,
    filter,
    setFilter,
  };
};

export default useListPage;
