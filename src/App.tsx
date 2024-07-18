import "./style.scss";
import Tabs from "./components/Tabs";
import Footer from "./modules/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteInformation from "./routes";
import Header from "./modules/Header";
import {
  useViewport,
  ViewportEnum,
  ViewportProvider,
} from "./context/Viewport.context";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";

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
      <ScrollToTopOnRouteChange />
      <Header viewport={viewport.type} />
      {viewport?.type === ViewportEnum.DESKTOP && <Tabs />}
      <div className="container">
        <Routes>
          {RouteInformation.map((route, index) => {
            const { url, element, subRoutes } = route;
            return (
              <Route key={index} path={url} element={element}>
                {subRoutes?.map((subRoute, subIndex) => (
                  <Route
                    key={subIndex}
                    path={subRoute.url}
                    element={subRoute.element}
                  />
                ))}
              </Route>
            );
          })}
        </Routes>
      </div>
      <Footer />
      <ScrollToTopButton />
    </section>
  );
};

export default App;
