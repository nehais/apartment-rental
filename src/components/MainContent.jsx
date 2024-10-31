import ApartmentListings from "../assets/listings.json";
import RentalCard from "./RentalCard";
import { useState } from "react";
const MainContent = () => {
  const [apartList, setApartList] = useState(ApartmentListings);
  apartList.forEach((element) => {
    console.log(element.id);
  });
  return <></>;
};

export default MainContent;
