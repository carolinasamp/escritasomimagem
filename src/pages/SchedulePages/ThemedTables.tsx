import InternalTabs from "../../components/InternalTabs/InternalTabs";
import { ThemedTablesList } from "../../infos/themed-tables.list";
import { SubRoutesTitle } from "../../routes";

const ThemedTable = () => {
  return (
    <section className="esi-pages esi-themed-table">
      <h3 className="title-page">{SubRoutesTitle.THEMED_TABLES}</h3>
      <InternalTabs list={ThemedTablesList} />
    </section>
  );
};

export default ThemedTable;
