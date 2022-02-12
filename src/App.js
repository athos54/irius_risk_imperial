import "./App.scss";
import Menu from "./components/Menu/Menu";
import PageContainer from "./components/PageContainer/PageContainer";
import Spinner from "components/Spinner/Spinner";
import Footer from "components/Footer/Footer";
import useDataFetch from "hooks/useDataFetch";

function App() {
  const { showSpinner, page } = useDataFetch();

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
