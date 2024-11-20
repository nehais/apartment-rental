const DeleteButton = ({ id, apartList, setApartList, setDeleteMessage }) => {
  function deleteRental() {
    let deletedApartment = apartList.filter((apartment) => {
      return apartment.id !== id;
    });

    setApartList(deletedApartment);
    setDeleteMessage("Apartment Deleted");

    const msgHideTime = setTimeout(() => {
      setDeleteMessage("");
    }, 2000);
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
