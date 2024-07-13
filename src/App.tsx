import "./style.scss";
import Tabs from "./components/Tabs";
import Footer from "./modules/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteInformation from "./routes";
import Header from "./modules/Header";
import SideMenu from "./components/SideMenu/SideMenu";
import {
  useViewport,
  ViewportEnum,
  ViewportProvider,
} from "./context/Viewport.context";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <Router>
      <ViewportProvider>
        <AppContent />
      </ViewportProvider>
    </Router>
  );
};

const AppContent = () => {
  const viewport = useViewport();

  return (
    <section className={`main-content ${viewport.type}`}>
      <Header viewport={viewport.type} />
      <div className="container">
        {viewport?.type === ViewportEnum.DESKTOP && <Tabs />}
        <Routes>
          {RouteInformation.map((route, index) => (
            <Route key={index} path={route.url} element={route.element} />
          ))}
        </Routes>
      </div>
      <Footer />
      <ScrollToTopButton />
    </section>
  );
};

export default App;
