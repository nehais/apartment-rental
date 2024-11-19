import { useEffect, useState, useRef } from "react";
import "../styles/MainContent.css";

import RentalCard from "./RentalCard";
import SearchBar from "./SearchBar";
import AscSortIcon from "../assets/asc-sort.png";
import DescSortIcon from "../assets/desc-sort.png";

const MainContent = ({ apartList, setApartList, modifiedID }) => {
  const [searchStr, setSearchStr] = useState("");
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
    tempApts = sortByPrice(tempApts);
    setFilteredApts([...tempApts]);
    setHasResults[tempApts.length];
  }, [searchStr, apartList, ascSort]);

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

  function sortByPrice(apartments) {
    return apartments.sort((a, b) => {
      let nullValue = ascSort ? 100000 : 0; //Keep null values at the end
      const priceA = a.price
        ? parseFloat((a.price || "").replace("$", ""))
        : nullValue;
      const priceB = b.price
        ? parseFloat((b.price || "").replace("$", ""))
        : nullValue;

      if (ascSort) {
        if (priceA < priceB) return -1;
        if (priceA > priceB) return 1;
      } else {
        if (priceA > priceB) return -1;
        if (priceA < priceB) return 1;
      }
    });
  }

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
            console.log("Sort order toggled:", !ascSort);
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
