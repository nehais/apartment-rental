import "../styles/Footer.css";

import { Link } from "react-router-dom";
import gitHubLogo from "../assets/GitHub-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="https://github.com/nehais/apartment-rental">
        <img src={gitHubLogo} alt="Git Hub Logo" className="git-logo"></img>
      </Link>
    </div>
  );
};

export default Footer;
