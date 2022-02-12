import React from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import "./PageContainer.scss";
const PageContainer = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
};

export default PageContainer;
