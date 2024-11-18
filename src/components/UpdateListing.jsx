import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateListing = ({ apartList, setApartList }) => {
  const { apartmentId } = useParams();
  const [apartmentToUpdate, setApartmentToUpdate] = useState({
    picture_url: "",
    name: "",
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

  console.log(apartList, apartmentId);

  useEffect(() => {
    let appt = apartList.find((oneApartment) => {
      return oneApartment.id === Number(apartmentId);
    });
    appt.price = isNaN(appt.price)
      ? appt.price
        ? Number(appt.price.slice(1))
        : ""
      : appt.price;
    setApartmentToUpdate(appt);
  }, []);

  function handleChange(e) {
    setApartmentToUpdate((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const navigate = useNavigate();
  function handleUpdate(e) {
    e.preventDefault();

    const updatedApartments = apartList.map((oneApartment) => {
      if (oneApartment.id === Number(apartmentId)) {
        oneApartment = apartmentToUpdate;

        oneApartment.price = "$" + oneApartment.price;
      }

      return oneApartment;
    });

    setApartList(updatedApartments);

    navigate("/");
  }

  return (
    <div className="add-list-area">
      <form className="UpdateListing" onSubmit={handleUpdate}>
        <h2>Refresh your Nest</h2>
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
                value={apartmentToUpdate.name}
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
                value={apartmentToUpdate.property_type}
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
                value={apartmentToUpdate.picture_url}
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
                value={apartmentToUpdate.description}
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
                value={apartmentToUpdate.neighbourhood}
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
                value={apartmentToUpdate.accommodates}
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
                value={apartmentToUpdate.bathrooms}
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
                value={apartmentToUpdate.bedrooms}
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
                value={apartmentToUpdate.beds}
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
                step="0.01"
                pattern="^\d+(?:\.\d{1,2})?$"
                id="price"
                name="price"
                placeholder="Price per night"
                value={apartmentToUpdate.price}
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
                value={apartmentToUpdate.host_name}
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
                value={apartmentToUpdate.host_about}
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
                value={apartmentToUpdate.host_thumbnail_url}
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
                value={apartmentToUpdate.review_scores_rating}
                onChange={handleChange}
                required
                className="field"
              />
            </div>
          </div>

          <button type="submit" className="add-property-button">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateListing;
