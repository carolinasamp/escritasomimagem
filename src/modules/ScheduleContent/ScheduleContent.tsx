import React from "react";
import "./style.scss";
import { ScheduleContentProps } from "./types";

const ScheduleContent: React.FC<ScheduleContentProps> = ({
  items,
  hoursColumn,
}) => {
  return (
    <div className="schedule-content">
      {items.map((item, activeIndex) => {
        const { subtitle, description } = item;

        return (
          <div className="schedule-item-box">
            {hoursColumn &&
              hoursColumn.map((column, i) => {
                const { title, hours } = column;
                const activeTab = activeIndex === i;

                return (
                  activeTab && (
                    <div key={i} className="schedule-column">
                      <label
                        className="schedule-column-title"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                      <p className="schedule-column-hours">{hours}</p>
                    </div>
                  )
                );
              })}

            <div key={activeIndex} className={`schedule-item`}>
              {subtitle && <b dangerouslySetInnerHTML={{ __html: subtitle }} />}
              {description && (
                <p
                  className="schedule-item-description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleContent;
