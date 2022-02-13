import React from "react";
import Header from "components/Header/Header";
import "./PageContainer.scss";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import { Route, Switch } from "wouter";
import ErrorForceComponent from "components/ErrorForceComponent/ErrorForceComponent";

const PageContainer = ({ children }) => {
  return (
    <ErrorBoundary>
      <div>
        <Header />
        <Switch>
          <Route path="/error-example">
            <div className="page-content">
              <ErrorForceComponent />
            </div>
          </Route>
          <Route path="/:some">
            <div className="page-content">{children}</div>
          </Route>
          <Route path="/">
            <div className="page-content">{children}</div>
          </Route>
        </Switch>
      </div>
    </ErrorBoundary>
  );
};

export default PageContainer;
