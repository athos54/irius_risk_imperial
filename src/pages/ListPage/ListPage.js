/* eslint-disable react-hooks/exhaustive-deps */
import Card from "components/Card/Card";
import React, { useEffect, useState } from "react";
import "./ListPage.scss";
import Filters from "components/Filters/Filters";
import Pagination from "components/Pagination/Pagination";
import { getPlanets } from "services/planetService";
const ListPage = ({
  entity,
  titleKey,
  subtitleKey,
  descriptionKey,
  descriptionString,
  otherKey,
  otherString,
}) => {
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
      console.log("createportal");
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

  return (
    <div className="list-page-container">
      <h2>{entity.toUpperCase()}</h2>
      <div className="search">
        <Filters
          filter={filter}
          setFilter={setFilter}
          options={generateSelectOptions()}
        />
      </div>
      <div className="list-page">
        {planets?.results?.map((planet, index) => {
          return (
            <div key={index} className="planet">
              <Card
                img={`assets/${entity}/${planet.name
                  .toLowerCase()
                  .replaceAll(" ", "")}.png`}
                title={planet[titleKey]}
                subtitle={planet[subtitleKey]}
                description={descriptionString(planet[descriptionKey])}
                other={otherString(planet[otherKey])}
              />
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          min={(filter.page - 1) * 10 + 1}
          max={
            !planets.count
              ? ""
              : planets.count > 10 * filter.page
              ? 10 * filter.page
              : planets.count
          }
          total={planets.count || ""}
          item={entity}
          onPageLeft={handlePageLeft}
          onPageRight={handlePageRight}
        />
      </div>
    </div>
  );
};

export default ListPage;
