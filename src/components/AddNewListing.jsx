import React from "react";
import { useState } from "react";
const AddNewListing = ({ apartList, setApartList }) => {
  /*@Teresa : Add all the fields here & change the form too with formData.xyzFieldname & onChange event to handleChange. I have added the correct event below*/
  const [formData, setFormData] = useState({
    picture_url: "",
    name: "",
    host_location: "",
    host_name: "",
    description: "",
    property_type: "",
    accommodates: "",
    bathrooms: "",
    bedrooms: "",
    beds: "",
    neighbourhood: "",
    price: "",
    review_scores_rating: "",
    host_thumbnail_url: "",
    host_about: "",
  });

  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

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
  function handleSubmit(e) {
    e.preventDefault();
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
      id: apartList.length + 2,
    };
    setApartList([...apartList, newApartment]);

    /*@Teresa : Set the form data to black*/
  }
  return (
    <div className="add-list-area">
      <form className="AddListing" onSubmit={handleSubmit}>
        <h2>Add a New Listing</h2>
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
                value={formData.name}
                onChange={handleName}
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
                value={formData.property_type}
                onChange={handleProperty_type}
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
                value={formData.picture_url}
                onChange={handlePicture_url}
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
                value={formData.description}
                onChange={handleDescription}
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
                value={formData.neighbourhood}
                onChange={handleNeighbourhood}
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
                value={formData.accommodates}
                onChange={handleAccommodates}
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
                value={formData.bathrooms}
                onChange={handleBathrooms}
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
                value={formData.bedrooms}
                onChange={handleBedrooms}
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
                value={formData.beds}
                onChange={handleBeds}
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
                value={formData.price}
                onChange={handlePrice}
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
                value={formData.host_location}
                onChange={handleHost_location}
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
                value={formData.host_name}
                onChange={handleHost_name}
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
                value={formData.host_about}
                onChange={handleHost_about}
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
                value={formData.host_thumbnail_url}
                onChange={handleHost_thumbnail_url}
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
                value={formData.review_scores_rating}
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
