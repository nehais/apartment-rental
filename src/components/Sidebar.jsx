import { Link } from "react-router-dom";
import AddNewListing from "./AddNewListing";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/"> Home </Link>
      <Link to="/aboutUs"> About </Link>
      <AddNewListing />
    </div>
  );
};

export default Sidebar;
