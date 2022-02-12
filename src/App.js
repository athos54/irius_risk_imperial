import ListPage from "pages/ListPage/ListPage";
import "./App.scss";
import Menu from "./components/Menu/Menu";
import PageContainer from "./components/PageContainer/PageContainer";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { menuItems } from "./components/Menu/menuItems";
import Spinner from "components/Spinner/Spinner";
import { useInterceptor } from "hooks/useInterceptor";
import Footer from "components/Footer/Footer";

function App() {
  const [location] = useLocation();
  const [page, setPage] = useState(null);
  const { showSpinner } = useInterceptor();

  useEffect(() => {
    if (location === "/") {
      const entity = "planets";
      const item = menuItems.find((el) => el.entity === entity);

      setPage(<ListPage {...item} />);
    } else {
      const entity = location.split("/")[1];
      const item = menuItems.find((el) => el.entity === entity);

      setPage(null);
      setTimeout(() => {
        setPage(<ListPage {...item} />);
      }, 0);
    }
  }, [location]);

  return (
    <>
      <div className="main-container">
        {showSpinner && <Spinner />}
        <div className="menu">
          <Menu />
        </div>
        <div className="main-content">
          <PageContainer>{page}</PageContainer>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
