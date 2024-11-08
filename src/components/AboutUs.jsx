import React from "react";
import { Link } from "react-router-dom";
import gitHubLogo from "../assets/GitHub-logo.png";
import linkedInLogo from "../assets/LinkedIn-logo.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <p>
        <b>Nest & Rest:</b> Your one-stop destination for finding the perfect
        apartment, tailored to your travel needs! <br />
        Built by:
      </p>
      <div className="about-user">
        <h4>Neha Sinha</h4>
        <Link to="https://github.com/nehais/">
          <img src={gitHubLogo} alt="Git Hub Logo" className="git-logo"></img>
        </Link>
        <Link to="https://linkedin.com/in/neha-builds">
          <img src={linkedInLogo} alt="Git Hub Logo" className="in-logo"></img>
        </Link>
      </div>
      <div className="about-user">
        <h4>Teresa</h4>
        <Link to="https://github.com/nehais/apartment-rental">
          <img src={gitHubLogo} alt="Git Hub Logo" className="git-logo"></img>
        </Link>
        <Link to="https://linkedin.com/in/neha-builds">
          <img src={linkedInLogo} alt="Git Hub Logo" className="in-logo"></img>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
