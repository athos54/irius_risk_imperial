import React from "react";
import Card from "components/Card/Card";
import "./CardList.scss";

const CardList = ({
  planets,
  entity,
  titleKey,
  subtitleKey,
  descriptionKey,
  descriptionString,
  otherKey,
  otherString,
}) => {
  return (
    <div className="card-list-container">
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
  );
};

export default CardList;
