import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

function RentalCard({ apartment, apartList, setApartList }) {
  return (
    <div className="rental-card">
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

        <p id="card-host">Hosted at {apartment.host_location}</p>

        {apartment.instant_bookable ? (
          <h4 className="price">{apartment.price} night</h4>
        ) : (
          <h4 className="sold-out">Sold out</h4>
        )}
      </Link>

      <Link to={`/updateListing/${apartment.id}`}>
        <EditButton
          id={apartment.id}
          apartList={apartList}
          setApartList={setApartList}
        />
      </Link>

      <DeleteButton
        id={apartment.id}
        apartList={apartList}
        setApartList={setApartList}
      />
    </div>
  );
}

export default RentalCard;
