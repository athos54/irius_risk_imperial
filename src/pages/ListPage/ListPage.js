import React from "react";
import "./ListPage.scss";
import Filters from "components/Filters/Filters";
import Pagination from "components/Pagination/Pagination";
import CardList from "./components/CardList/CardList";
import usePagination from "components/Pagination/hook/usePagination";
import useListPage from "./hook/useListPage";
const ListPage = ({
  entity,
  titleKey,
  subtitleKey,
  descriptionKey,
  descriptionString,
  otherKey,
  otherString,
}) => {
  const {
    filter,
    setFilter,
    generateSelectOptions,
    items,
    handlePageLeft,
    handlePageRight,
  } = useListPage({ entity });

  const paginator = usePagination({
    filter,
    items,
    entity,
    onPageLeft: handlePageLeft,
    onPageRight: handlePageRight,
  });

  return (
    <div className="list-page-container">
      <h2>{entity?.toUpperCase?.()}</h2>
      <div className="search">
        <Filters
          filter={filter}
          setFilter={setFilter}
          options={generateSelectOptions()}
        />
      </div>
      <div className="list-page">
        <CardList
          items={items}
          entity={entity}
          titleKey={titleKey}
          subtitleKey={subtitleKey}
          descriptionKey={descriptionKey}
          descriptionString={descriptionString}
          otherKey={otherKey}
          otherString={otherString}
        />
      </div>
      <div className="pagination">
        <Pagination
          paginator={paginator}
          item={entity}
          onPageLeft={handlePageLeft}
          onPageRight={handlePageRight}
        />
      </div>
    </div>
  );
};

export default ListPage;
