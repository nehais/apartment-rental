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
                id="name"
                name="name"
                placeholder="Apartment Title"
                value={apartmentToUpdate.name}
                onChange={handleChange}
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
                className="field"
              >
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
                id="description"
                name="description"
                placeholder="Apartment Description"
                value={apartmentToUpdate.description}
                onChange={handleChange}
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
                id="neighbourhood"
                name="neighbourhood"
                placeholder="Neighbourhood"
                value={apartmentToUpdate.neighbourhood}
                onChange={handleChange}
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
                id="accommodates"
                name="accommodates"
                placeholder="Apartment Accommodation No."
                value={apartmentToUpdate.accommodates}
                onChange={handleChange}
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
                id="bathrooms"
                name="bathrooms"
                placeholder="No. of Bathrooms"
                value={apartmentToUpdate.bathrooms}
                onChange={handleChange}
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
                id="bedrooms"
                name="bedrooms"
                placeholder="No. of Bedrooms"
                value={apartmentToUpdate.bedrooms}
                onChange={handleChange}
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
                id="beds"
                name="beds"
                placeholder="No. of Beds"
                value={apartmentToUpdate.beds}
                onChange={handleChange}
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
                id="price"
                name="price"
                placeholder="Price per night"
                value={apartmentToUpdate.price}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="host_name">Host Name</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                id="host_name"
                name="host_name"
                placeholder="Host Name"
                value={apartmentToUpdate.host_name}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="host_about">Host About</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                id="host_about"
                name="host_about"
                placeholder="Tell us about yourself"
                value={apartmentToUpdate.host_about}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="host_thumbnail_url">Host Thumbnail Url</label>
            </div>
            <div className="col-field">
              <input
                type="text"
                id="host_thumbnail_url"
                name="host_thumbnail_url"
                placeholder="Host Thumbnail Url"
                value={apartmentToUpdate.host_thumbnail_url}
                onChange={handleChange}
                className="field"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-label">
              <label htmlFor="review_scores_rating">Review Scores Rating</label>
            </div>
            <div className="col-field">
              <input
                type="number"
                id="review_scores_rating"
                name="review_scores_rating"
                placeholder="Review Scores Rating"
                value={apartmentToUpdate.review_scores_rating}
                onChange={handleChange}
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
