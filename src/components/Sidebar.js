import React from "react";
import "../styles/sidebar.scss";
import { BsInfoSquare } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { GrProjects, GrContact, GrHomeRounded } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import { FiGrid } from "react-icons/fi";
import logo from "../images/Abod-Logo.png";
import { BsBoxArrowDown } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { BsSun } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";


import { useSpring, animated } from "react-spring";

import { NavLink } from "react-router-dom";
export default function Sidebar() {
  const [show, setShow] = React.useState(false);


 




  // function toggle() {
  //   setShow((prevState) => !prevState);
  //   console.log(show);
  // }

  return (
    <>
      <div className="sidebar-page-container-main">
        {/* <img src={logo} alt="" className="sidebar-logo" /> */}
        <a className="sidebar-logo" href="/">Abraham B.</a>

        <div className="sidebar-page-container">
          <div className="sidebar-menu-items">
            <NavLink
              style={{ textDecoration: "none" }}
              to="/"
              className="sidebar-menu"
            >
              <TiHomeOutline
                style={{ textDecoration: "none" }}
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

            <a href="#" target="blank" className="resume">
              Resume
            </a>
          </div>
        </div>
       
      </div>
     
     
    </>
  );
}
