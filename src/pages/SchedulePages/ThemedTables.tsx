import InternalTabs from "../../components/InternalTabs/InternalTabs";
import { ThemedTablesList } from "../../infos/themed-tables.list";

const ThemedTable = () => {
  return (
    <section className="esi-pages esi-themed-table">
      <h3 className="title-page">Mesas temáticas</h3>
      <InternalTabs list={ThemedTablesList} />
    </section>
  );
};

export default ThemedTable;
