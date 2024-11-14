import React from "react";
import { useParams } from "react-router-dom";

const RentalDetails = ({ apartList }) => {
  const { apartmentId } = useParams();

  let apartment = apartList.find((a) => {
    return a.id === Number(apartmentId);
  });

  return (
    <div className="rental-details">
      <h3 id="details-name">{apartment.name}</h3>
      <div className="details-content">
        <img src={apartment.picture_url} alt="Apartment Image" />
        <div className="details-apt-content">
          <h4 id="details-apart-title">
            {apartment.property_type} in {apartment.neighbourhood}
          </h4>

          <p>
            {apartment.accommodates} guests - {apartment.bedrooms} bedrooms -{" "}
            {apartment.beds} beds - {apartment.bathrooms} baths
          </p>
          <div className="details-apart-info">
            <p>&#9733; {apartment.review_scores_rating}</p>
            {apartment.instant_bookable ? (
              <h4>{apartment.price} night</h4>
            ) : (
              <h4 className="sold-out">Sold out</h4>
            )}
          </div>

          {apartment.description && (
            <p id="details-apt-desc">{apartment.description}</p>
          )}

          <div id="details-host">
            <img src={apartment.host_thumbnail_url} alt="Host Image" />
            <h5>
              <b>Hosted by {apartment.host_name}</b>
            </h5>
          </div>
          {apartment.host_about && (
            <p id="details-host-abt">{apartment.host_about}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
