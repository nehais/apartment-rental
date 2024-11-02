import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/"> Home </Link>
      <Link to="/aboutus"> About </Link>
    </div>
  );
};

export default Sidebar;
