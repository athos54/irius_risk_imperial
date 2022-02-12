import Planets from "pages/Planets/Planets";
import "./App.scss";
import Menu from "./components/Menu/Menu";
import PageContainer from "./components/PageContainer/PageContainer";

function App() {
  const pageToShow = () => {
    return <Planets />;
  };

  return (
    <div className="main-container">
      <div className="menu">
        <Menu />
      </div>
      <div className="main-content">
        <PageContainer>{pageToShow()}</PageContainer>
      </div>
    </div>
  );
}

export default App;
