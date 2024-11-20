import { useEffect, useState } from "react";
import RentalCard from "./RentalCard";

const Favourite = ({ apartList }) => {
  const [favouriteList, setFavouriteList] = useState([]);
  const [hasResults, setHasResults] = useState(0);

  useEffect(() => {
    let tempList = apartList.filter((oneApartment) => {
      return oneApartment.liked;
    });
    setFavouriteList([...tempList]);
    setHasResults(tempList.length);
  }, []);

  return (
    <div className="main-content">
      <h2 style={{ alignSelf: "center" }}>Favourite Nests</h2>
      <div className="main-rental-list">
        {favouriteList.map((apartment) => {
          return (
            <RentalCard
              key={apartment.id}
              apartment={apartment}
              apartList={apartList}
              viewMode={true}
            />
          );
        })}

        {hasResults === 0 && (
          <h3>
            ❤️ No Favorites Yet! <br />
            Start exploring and tap ❤️ to save your dream spaces here!
          </h3>
        )}
      </div>
    </div>
  );
};

export default Favourite;
