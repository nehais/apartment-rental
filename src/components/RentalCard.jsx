import React from "react";

function RentalCard({apartment}) {
  return (
    <div className="rental-card">
      <img src={apartment.picture_url} alt="" className="rent-picture"/>
    </div>
  );
}

export default RentalCard;
