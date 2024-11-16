import { useEffect, useState } from "react";
import "../styles/MainContent.css";

import RentalCard from "./RentalCard";
import SearchBar from "./SearchBar";

const MainContent = ({ apartList, setApartList }) => {
  const [searchStr, setSearchStr] = useState();
  const [filteredApts, setFilteredApts] = useState([...apartList]);

  useEffect(() => {
    let tempApts = [...apartList];
    if (searchStr) {
      tempApts = apartList.filter((oneApartment) => {
        return (
          oneApartment.name.toUpperCase().search(searchStr.toUpperCase()) >= 0
        );
      });
    }
    setFilteredApts([...tempApts]);
  }, [searchStr, apartList]);

  return (
    <div className="main-content">
      <SearchBar searchStr={searchStr} setSearchStr={setSearchStr} />
      <div className="main-rental-list">
        {filteredApts.map((apartment) => {
          return (
            <RentalCard
              key={apartment.id}
              apartment={apartment}
              apartList={apartList}
              setApartList={setApartList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MainContent;
