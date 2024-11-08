import React from "react";
import { Link } from "react-router-dom";
import gitHubLogo from "../assets/GitHub-logo.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h3>
        Nest & Rest was developed to search an apartment for the destination
      </h3>
      <div className="about-user">
        <h4>Neha Sinha</h4>
        <Link to="https://github.com/nehais/apartment-rental">
          <img src={gitHubLogo} alt="Git Hub Logo" className="git-logo"></img>
        </Link>
      </div>
      <div className="about-user">
        <h4>Teresa</h4>
        <Link to="https://github.com/nehais/apartment-rental">
          <img src={gitHubLogo} alt="Git Hub Logo" className="git-logo"></img>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
