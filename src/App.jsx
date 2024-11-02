import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";
import RentalCard from "./components/RentalCard";
import RentalDetails from "./components/RentalDetails";

import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Sidebar />

        <Routes>
          <Route path="/" element={<MainContent />} />

          <Route path="/rentaldetails" element={<RentalDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
