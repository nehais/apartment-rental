const SearchBar = () => {
  /*@Teresa : implement the search last as I found it challanging to avoid filtering out the main list. Tips below
  1. take search string as a prop from MainContent
  2. search string is a state variable in MainContent
  3. A function in MainContent to - create a Filtered arr from the search string 
  4. Filtered arr is shown in MainContent but not passed to edit & delete.
  5. We apply filter again when we render MainContent so may be filter in useEffect*/
  return <input type="text" placeholder="Search" className="search-bar" />;
};

export default SearchBar;
