import React from "react";
import { useState } from "react";

const AddNewListing = () => {
  const [picture_Url, setPicture_Url] = useState("");
  const [name, setName] = useState("");
  const [host_Location, setHost_Location] = useState("");
  const [host_Name, setHost_Name] = useState("");
  const [description, setDescription] = useState("");
  const [property_Type, setProperty_Type] = useState("");
  const [accommodates, setAccomodates] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const handlePicture_Url = (e) => setPicture_Url(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleHost_Location = (e) => setHost_Location(e.target.value);
  const handleHost_Name = (e) => setHost_Name(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleProperty_Type = (e) => setProperty_type(e.target.value);
  const handleAccommodates = (e) => setAccomodates(e.target.value);
  const handleBathrooms = (e) => setBathrooms(e.target.value);
  const handleBedrooms = (e) => setBedrooms(e.target.value);
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
              <label for="property_Type">Apartment Type</label>
            </div>
            <div className="col-75">
              <select
                id="property_Type"
                name="property_Type"
                value={property_Type}
                onChange={handleProperty_Type}
              >
                <option value="Private Room">Private Room</option>
                <option value="Whole Apartment">Whole Apartment</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="picture_Url">Apartment Image</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="picture_Url"
                name="picture_Url"
                placeholder="Apartment Image URL"
                value={picture_Url}
                onChange={handlePicture_Url}
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
              <label for="host_Location">Host Location</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_Location"
                name="host_Location"
                placeholder="Host Location"
                value={host_Location}
                onChange={handleHost_Location}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="host_Name">Host Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="host_Name"
                name="host_Name"
                placeholder="Host Name"
                value={host_Name}
                onChange={handleHost_Name}
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
