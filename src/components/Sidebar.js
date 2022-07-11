import React from "react";
import "../styles/sidebar.scss";
import { BsInfoSquare } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { GrProjects, GrContact, GrHomeRounded } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import { FiGrid } from "react-icons/fi";
import logo from "../images/logo.png";
import { BsBoxArrowDown } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { BsSun } from "react-icons/bs";


import { NavLink } from "react-router-dom";
export default function Sidebar() {

const [light, setLight] = React.useState(false)
function toggle(){
  setLight(prevState => !prevState)
}

  return (
    <div className="sidebar-page-container">
      <img src={logo} alt="logo" />
       
        <div className="sidebar-menu-items">
          <NavLink
            style={{ textDecoration: "none" }}
            to="/"
            className="sidebar-menu"
          >
            <TiHomeOutline
              style={{ fontSize: "1.6rem" }}
              className="sidebar-icon"
            />
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/About"
            className="sidebar-menu"
          >
            <BsInfoSquare className="sidebar-icon" />
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/Skills"
            className="sidebar-menu"
          >
            <GiSkills className="sidebar-icon" />
          </NavLink>

          <NavLink
            style={{ textDecoration: "none" }}
            to="/Projects"
            className="sidebar-menu"
          >
            <FiGrid className="sidebar-icon" />
          </NavLink>
          <NavLink
            style={{ textDecoration: "none" }}
            to="/Contact"
            className="sidebar-menu"
          >
            <RiContactsFill className="sidebar-icon" />
          </NavLink>

          {!light && (
            <MdOutlineDarkMode
              onClick={toggle}
              className="sidebar-night-mode"
            />
          )}
          {light && <BsSun onClick={toggle} className="sidebar-night-mode" />}

          <div className="sidebar-scroll">
            <BsBoxArrowDown />
            <p>Scroll</p>
          </div>
        </div>
      
    </div>
  );
}
