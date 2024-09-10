import {
  ThemedTableFridayList,
  ThemedTableFridayPart2List,
  ThemedTableThursdayList,
  ThemedTableThursdayPart2List,
  ThemedTableWednesdayList,
  ThemedTableWednesdayPart2List,
} from "../../../infos/themed-tables.list";
import { ListContentProps } from "./types";
import "./style.scss";

const ThemedTableWednesday = () => {
  return (
    <section className="esi-pages esi-themed-table">
      <ContentThemedTable hours="11h - 12:30" list={ThemedTableWednesdayList} />

      <ContentThemedTable
        hours="14h - 15:30"
        list={ThemedTableWednesdayPart2List}
      />
    </section>
  );
};

const ThemedTableThursday = () => {
  return (
    <section className="esi-pages esi-themed-table">
      <ContentThemedTable hours="11h - 12:30" list={ThemedTableThursdayList} />

      <ContentThemedTable
        hours="14h - 15:30"
        list={ThemedTableThursdayPart2List}
      />
    </section>
  );
};

const ThemedTableFriday = () => {
  return (
    <section className="esi-pages esi-themed-table">
      <ContentThemedTable hours="11h - 12:30" list={ThemedTableFridayList} />

      <ContentThemedTable
        hours="14h - 15:30"
        list={ThemedTableFridayPart2List}
      />
    </section>
  );
};

const ContentThemedTable = ({
  list,
  hours,
  listFiltered,
}: ListContentProps) => {
  return (
    <>
      {hours && (
        <header className="themed-table-header">
          <span>{hours}</span>
        </header>
      )}

      <ul className="themed-table-content">
        {list.map((item, index) => {
          const {
            table_number_title,
            table_title,
            table_hours,
            table_day,
            table_mediator,
            table_room,
            content,
          } = item;
          return (
            <li key={index}>
              <span className="themed-table-title-wrapper">
                {listFiltered && (
                  <small className="themed-table-filtered">
                    {table_hours} - {table_day}
                  </small>
                )}
                <b>
                  <p>{table_number_title}</p>
                  <p>{table_title}</p>
                </b>
                {table_mediator && table_room && (
                  <span className="themed-table-mediator-room">
                    <label>
                      Sala: <p>{table_room}</p>
                    </label>
                    <label>
                      Mediador: <p>{table_mediator}</p>
                    </label>
                  </span>
                )}
              </span>
              <div className="themed-table-content-wrapper">
                {content.map((contentItem, indexContent) => {
                  const { title_table, persons } = contentItem;
                  return (
                    <div key={indexContent}>
                      <b dangerouslySetInnerHTML={{ __html: title_table }} />
                      <p dangerouslySetInnerHTML={{ __html: persons }} />
                    </div>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export {
  ContentThemedTable,
  ThemedTableWednesday,
  ThemedTableThursday,
  ThemedTableFriday,
};
