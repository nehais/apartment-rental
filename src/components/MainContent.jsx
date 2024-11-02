import ApartmentListings from "../assets/listings.json";
import RentalCard from "./RentalCard";
import { useState } from "react";
import RentalDetails from "./RentalDetails";

const MainContent = () => {
  const [apartList, setApartList] = useState(ApartmentListings);

  return (
    <div className="main-content">
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
  );
};

export default MainContent;
