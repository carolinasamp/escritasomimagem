import { useState } from "react";
import {
  TableFridayList,
  TablesList,
  TableThursdayList,
} from "../../../../infos/table";
import { ContentThemedTable } from "../../ThemedTables/themed-tables.mapper";
import { ListThemedTableType } from "../../ThemedTables/types";
import "../style.scss";
import SearchThemedTables from "../../ThemedTables/SearchThemedTables";
import InternalTabs from "../../../../components/InternalTabs/InternalTabs";

const Tables = () => {
  const combinedList: ListThemedTableType[] = [
    ...TableThursdayList,
    ...TableFridayList,
  ];

  const [filteredTables, setFilteredTables] =
    useState<ListThemedTableType[]>(combinedList);
  const [onFocus, setOnFocus] = useState(false);

  const handleSearch = (filteredList: ListThemedTableType[]) => {
    setFilteredTables(filteredList);
  };

  console.log(filteredTables);

  return (
    <>
      <section className="esi-pages esi-creative-productions">
        <div className="esi-pages-search">
          <SearchThemedTables
            list={combinedList}
            onSearch={handleSearch}
            inFocus={(focus) => setOnFocus(focus)}
          />
        </div>

        {onFocus ? (
          <div className="box">
            {filteredTables.length ? (
              <ContentThemedTable list={filteredTables} listFiltered />
            ) : (
              <>Nenhum resultado encontrado.</>
            )}
          </div>
        ) : (
          <InternalTabs list={TablesList} />
        )}
      </section>
    </>
  );
};

export default Tables;
