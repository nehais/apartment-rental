import React from "react";

function RentalCard({apartment}) {
  return (
    <div className="rental-card">
      <img src={apartment.picture_url} alt="" className="rent-picture"/>
      <h3>{apartment.name}</h3>
      <p>Hosted at {apartment.host_location}</p>
      <h4>{apartment.price} per night</h4>      
    </div>
  );
}

export default RentalCard;
