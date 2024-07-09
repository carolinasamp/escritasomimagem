import { useState } from "react";
import Tabs from "./components/Tabs";
import Search from "./components/Search";
import Carousel from "./components/Carousel";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteInformation from "./routes";

const App = () => {
  // const slides = [
  //   {
  //     image: "https://via.placeholder.com/800x400",
  //     title: "title",
  //     description: "description",
  //   },
  //   {
  //     image: "https://via.placeholder.com/800x400",
  //     title: "title",
  //     description: "description",
  //   },
  //   {
  //     image: "https://via.placeholder.com/800x400",
  //     title: "title",
  //     description: "description",
  //   },
  // ];

  return (
    <Router>
      <Header />
      <div className="app">
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
