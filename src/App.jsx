import "./App.css";

import ApartmentListings from "./assets/listings.json";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import PageNotFound from "./components/PageNotFound";
import RentalDetails from "./components/RentalDetails";
import AddNewListing from "./components//AddNewListing";
import Favourite from "./components//Favourite";
import UpdateListing from "./components//UpdateListing";
import AboutUs from "./components/AboutUs";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

function App() {
  const [apartList, setApartList] = useState(ApartmentListings);
  const [modifiedID, setModifiedID] = useState(0);
  const [ascSort, setAscSort] = useState(true);

  return (
    <div className="App">
      <Navbar />
      <Toolbar />
      <div className="content">
        <Sidebar />

        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                apartList={apartList}
                setApartList={setApartList}
                modifiedID={modifiedID}
                ascSort={ascSort}
                setAscSort={setAscSort}
              />
            }
          />

          <Route
            path="/rentalDetails/:apartmentId"
            element={<RentalDetails apartList={apartList} />}
          />
          <Route
            path="/addNewListing"
            element={
              <AddNewListing
                apartList={apartList}
                setApartList={setApartList}
                setModifiedID={setModifiedID}
              />
            }
          />
          <Route
            path="/favourite"
            element={<Favourite apartList={apartList} />}
          />
          <Route
            path="/updateListing/:apartmentId"
            element={
              <UpdateListing
                apartList={apartList}
                setApartList={setApartList}
                setModifiedID={setModifiedID}
              />
            }
          />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
