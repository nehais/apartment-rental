import "../styles/Sidebar.css";
import HomeIcon from "../assets/home.png";
import AddIcon from "../assets/add.png";
import AboutIcon from "../assets/about.png";
import FavouriteIcon from "../assets/favourite.png";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-menu">
        <div>
          <img src={HomeIcon} alt="Home Icon" className="sidebar-icon" />
        </div>
        <span>Home</span>
      </Link>
      <Link to="/addNewListing" className="sidebar-menu">
        <div>
          <img src={AddIcon} alt="Add Icon" className="sidebar-icon" />
        </div>
        <span>Add your Nest</span>
      </Link>
      <Link to="/favourite" className="sidebar-menu">
        <div>
          <img
            src={FavouriteIcon}
            alt="Favourite Icon"
            className="sidebar-icon"
          />
        </div>
        <span>Favourite Nests</span>
      </Link>
      <Link to="/aboutUs" className="sidebar-menu">
        <div>
          <img src={AboutIcon} alt="About Icon" className="sidebar-icon" />
        </div>
        <span>About</span>
      </Link>
    </div>
  );
};

export default Sidebar;
