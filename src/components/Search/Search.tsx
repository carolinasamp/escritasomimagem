import { useState } from "react";
import "./style.scss";
import { SearchProps } from "./types";

const Search: React.FC<SearchProps> = ({ list, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = ({ target }: any) => {
    setQuery(target.value);
    const filteredList = list.filter((person) =>
      person.name.toLowerCase().includes(target.value.toLowerCase())
    );
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
        placeholder="Procurar por pessoa"
      />
      {query && (
        <button className="clear-button" onClick={handleClearSearch}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Search;
