import InternalTabs from "../../components/InternalTabs/InternalTabs";
import { ScheduleList } from "../../infos/schedule.list";

const GeneralSchedule = () => {
  return (
    <section className="esi-pages esi-schedule">
      <h3 className="title-page">Programação geral</h3>
      <InternalTabs list={ScheduleList} />
    </section>
  );
};

export default GeneralSchedule;
