import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddNewListing = ({ apartList, setApartList }) => {
  /*@Teresa : Add all the fields here & change the form too with formData.xyzFieldname & onChange event to handleChange. I have added the correct event below*/
  const [formData, setFormData] = useState({
    picture_url: "",
    name: "",
    host_name: "",
    description: "",
    property_type: "",
    accommodates: 1,
    bathrooms: 1,
    bedrooms: 1,
    beds: 1,
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

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    formData.price = "$" + formData.price;
    formData.id = apartList.length + 2;
    formData.instant_bookable = true;

    setApartList([...apartList, formData]);
    navigate("/");
  }
  return (
    <div className="add-list-area">
      <form className="AddListing" onSubmit={handleSubmit}>
        <h2>Add your Nest</h2>
        <div className="form-fields">
          <div className="row">
            <div className="col-label">
              <label htmlFor="name">Apartment Name</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={55}
                id="name"
                name="name"
                placeholder="Apartment Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="property_type">Apartment Type</label>
            </div>
            <div className="col-field">
              <select
                id="property_type"
                name="property_type"
                value={formData.property_type}
                onChange={handleChange}
                required
                className="field"
              >
                <option value="">----Please Select----</option>
                <option value="Private Room">Private Room</option>
                <option value="Whole Apartment">Whole Apartment</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="picture_url">Apartment Image</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                id="picture_url"
                name="picture_url"
                placeholder="Apartment Image URL"
                value={formData.picture_url}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="description">Apartment Description</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={1000}
                id="description"
                name="description"
                placeholder="Apartment Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="neighbourhood">Neighbourhood</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={100}
                id="neighbourhood"
                name="neighbourhood"
                placeholder="Neighbourhood Location"
                value={formData.neighbourhood}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="accommodates">Accomodates</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                min={1}
                max={20}
                id="accommodates"
                name="accommodates"
                placeholder="Guest Count"
                value={formData.accommodates}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="bathrooms">Bathrooms</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                min={1}
                max={20}
                id="bathrooms"
                name="bathrooms"
                placeholder="No. of Bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="bedrooms">Bedrooms</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                min={1}
                max={20}
                id="bedrooms"
                name="bedrooms"
                placeholder="No. of Bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="beds">Beds</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                min={1}
                max={20}
                id="beds"
                name="beds"
                placeholder="No. of Beds"
                value={formData.beds}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="price">Price per night</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                min={1}
                max={2000}
                id="price"
                name="price"
                placeholder="Price per night"
                value={formData.price}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="host_name">Your Name</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={20}
                id="host_name"
                name="host_name"
                placeholder="Host Name"
                value={formData.host_name}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="host_about">Your Info</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                maxLength={500}
                id="host_about"
                name="host_about"
                placeholder="Tell us about yourself"
                value={formData.host_about}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="host_thumbnail_url">Your Picture</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                id="host_thumbnail_url"
                name="host_thumbnail_url"
                placeholder="Host Thumbnail Url"
                value={formData.host_thumbnail_url}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="review_scores_rating">Rating [1-5]</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                min={1}
                max={5}
                id="review_scores_rating"
                name="review_scores_rating"
                placeholder="Review Scores Rating"
                value={formData.review_scores_rating}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>
          <button type="submit" className="add-property-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddNewListing;
