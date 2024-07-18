import React from "react";
import "./style.scss";

interface ScheduleItem {
  title: string;
  description: string;
  hour: string;
}

interface ScheduleContentProps {
  items: ScheduleItem[];
}

const ScheduleContent: React.FC<ScheduleContentProps> = ({ items }) => {
  return (
    <div className="schedule-content">
      {items.map((item, index) => (
        <div key={index} className="schedule-item">
          <label className="schedule-item-title">{item.title}</label>
          <p
            className="schedule-item-description"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
          <p className="schedule-item-hour">{item.hour}</p>
        </div>
      ))}
    </div>
  );
};

export default ScheduleContent;
