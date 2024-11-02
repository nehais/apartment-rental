import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="notfound">
      <img src="./src/assets/page-not-found.png" />
      <h3>Uh-oh! Looks like this page went on a vacation</h3>
      <Link to="/pagenotfound"></Link>
    </div>
  );
};

export default PageNotFound;
