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
            {apartment.property_type} in{" "}
            {apartment.neighbourhood
              ? apartment.neighbourhood
              : apartment.host_location}
          </h4>

          <p>
            {apartment.accommodates > 1
              ? `${apartment.accommodates} guests`
              : `${apartment.accommodates} guest`}
            {apartment.bedrooms
              ? apartment.bedrooms > 1
                ? ` - ${apartment.bedrooms} bedrooms`
                : ` - ${apartment.bedrooms} bedroom`
              : null}
            {apartment.beds
              ? apartment.beds > 1
                ? ` - ${apartment.beds} beds`
                : ` - ${apartment.beds} bed`
              : null}
            {apartment.bathrooms
              ? apartment.bathrooms > 1
                ? ` - ${apartment.bathrooms} bathrooms`
                : ` - ${apartment.bathrooms} bathroom`
              : null}
          </p>
          <div className="details-apart-info">
            <p>&#9733; {apartment.review_scores_rating}</p>
            {apartment.price ? (
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
