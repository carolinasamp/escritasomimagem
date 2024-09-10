import InternalTabs from "../../components/InternalTabs/InternalTabs";
import { ScheduleList } from "../../infos/schedule.list";
import NextPageBox from "../../modules/NextPageBox";
import { SubRoutesTitle, SubRoutesURL } from "../../routes";
import "./style.scss";

const GeneralSchedule = () => {
  return (
    <section className="esi-pages esi-schedule">
      <h3 className="title-page">{SubRoutesTitle.GENERAL_SCHEDULE}</h3>
      <InternalTabs
        list={ScheduleList}
        className="esi-schedule-internal-tabs"
      />

      <NextPageBox
        url={SubRoutesURL.THEMED_TABLES}
        title={SubRoutesTitle.THEMED_TABLES}
      />
    </section>
  );
};

export default GeneralSchedule;
