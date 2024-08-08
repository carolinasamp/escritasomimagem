import InternalTabs from "../../components/InternalTabs/InternalTabs";
import { useViewport, ViewportEnum } from "../../context/Viewport.context";
import ServiceList from "../../infos/service.list";
import EventLocation from "../../modules/EventLocation";
import NextPageBox from "../../modules/NextPageBox";
import { RoutesURL, RoutesTitle } from "../../routes";
import "./style.scss";

const Service = () => {
  const viewport = useViewport();

  return (
    <>
      {viewport.type === ViewportEnum.MOBILE && (
        <h3 className="title-page">{RoutesTitle.SERVICE}</h3>
      )}
      <section className="esi-pages esi-service box">
        <p>
          Estamos muito felizes por receber você em Beagá!
          <br />
          Separamos algumas dicas para que sua estadia na cidade seja agradável
          e cheia de boas experiências.
        </p>
        <br />
        <EventLocation />
        <br />
        <div className="esi-service-content">
          <InternalTabs list={ServiceList} />
        </div>
      </section>
      <NextPageBox
        url={RoutesURL.PREVIOUS_EDITION}
        title={RoutesTitle.PREVIOUS_EDITION}
      />
    </>
  );
};

export default Service;
