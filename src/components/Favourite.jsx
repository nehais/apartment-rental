import { useEffect, useState } from "react";
import RentalCard from "./RentalCard";

const Favourite = ({ apartList }) => {
  const [favouriteList, setFavouriteList] = useState([]);
  useEffect(() => {
    let tempList = apartList.filter((oneApartment) => {
      return oneApartment.liked;
    });
    setFavouriteList([...tempList]);
  }, []);
  return (
    <div>
      <h2>Favourite Nests</h2>
      <div className="main-rental-list">
        {favouriteList.map((apartment) => {
          return (
            <RentalCard
              key={apartment.id}
              apartment={apartment}
              apartList={apartList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourite;
