import "./App.css";

import ApartmentListings from "./assets/listings.json";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import PageNotFound from "./components/PageNotFound";
import RentalDetails from "./components/RentalDetails";
import AddNewListing from "./components//AddNewListing";
import AboutUs from "./components/AboutUs";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [apartList, setApartList] = useState(ApartmentListings);

  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={
              <MainContent apartList={apartList} setApartList={setApartList} />
            }
          />

          <Route
            path="/rentalDetails/:apartmentId"
            element={<RentalDetails apartList={apartList} />}
          />
          <Route path="/addNewListing" element={<AddNewListing />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
