import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
const UpdateListing = ({ apartment, apartList, setApartList }) => {
  const params = useParams();
  console.log(apartList, params);
  const apartmentToUpdate = apartment.find(
    (apartment) => apartment.id === params.apartment.id
  );
  /*@Teresa : 
  1. getParams to get the passed id & filter on apartList to get the apartment
  2. set the apartment data in the form 
    a. change value field to apartment date
    b. change onChange event to handleChange
  */

  /*@Teresa : After above implement - delete the extra state & event*/
  const [picture_url, setPicture_url] = useState(apartmentToUpdate.picture_url);
  const [name, setName] = useState(apartmentToUpdate.name);
  const [host_location, setHost_location] = useState(
    apartmentToUpdate.host_location
  );
  const [host_name, setHost_name] = useState(apartmentToUpdate.host_name);
  const [description, setDescription] = useState(apartmentToUpdate.description);
  const [property_type, setProperty_type] = useState(
    apartmentToUpdate.property_type
  );
  const [accommodates, setAccomodates] = useState(
    apartmentToUpdate.accommodates
  );
  const [bathrooms, setBathrooms] = useState(apartmentToUpdate.bathrooms);
  const [bedrooms, setBedrooms] = useState(apartmentToUpdate.bedrooms);
  const [beds, setBeds] = useState(apartmentToUpdate.beds);
  const [neighbourhood, setNeighbourhood] = useState(
    apartmentToUpdate.neighbourhood
  );
  const [price, setPrice] = useState(apartmentToUpdate.price);
  const [review_scores_rating, setReview_scores_rating] = useState(
    apartmentToUpdate.review_scores_rating
  );
  const [host_thumbnail_url, setHost_thumbnail_url] = useState(
    apartmentToUpdate.host_thumbnail_url
  );
  const [host_about, setHost_about] = useState(apartmentToUpdate.host_about);

  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  /*@Teresa : You should update the logic below for update*/
  function handleUpdate(e) {
    e.preventDefault();
    const updatedApartments = apartList.map((oneApartment) => {
      if (oneApartment.id == params.apartment.id)
        oneApartment.picture_url = picture_url;
      oneApartment.name = name;
      oneApartment.host_location = host_location;
      oneApartment.host_name = host_name;
      oneApartment.description = description;
      oneApartment.property_type = property_type;
      oneApartment.accommodates = accommodates;
      oneApartment.bathrooms = bathrooms;
      oneApartment.bedrooms = bedrooms;
      oneApartment.beds = beds;
      oneApartment.neighbourhood = neighbourhood;
      oneApartment.price = price;
      oneApartment.review_scores_rating = review_scores_rating;
      oneApartment.host_thumbnail_url = host_thumbnail_url;
      oneApartment.host_about = host_about;

      return oneApartment;
    });
    setApartList(updatedApartments);

    const newApartment = {
      picture_url: picture_url,
      name: name,
      host_location: host_location,
      host_name: host_name,
      description: description,
      property_type: property_type,
      accommodates: accommodates,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
      beds: beds,
      neighbourhood: neighbourhood,
      price: price,
      review_scores_rating: review_scores_rating,
      host_thumbnail_url: host_thumbnail_url,
      host_about: host_about,
    };
    setApartList([...apartList, newApartment]);
  }
  return (
    <div className="add-list-area">
      <form className="UpdateListing" onSubmit={handleUpdate}>
        <h2>Update the Listing</h2>
        <div className="form-fields">
          <div className="row">
            <div className="col-25">
              <label htmlFor="name">Apartment Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Apartment Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="property_type">Apartment Type</label>
            </div>
            <div className="col-75">
              <select
                id="property_type"
                name="property_type"
                value={property_type}
                onChange={(e) => setProperty_type(e.target.value)}
              >
                <option value="Private Room">Private Room</option>
                <option value="Whole Apartment">Whole Apartment</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="picture_url">Apartment Image</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="picture_url"
                name="picture_url"
                placeholder="Apartment Image URL"
                value={picture_url}
                onChange={(e) => setPicture_url(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="description">Apartment Description</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Apartment Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="neighbourhood">Neighbourhood</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="neighbourhood"
                name="neighbourhood"
                placeholder="Neighbourhood"
                value={neighbourhood}
                onChange={(e) => setNeighbourhood(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="accommodates">Accomodates</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="accommodates"
                name="accommodates"
                placeholder="Apartment Accommodation No."
                value={accommodates}
                onChange={(e) => setAccomodates(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="bathrooms">Bathrooms</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                placeholder="No. of Bathrooms"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="bedrooms">Bedrooms</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                placeholder="No. of Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="beds">Beds</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="beds"
                name="beds"
                placeholder="No. of Beds"
                value={beds}
                onChange={(e) => setBeds(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="price">Price per night</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price per night"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="host_location">Host Location</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_location"
                name="host_location"
                placeholder="Host Location"
                value={host_location}
                onChange={(e) => setHost_location(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="host_name">Host Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_name"
                name="host_name"
                placeholder="Host Name"
                value={host_name}
                onChange={(e) => setHost_name(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="host_about">Host About</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_about"
                name="host_about"
                placeholder="Tell us about yourself"
                value={host_about}
                onChange={(e) => setHost_about(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="host_thumbnail_url">Host Thumbnail Url</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_thumbnail_url"
                name="host_thumbnail_url"
                placeholder="Host Thumbnail Url"
                value={host_thumbnail_url}
                onChange={(e) => setHost_thumbnail_url(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="review_scores_rating">Review Scores Rating</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="review_scores_rating"
                name="review_scores_rating"
                placeholder="Review Scores Rating"
                value={review_scores_rating}
                onChange={(e) => setReview_scores_rating(e.target.value)}
              />
            </div>
          </div>
          <Link to="/" id="back-home">
            <button type="submit" className="add-property-button">
              Edit Property
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default UpdateListing;
