import "./style.scss";
import { useState, useEffect } from "react";
import { InternalTabsProps } from "./types";

const InternalTabs = ({ list, className }: InternalTabsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getDateIndex = () => {
    const today = new Date();
    const dates = [
      new Date(today.getFullYear(), 8, 10), // 10/09
      new Date(today.getFullYear(), 8, 11), // 11/09
      new Date(today.getFullYear(), 8, 12), // 12/09
      new Date(today.getFullYear(), 8, 13), // 13/09
    ];

    for (let i = 0; i < dates.length; i++) {
      if (today.toDateString() === dates[i].toDateString()) {
        return i;
      }
    }
    return 0;
  };

  useEffect(() => {
    const dateIndex = getDateIndex();
    setActiveIndex(dateIndex);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={`internal-tabs ${className || ""}`}>
      <div className="internal-tabs-scroll">
        <ul className="internal-tabs-wrapper">
          {list.map((item, index) => {
            const { tabName, id } = item;
            const activeTab = activeIndex === index;

            return (
              <li
                key={id}
                id={id}
                className={`internal-tabs-item ${activeTab ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                <label className="internal-tabs-item-name">{tabName}</label>
              </li>
            );
          })}
        </ul>
        {list.map((item, index) => {
          const { id, content } = item;
          const activeTab = activeIndex === index;
          return (
            activeTab && (
              <div key={id} className="internal-tabs-content">
                {content}
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};

export default InternalTabs;
