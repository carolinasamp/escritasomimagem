import { MonitorsList } from "../../infos/monitors.list";
import ListPerson from "../../modules/ListPerson";
import NextPageBox from "../../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../../routes";
import "./style.scss";

const Monitors = () => {
  return (
    <>
      <section className="esi-pages esi-monitors">
        <h3 className="title-page">Monitores</h3>
        <div className="box">
          <ListPerson list={MonitorsList} />
        </div>
      </section>

      <NextPageBox url={RoutesURL.SERVICE} title={RoutesTitle.SERVICE} />
    </>
  );
};

export default Monitors;
