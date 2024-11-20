import "../styles/Toolbar.css";
import HomeIcon from "../assets/home.png";
import AddIcon from "../assets/add.png";
import AboutIcon from "../assets/about.png";
import FavouriteIcon from "../assets/favourite.png";

import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <Link to="/" className="toolbar-menu">
        <div>
          <img src={HomeIcon} alt="Home Icon" className="toolbar-icon" />
        </div>
        <span>Home</span>
      </Link>
      <Link to="/addNewListing" className="toolbar-menu">
        <div>
          <img src={AddIcon} alt="Add Icon" className="toolbar-icon" />
        </div>
        <span>Add your Nest</span>
      </Link>
      <Link to="/favourite" className="toolbar-menu">
        <div>
          <img
            src={FavouriteIcon}
            alt="Favourite Icon"
            className="toolbar-icon"
          />
        </div>
        <span>Favourite Nests</span>
      </Link>
      <Link to="/aboutUs" className="toolbar-menu">
        <div>
          <img src={AboutIcon} alt="About Icon" className="toolbar-icon" />
        </div>
        <span>About</span>
      </Link>
    </div>
  );
};

export default Toolbar;
