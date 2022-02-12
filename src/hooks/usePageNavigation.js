import ListPage from "pages/ListPage/ListPage";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { menuItems } from "components/Menu/menuItems";
import { useInterceptor } from "hooks/useInterceptor";

const usePageNavigation = () => {
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

  return {
    showSpinner,
    page,
  };
};

export default usePageNavigation;
