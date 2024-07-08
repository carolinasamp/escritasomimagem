import { useState } from "react";
import Tabs from "./components/Tabs";
import Search from "./components/Search";
import Carousel from "./components/Carousel";
import Header from "./modules/Header";
import "./style.scss";

const App: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Estado para a tab ativa

  const tabs = [{ label: "Pesquisa" }, { label: "Carrossel" }];

  const slides = [
    {
      image: "https://via.placeholder.com/800x400",
      title: "title",
      description: "description",
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "title",
      description: "description",
    },
    {
      image: "https://via.placeholder.com/800x400",
      title: "title",
      description: "description",
    },
  ];

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <Header />
      <div className="app">
        <Tabs tabs={tabs} onChangeTab={handleTabChange} />
        <div className="content">
          {/* {activeTabIndex === 0 && <Search />} */}
          {activeTabIndex === 1 && <Carousel slides={slides} />}
        </div>
      </div>
    </>
  );
};

export default App;
