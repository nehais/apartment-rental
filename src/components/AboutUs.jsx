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
        <h4 className="about-user-name">Neha Sinha</h4>
        <Link to="https://github.com/nehais/">
          <img
            src={gitHubLogo}
            alt="Git Hub Logo"
            className="abt-git-logo"
          ></img>
        </Link>
        <Link to="https://linkedin.com/in/neha-builds">
          <img src={linkedInLogo} alt="Git Hub Logo" className="in-logo"></img>
        </Link>
      </div>
      <div className="about-user">
        <h4 className="about-user-name">Teresa García</h4>
        <Link to="https://github.com/teresagarcia1985">
          <img
            src={gitHubLogo}
            alt="Git Hub Logo"
            className="abt-git-logo"
          ></img>
        </Link>
        <Link to="https://linkedin.com/in/teresa-garcia-16abb970/">
          <img src={linkedInLogo} alt="Git Hub Logo" className="in-logo"></img>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
