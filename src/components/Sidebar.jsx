import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/"> Home </Link>
      <Link to="/aboutUs"> About </Link>
      <Link to="/addNewListing">Add New Listing</Link>
    </div>
  );
};

export default Sidebar;
