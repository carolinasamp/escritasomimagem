import { useState } from "react";
import InternalTabs from "../../../components/InternalTabs/InternalTabs";
import {
  ThemedTableFridayList,
  ThemedTableFridayPart2List,
  ThemedTablesList,
  ThemedTableThursdayList,
  ThemedTableThursdayPart2List,
  ThemedTableWednesdayList,
  ThemedTableWednesdayPart2List,
} from "../../../infos/themed-tables.list";
import { SubRoutesTitle } from "../../../routes";
import SearchThemedTables from "./SearchThemedTables";
import "./style.scss";
import { ListThemedTableType } from "./types";
import { ContentThemedTable } from "./themed-tables.mapper";

const ThemedTable = () => {
  const combinedList: ListThemedTableType[] = [
    ...ThemedTableWednesdayList,
    ...ThemedTableWednesdayPart2List,
    ...ThemedTableThursdayList,
    ...ThemedTableThursdayPart2List,
    ...ThemedTableFridayList,
    ...ThemedTableFridayPart2List,
  ];

  const [filteredTables, setFilteredTables] =
    useState<ListThemedTableType[]>(combinedList);
  const [onFocus, setOnFocus] = useState(false);

  const handleSearch = (filteredList: ListThemedTableType[]) => {
    setFilteredTables(filteredList);
  };
  return (
    <section className="esi-pages esi-themed-table">
      <h3 className="title-page">{SubRoutesTitle.THEMED_TABLES}</h3>

      <div className="esi-pages-search">
        <SearchThemedTables
          list={combinedList}
          onSearch={handleSearch}
          inFocus={(focus) => setOnFocus(focus)}
        />
      </div>
      {onFocus ? (
        <div className="box">
          <ContentThemedTable list={filteredTables} listFiltered />
        </div>
      ) : (
        <InternalTabs list={ThemedTablesList} />
      )}
    </section>
  );
};

export default ThemedTable;
