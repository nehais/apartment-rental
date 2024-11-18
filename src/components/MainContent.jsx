import { useEffect, useState, useRef } from "react";
import "../styles/MainContent.css";

import RentalCard from "./RentalCard";
import SearchBar from "./SearchBar";
import AscSortIcon from "../assets/asc-sort.png";
import DescSortIcon from "../assets/desc-sort.png";

const MainContent = ({ apartList, setApartList, modifiedID }) => {
  const [searchStr, setSearchStr] = useState();
  const [filteredApts, setFilteredApts] = useState([...apartList]);
  const [ascSort, setAscSort] = useState(true);
  const [hasResults, setHasResults] = useState(0);
  const itemRefs = useRef({});

  useEffect(() => {
    /*Search filter added here*/
    let tempApts = [...apartList];
    if (searchStr) {
      tempApts = apartList.filter((oneApartment) => {
        return (
          oneApartment.name.toUpperCase().search(searchStr.toUpperCase()) >= 0
        );
      });
    }
    setFilteredApts([...tempApts]);
    setHasResults[tempApts.length];
  }, [searchStr, apartList]);

  useEffect(() => {
    if (modifiedID) {
      let latestApartment = apartList.find((oneApartment) => {
        return oneApartment.id === modifiedID;
      });
      if (latestApartment && itemRefs.current[latestApartment.id]) {
        itemRefs.current[latestApartment.id].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [modifiedID]);

  /* Teresa Sort=>
    1. New sort func
  arr.sort((a,b) => {
    //check null
    //remove $
    return (a.price - b.price)
    
    })
    2. Sort on button click
   */
  return (
    <div className="main-content">
      <div className="search-area">
        <SearchBar searchStr={searchStr} setSearchStr={setSearchStr} />
        <div
          className="sort-button"
          style={{
            backgroundImage: `url(${ascSort ? AscSortIcon : DescSortIcon})`,
          }}
          onClick={() => {
            setAscSort(!ascSort);
          }}
        ></div>
      </div>

      <div className="main-rental-list">
        {filteredApts.map((apartment) => {
          return (
            <RentalCard
              key={apartment.id}
              apartment={apartment}
              apartList={apartList}
              setApartList={setApartList}
              ref={(el) => (itemRefs.current[apartment.id] = el)}
            />
          );
        })}

        {!hasResults && searchStr && (
          <p className="error-message">
            Nada in this cozy corner—try adjusting!
          </p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
