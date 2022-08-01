import React, { PureComponent } from "react";
import Sidebar from "./Sidebar";
import "../styles/skills.scss";
import me from "../images/me3.png";
import {
  BsDownload,
  BsArrowRightCircle,
  BsArrowLeftCircle,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

export default function Skills() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <HashLoader
      className="loader"
      size={150}
      color={"#0a192f"}
      loading={loading}
    />
  ) : (
    <div className="skills-page-container">
      <p className="skills-bg">SKILLS</p>
      <h1 className="skills-header">skills & experience</h1>
      <div className="skills-header-devider"></div>
      <div className="skills-description-bar">
        <p className="skills-description">
          Since beginning my journey as a freelance developer nearly 4 years
          ago, I’ve done freelance work for people. I create successful
          responsive websites that are fast, easy to use, and built with best
          practices. The main area of my expertise is front-end development,
          HTML, CSS, JS, React, building small and medium web apps, features,
          animations, and coding interactive layouts. I also have full-stack
          developer experience with popular open-source CMS like (WordPress,
          Joomla and others) . Visit my{" "}
          <a
            target="blank"
            href="https://www.linkedin.com/in/abraham-bogale?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BufZJhWL%2BREetHf9o4QQjSA%3D%3D"
          >
            LinkedIn profile
          </a>{" "}
          for more details or just contact me.
        </p>
        <div className="skills-bar-experience-box">
          <div className="skills-bar-container">
            <div className="skills-bar">
              <p className="skills-bar-title">HTML / HTML5</p>
              <div className="skills-bar-one"></div>
            </div>
            <div className="skills-bar">
              <p className="skills-bar-title">CSS / CSS3</p>
              <div className="skills-bar-two"></div>
            </div>
            <div className="skills-bar">
              <p className="skills-bar-title">JavaScript</p>
              <div className="skills-bar-three"></div>
            </div>
            <div className="skills-bar">
              <p className="skills-bar-title">React</p>
              <div className="skills-bar-four"></div>
            </div>
            <div className="skills-bar">
              <p className="skills-bar-title">CMS (Wordpress / Joomla)</p>
              <div className="skills-bar-five"></div>
            </div>
          </div>
          <div className="experience-box">
            <div className="skills-experience">
              <h3 className="experience-one-title">QA Engineer</h3>
              <p className="experience-one-subtitle">
                {" "}
                Safaricom Telecommunications Ethiopia
              </p>
              <p className="experience-one-subtitle">May 2022 - Now</p>
              <p className="experience-one-subtitle">
                Test case execution and bug reproduction, Issue tracking and
                recording on ALM supported by brief description and screenshots,
                Ticket follow up and status update.
              </p>
            </div>
            <div className="skills-experience">
              <h3 className="experience-one-title">Freelance Web Developer</h3>
              <p className="experience-one-subtitle"> Addis Ababa, Ethiopia</p>
              <p className="experience-one-subtitle">July 2018 - May 2022</p>
              <p className="experience-one-description">
                Designing and developing web using latest web development tools
                and technologies. Mainly using CMS I have developed my skills to
                become a professional frontend developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
