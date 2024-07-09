import "./style.scss";

const Search = () => {
  return (
    <div className="search">
      <h3>Pesquisa</h3>
      <input type="text" placeholder="Digite sua pesquisa..." />
      <button>Pesquisar</button>
    </div>
  );
};

export default Search;
