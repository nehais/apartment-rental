import "../styles/HomePage.css";

import Footer from "./Footer";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <MainContent/>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
