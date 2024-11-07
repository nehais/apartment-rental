import React from "react";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";

function RentalCard({ apartment, apartList, setApartList }) {
  return (
    <div className="rental-card">
      <Link to={`/rentalDetails/${apartment.id}`}>
        <img src={apartment.picture_url} alt="" className="rent-picture" />
        <h3>{apartment.name}</h3>
        <p>Hosted at {apartment.host_location}</p>

        {apartment.instant_bookable ? (
          <h4>{apartment.price} per night</h4>
        ) : (
          <h4>Sold out</h4>
        )}
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
