import "../styles/MainContent.css";

import { useState } from "react";
import RentalCard from "./RentalCard";

const MainContent = ({ apartList, setApartList }) => {
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
