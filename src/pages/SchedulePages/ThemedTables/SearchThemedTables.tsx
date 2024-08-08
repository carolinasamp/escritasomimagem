import { ChangeEvent, FC, useEffect, useState } from "react";
import "./style.scss";
import { SearchProps } from "./types";

const SearchThemedTables: FC<SearchProps> = ({ list, onSearch, inFocus }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    inFocus(query.trim().length > 0 || false);
  }, [query, inFocus]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const currentQuery = target.value.toLowerCase();
    setQuery(currentQuery);

    const filteredList = list
      .map((table) => {
        const hasMatchingContent = table.content.some((content) =>
          [content.title_table ?? "", content.persons ?? ""].some((field) =>
            field.toLowerCase().includes(currentQuery)
          )
        );
        const matchesTable = [table.table_number_title, table.table_title].some(
          (field) => field.toLowerCase().includes(currentQuery)
        );

        return matchesTable || hasMatchingContent ? table : null;
      })
      .filter((table) => table !== null);

    onSearch(filteredList);
  };

  const handleClearSearch = () => {
    setQuery("");
    onSearch(list);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Procurar por mesa, tema, título, pessoa..."
      />
      {query && (
        <button className="clear-button" onClick={handleClearSearch}>
          &times;
        </button>
      )}
    </div>
  );
};

export default SearchThemedTables;
