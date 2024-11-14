import "../styles/MainContent.css";

import RentalCard from "./RentalCard";
import SearchBar from "./SearchBar";

const MainContent = ({ apartList, setApartList }) => {
  return (
    <div className="main-content">
      <SearchBar />
      <div className="main-rental-list">
        {apartList.map((apartment) => {
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
