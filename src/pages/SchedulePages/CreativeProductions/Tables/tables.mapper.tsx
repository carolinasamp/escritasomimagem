import { TableFridayList, TableThursdayList } from "../../../../infos/table";
import { ContentThemedTable } from "../../ThemedTables/themed-tables.mapper";

const TablesThursday = () => {
  return (
    <section className="esi-pages esi-themed-table">
      <ContentThemedTable hours="14h – 15:30" list={TableThursdayList} />
    </section>
  );
};

const TablesFriday = () => {
  return (
    <section className="esi-pages esi-themed-table">
      <ContentThemedTable hours="14h – 15:30" list={TableFridayList} />
    </section>
  );
};

export { TablesThursday, TablesFriday };
