import { useState } from "react";
import { TabsProps } from "./types";

const Tabs = ({ tabs, onChangeTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onChangeTab(index);
  };

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${activeTab === index ? "active" : ""}`}
          onClick={() => handleTabClick(index)}
          onKeyDown={() => handleTabClick(index)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
