const DeleteButton = ({id, apartList, setApartList}) => {

  function deleteRental(){
    console.log('Delete Clicked');

    let deletedApartment = apartList.filter((apartment)=>{
      return apartment.id !== id;
    })
    setApartList(deletedApartment);
  }

  return (
    <div className="delete-button" onClick={()=>{deleteRental()}}></div>
  )
}

export default DeleteButton