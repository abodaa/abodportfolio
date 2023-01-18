import React, { PureComponent } from "react";
// import Sidebar from "./Sidebar";
import "../styles/projects.scss";
import projectOne from "../images/Proj.png";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

import data from "../data.js";

export default function Project() {
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
    <div className="projects-page-container">
      <h1 className="projects-header">some things I've built</h1>
      <div className="projects-header-devider"></div>
      <p className="projects-page-description">
        I've worked on the following development project in the past. Wish to
        see more? I'm working on some excellent projects, and this page will
        feature all of my most recent and fantastic project portfolios.
      </p>

      <div className="projects-container">
        <div className="project-one">
          {/* <iframe
            className="project-iframe"
            src="https://abresh-movies.netlify.app/"
            frameborder="0"
          ></iframe> */}
          {/* <img src={projectOne} className="project-img" /> */}
          <div className="project-description-container">
            <div>
              <p className="featured">Featured Project</p>
              <h2 className="project-title">Lekulu Entertainment</h2>
              <h3 className="project-subtitle">A Movie Streaming Website</h3>
            </div>
            <p className="project-description">
              Fully operational movie streaming website created using React, the
              TMDB API, and a server from a different movie streaming service
              provider
            </p>
            <div className="techs">
              <p href="#" className="project-techs">
                ReactJs
              </p>

              <p href="#" className="project-techs">
                Vanilla CSS
              </p>
              <p href="#" className="project-techs">
                TMDB API
              </p>

              <a href="#" className="project-links">
                <a
                  href="https://lekuluent.com"
                  target="blank"
                  className="quick-view"
                >
                  Visit Now
                </a>
              </a>
            </div>
            <div className="links">
              <a
                href="https://lekuluent.com"
                target="blank"
                className="project-links"
              >
                <BiLinkExternal style={{ textDecoration: "none" }} />
              </a>
              <a
                href="https://github.com/abodaa"
                target="blank"
                className="project-links"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="project-image-container">
          <a target= "blank" href="https://lekuluent.com">
            <img src={projectOne} className="project-img" />
          </a>
        </div>
      </div>
    </div>
  );
}
