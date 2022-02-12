import React from "react";
import Header from "components/Header/Header";
import "./PageContainer.scss";
const PageContainer = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageContainer;
