import React from "react";
import Card from "components/Card/Card";
import "./CardList.scss";

const CardList = ({
  items,
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
      {items?.results?.map((item, index) => {
        return (
          <div key={index} className="planet">
            <Card
              img={`assets/${entity}/${item.name
                .toLowerCase?.()
                .replaceAll?.(" ", "")}.png`}
              title={item[titleKey]}
              subtitle={item[subtitleKey]}
              description={descriptionString(item[descriptionKey])}
              other={otherString(item[otherKey])}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
