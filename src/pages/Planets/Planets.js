import Card from "components/Card/Card";
import PopulationIcon from "components/PopulationIcon/PopulationIcon";
import React, { useEffect, useState } from "react";
import { getPlanets } from "services/planetService";
import { abbreviateNumber } from "helpers/abbreviateNumber";
import "./Planets.scss";
import Filters from "components/Filters/Filters";
import Pagination from "components/Pagination/Pagination";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    planet: "",
    order: "asc",
    page: 1,
  });

  useEffect(() => {
    getPlanets(filter).then((res) => {
      setPlanets(res.data);
    });
  }, [filter]);

  const getPopulationString = (population) => {
    if (population === "unknown") {
      return "Unknown population";
    }
    return `Population of ${abbreviateNumber(population)}`;
  };

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
    <div className="planets-container">
      <h2>Planets</h2>
      <div className="search">
        <Filters
          filter={filter}
          setFilter={setFilter}
          options={generateSelectOptions()}
        />
      </div>
      <div className="planets">
        {planets?.results?.map((planet, index) => {
          return (
            <div key={index} className="planet">
              <Card
                img={`assets/planets/${planet.name
                  .toLowerCase()
                  .replaceAll(" ", "")}.png`}
                title={planet.name}
                subtitle={planet.climate}
                description={getPopulationString(planet.population)}
                other={
                  planet.population !== "unknown" ? <PopulationIcon /> : ""
                }
              />
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <Pagination
          min={(filter.page - 1) * 10 + 1}
          max={10 * filter.page}
          total={planets.count}
          item="planets"
          onPageLeft={handlePageLeft}
          onPageRight={handlePageRight}
        />
      </div>
    </div>
  );
};

export default Planets;
