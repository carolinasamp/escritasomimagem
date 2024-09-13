import NextPageBox from "../../../modules/NextPageBox";
import { SubRoutesTitle, SubRoutesURL } from "../../../routes";
import "./style.scss";
import "../ThemedTables/style.scss";
import Tables from "./Tables/Tables";
import Works from "./Works/Works";

const CreativeProductions = () => {
  return (
    <section className="esi-pages esi-themed-table">
      <h3 className="title-page">{SubRoutesTitle.CREATIVE_PRODUCTIONS}</h3>

      <Tables />
      <Works />

      <NextPageBox
        url={SubRoutesURL.MUSIC_PROGRAMMING}
        title={SubRoutesTitle.MUSIC_PROGRAMMING}
      />
    </section>
  );
};

export default CreativeProductions;
