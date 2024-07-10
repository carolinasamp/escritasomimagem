import { ScheduleList } from "../../infos/schedule.list";
import "./style.scss";

const Schedule = () => {
  return (
    <section className="schedule">
      <ul>
        {ScheduleList.map((scheduleItem, index) => {
          const { title, description, time } = scheduleItem;

          return (
            <li key={index}>
              <time>{time}</time>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Schedule;
