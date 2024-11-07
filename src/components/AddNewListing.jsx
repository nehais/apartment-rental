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
    <div>
      <form className="AddListing">
        <span>Add a New Listing</span>
        <div>
          <label>
            Apartment Image
            <input
              name="picture_Url"
              type="url"
              placeholder="Apartment Image"
              value={picture_Url}
              onChange={handlePicture_Url}
            />
          </label>
          <label>
            Apartment Name
            <input
              name="title"
              type="text"
              placeholder="Property Title"
              value={name}
              onChange={handleName}
            />
          </label>
          <label>
            Host Location
            <input
              name="host_Location"
              type="text"
              placeholder="Host Location"
              value={host_Location}
              onChange={handleHost_Location}
            />
          </label>
          <label>
            Host Name
            <input
              name="host_name"
              type="text"
              placeholder="Host Name"
              value={host_Name}
              onChange={handleHost_Name}
            />
          </label>

          <label>
            Property Description
            <input
              name="description"
              type="text"
              placeholder="Apartment Description"
              value={description}
              onChange={handleDescription}
            />
          </label>
          <label>
            Property Type
            <select
              name="property_Type"
              onChange={handleProperty_Type}
              value={property_Type}
            >
              <option value="Private Room">Private Room</option>
              <option value="Whole Apartment">Whole Apartment</option>
            </select>
          </label>
          <label>
            Accomodates
            <input
              name="accommodates"
              type="number"
              placeholder="1"
              value={accommodates}
              onChange={handleAccommodates}
            />
          </label>

          <label>
            Bathrooms
            <input
              name="bathrooms"
              type="number"
              placeholder="1"
              value={bathrooms}
              onChange={handleBathrooms}
            />
          </label>
          <label>
            Bedrooms
            <input
              name="bedrooms"
              type="number"
              placeholder="1"
              value={bedrooms}
              onChange={handleBedrooms}
            />
          </label>

          <button type="submit">Add Property</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewListing;
