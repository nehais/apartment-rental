const EditButton = ({ id, apartList, setApartList }) => {
  function editRental() {
    console.log("Edit Clicked");
  }

  return (
    <div
      className="edit-button"
      onClick={() => {
        editRental();
      }}
    ></div>
  );
};

export default EditButton;
