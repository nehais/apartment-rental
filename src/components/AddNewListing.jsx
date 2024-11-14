import React from "react";
import { useState } from "react";
const AddNewListing = () => {
  const [picture_url, setPicture_url] = useState("");
  const [name, setName] = useState("");
  const [host_location, setHost_location] = useState("");
  const [host_name, setHost_name] = useState("");
  const [description, setDescription] = useState("");
  const [property_type, setProperty_type] = useState("");
  const [accommodates, setAccomodates] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [neighbourhood, setNeighbourhood] = useState("");
  const [price, setPrice] = useState("");
  const [review_scores_rating, setReview_scores_rating] = useState("");
  const [host_thumbnail_url, setHost_thumbnail_url] = useState("");
  const [host_about, setHost_about] = useState("");
  const handlePicture_url = (e) => setPicture_url(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleHost_location = (e) => setHost_location(e.target.value);
  const handleHost_name = (e) => setHost_name(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleProperty_type = (e) => setProperty_type(e.target.value);
  const handleAccommodates = (e) => setAccomodates(e.target.value);
  const handleBathrooms = (e) => setBathrooms(e.target.value);
  const handleBedrooms = (e) => setBedrooms(e.target.value);
  const handleBeds = (e) => setBeds(e.target.value);
  const handleNeighbourhood = (e) => setNeighbourhood(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleReview_scores_rating = (e) =>
    setReview_scores_rating(e.target.value);
  const handleHost_thumbnail_url = (e) => setHost_thumbnail_url(e.target.value);
  const handleHost_about = (e) => setHost_about(e.target.value);
  return (
    <div className="add-list-area">
      <form className="AddListing">
        <h2>Add a New Listing</h2>
        <div className="form-fields">
          <div className="row">
            <div className="col-25">
              <label for="name">Apartment Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Apartment Title"
                value={name}
                onChange={handleName}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="property_type">Apartment Type</label>
            </div>
            <div className="col-75">
              <select
                id="property_type"
                name="property_type"
                value={property_type}
                onChange={handleProperty_type}
              >
                <option value="Private Room">Private Room</option>
                <option value="Whole Apartment">Whole Apartment</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="picture_url">Apartment Image</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="picture_url"
                name="picture_url"
                placeholder="Apartment Image URL"
                value={picture_url}
                onChange={handlePicture_url}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="description">Apartment Description</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Apartment Description"
                value={description}
                onChange={handleDescription}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="neighbourhood">Neighbourhood</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="neighbourhood"
                name="neighbourhood"
                placeholder="Neighbourhood"
                value={neighbourhood}
                onChange={handleNeighbourhood}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="accommodates">Accomodates</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="accommodates"
                name="accommodates"
                placeholder="Apartment Accommodation No."
                value={accommodates}
                onChange={handleAccommodates}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="bathrooms">Bathrooms</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                placeholder="No. of Bathrooms"
                value={bathrooms}
                onChange={handleBathrooms}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="bedrooms">Bedrooms</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                placeholder="No. of Bedrooms"
                value={bedrooms}
                onChange={handleBedrooms}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="beds">Beds</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="beds"
                name="beds"
                placeholder="No. of Beds"
                value={beds}
                onChange={handleBeds}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="price">Price per night</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price per night"
                value={price}
                onChange={handlePrice}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="host_location">Host Location</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_location"
                name="host_location"
                placeholder="Host Location"
                value={host_location}
                onChange={handleHost_location}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="host_name">Host Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_name"
                name="host_name"
                placeholder="Host Name"
                value={host_name}
                onChange={handleHost_name}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="host_about">Host About</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_about"
                name="host_about"
                placeholder="Tell us about yourself"
                value={host_about}
                onChange={handleHost_about}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="host_thumbnail_url">Host Thumbnail Url</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_thumbnail_url"
                name="host_thumbnail_url"
                placeholder="Host Thumbnail Url"
                value={host_thumbnail_url}
                onChange={handleHost_thumbnail_url}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="review_scores_rating">Review Scores Rating</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="review_scores_rating"
                name="review_scores_rating"
                placeholder="Review Scores Rating"
                value={review_scores_rating}
                onChange={handleReview_scores_rating}
              />
            </div>
          </div>
          <button type="submit" className="add-property-button">
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddNewListing;
