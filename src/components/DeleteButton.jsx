const DeleteButton = ({ id, apartList, setApartList }) => {
  function deleteRental() {
    let deletedApartment = apartList.filter((apartment) => {
      return apartment.id !== id;
    });
    setApartList(deletedApartment);
  }

  return (
    <div
      className="delete-button"
      onClick={() => {
        deleteRental();
      }}
    ></div>
  );
};

export default DeleteButton;
