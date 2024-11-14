import "../styles/Navbar.css";

import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Apartment Rental Logo" className="app-logo"></img>
      <span> Nest & Rest</span>
    </div>
  );
};

export default Navbar;
