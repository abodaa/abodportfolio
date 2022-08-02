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
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { useTransition, animated } from "react-spring";

export default function Mobilemenu() {
  var [show, setShow] = React.useState(false);

  const transitions = useTransition(show, {
    from: { x: 100, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 0, opacity: 0 },
    // reverse: show,
    // delay: 200,
    // onRest: () => set(!show),
  });

  return (
    <nav className="navvv">
      {!show && (
        <span className="mobile-menu-icon" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </span>
      )}
      {show && (
        <span className="mobile-menu-icon" onClick={() => setShow(!show)}>
          <AiOutlineCloseCircle />
        </span>
      )}
      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <div
                className="mobile-menu-dropdown-container"
                onClick={() => setShow(!show)}
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/"
                  className="mobile-menu"
                >
                  <TiHomeOutline className="sidebar-icon" />
                  <p>Home</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/About"
                  className="mobile-menu"
                >
                  <BsInfoSquare className="sidebar-icon" />
                  <p>About Me</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/Skills"
                  className="mobile-menu"
                >
                  <GiSkills className="sidebar-icon" />
                  <p>Skills</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/Projects"
                  className="mobile-menu"
                >
                  <FiGrid className="sidebar-icon" />
                  <p>Projects</p>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/Contact"
                  className="mobile-menu"
                >
                  <RiContactsFill className="sidebar-icon" />
                  <p>Contact Me</p>
                </NavLink>
                <a
                  href="https://drive.google.com/file/d/1dTm9fO6Q_pEc7jIOMGok9tcpda69ITzS/view"
                  target="blank"
                  className="mobile-resume"
                >
                  Resume
                </a>
              </div>
            </animated.div>
          )
      )}
    </nav>
  );
}
