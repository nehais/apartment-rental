const SearchBar = ({ searchStr, setSearchStr, hasResults }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="search-bar"
      value={searchStr}
      onChange={(e) => setSearchStr(e.target.value)}
    />
  );
};

export default SearchBar;
/*{
   {!hasResults && searchStr && (
        <p className="error-message">
          Nada in this cozy corner—try adjusting!”
        </p>
      )} 
}*/
