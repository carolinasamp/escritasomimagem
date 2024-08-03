import InternalTabs from "../../components/InternalTabs/InternalTabs";
import { ScheduleList } from "../../infos/schedule.list";
import { SubRoutesTitle } from "../../routes";
import "./style.scss";

const GeneralSchedule = () => {
  return (
    <section className="esi-pages esi-schedule">
      <h3 className="title-page">{SubRoutesTitle.GENERAL_SCHEDULE}</h3>
      <InternalTabs
        list={ScheduleList}
        className="esi-schedule-internal-tabs"
      />
    </section>
  );
};

export default GeneralSchedule;
