const SearchBar = ({ searchStr, setSearchStr }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
