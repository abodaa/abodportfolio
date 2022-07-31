import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import Homeoriginal from "./components/Homeoriginal";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Sticky from "./components/Sticky";
import Mobilemenu from "./components/Mobilemenu";

import './styles/page.scss';



import "./styles/page.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="page-container">
      <div className="shape-one"></div>
      <div className="shape-two"></div>
      <div className="shape-three"></div>
      <div class="gooey"></div>
      <BrowserRouter>
        <Sidebar />
        <Mobilemenu />
        <Routes>
          <Route path="/" element={<Homeoriginal />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Sticky />
      </BrowserRouter>
    </div>
  );
}
