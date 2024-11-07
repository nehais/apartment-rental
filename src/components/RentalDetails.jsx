import React from "react";
import { useParams } from "react-router-dom";

const RentalDetails = ({ apartList }) => {
  const { apartmentId } = useParams();

  let apartment = apartList.find((a) => {
    return a.id === Number(apartmentId);
  });

  return (
    <div>
      <img src={apartment.picture_url} alt="" />
    </div>
  );
};

export default RentalDetails;
