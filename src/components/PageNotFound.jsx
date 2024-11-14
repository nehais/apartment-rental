import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../assets/page-not-found.png";

const PageNotFound = () => {
  return (
    <div className="notfound">
      <img src={pageNotFound} />
      <h3>Uh-oh! Looks like this page went on a vacation.</h3>
      <Link to="/" id="back-home">
        Take me Home
      </Link>
    </div>
  );
};

export default PageNotFound;
