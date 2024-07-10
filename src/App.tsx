import "./style.scss";
import Tabs from "./components/Tabs";
import Footer from "./modules/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteInformation from "./routes";
import Header from "./modules/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Tabs />
        <Routes>
          {RouteInformation.map((route, index) => {
            const { url, element } = route;
            return <Route key={index} path={url} element={element} />;
          })}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
