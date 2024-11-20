import { forwardRef } from "react";
import LikeButton from "./LikeButton";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

const RentalCard = forwardRef(
  ({ apartment, apartList, setApartList, setDeleteMessage }, ref) => {
    function handleLike() {
      const updatedApartments = apartList.map((oneApartment) => {
        if (oneApartment.id === apartment.id) {
          oneApartment.liked = oneApartment.liked ? false : true;
        }

        return oneApartment;
      });
      setApartList([...updatedApartments]);
    }

    return (
      <div className="rental-card" ref={ref}>
        <Link to={`/rentalDetails/${apartment.id}`}>
          <img
            src={apartment.picture_url}
            alt=""
            className="rent-picture"
            loading="eager"
          />

          <div id="card-name-title">
            <h3 id="card-name">{apartment.name}</h3>
            <p id="card-rating">&#9733; {apartment.review_scores_rating}</p>
          </div>

          <p id="card-host">
            Hosted at{" "}
            {apartment.neighbourhood
              ? apartment.neighbourhood
              : apartment.host_location}
          </p>

          {apartment.price ? (
            <h4 className="price">{apartment.price} night</h4>
          ) : (
            <h4 className="sold-out">Sold out</h4>
          )}
        </Link>

        <LikeButton apartment={apartment} handleLike={handleLike} />

        <Link to={`/updateListing/${apartment.id}`}>
          <EditButton />
        </Link>

        <DeleteButton
          id={apartment.id}
          apartList={apartList}
          setApartList={setApartList}
          setDeleteMessage={setDeleteMessage}
        />
      </div>
    );
  }
);

export default RentalCard;
