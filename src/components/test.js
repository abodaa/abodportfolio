import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mobilemenu from "./components/Mobilemenu";
import Mobilenavbar from "./components/Mobilenavbar";
import Movies from "./components/Movies";
import Tvshows from "./components/Tvshows";
import Watchlist from "./components/Watchlist";
import Favorites from "./components/Favorites";
import Moviedetailpage from "./components/Moviedetailpage";
import Tvdetailpageone from "./components/Tvdetailpageone";
import Tvdetailpagetwo from "./components/Tvdetailpagetwo";
import Episodes from "./components/Episodes";
import Searchbar from "./components/Searchresult";
import Footer from "./components/Footer";

import { CSSTransition } from "react-transition-group";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Sidebar />
        <Mobilemenu />
        <Mobilenavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Search" element={<Searchbar />} /> */}
          <Route path="/movies" element={<Movies />} />
          <Route path="/TVshows" element={<Tvshows />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movies/:id" element={<Moviedetailpage />} />
          <Route path="/TVshows/:id" element={<Tvdetailpageone />} />
          <Route path="/TVshows/:id/:id" element={<Tvdetailpageone />} />

          {/* <Route path="/Tvdetailpageone/:id/:seasonnum" element={<Tvdetailpagetwo />} />
          <Route path="/Tvdetailpageone/:id/:id/:seasonnum" element={<Tvdetailpagetwo />} /> */}

          {/* <Route path="/TVshows/:id/:id/:seasonnum" element={<Tvdetailpagetwo />} /> */}
          <Route
            path="/Tvdetailpageone/:id/:seasonnum"
            element={<Tvdetailpagetwo />}
          />
          <Route
            path="/Tvdetailpageone/:id/:seasonnum/:episodenum"
            element={<Episodes />}
          />

          <Route path="/movies/:id/:id" element={<Moviedetailpage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
