import React, { PureComponent } from "react";
// import Sidebar from "./Sidebar";
import "../styles/projects.scss";
import projectOne from "../images/project1.PNG";
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
      color={"#ffffff"}
      loading={loading}
    />
  ) : (
    <div className="projects-page-container">
      <h1 className="projects-header">some things I've built</h1>
      <div className="projects-header-devider"></div>
      <p className="projects-page-description">
        Here are a few past development projects I've worked on. Want to see
        more? I am working on some cool projects and this page will be filled
        with all my latest and awesome project portfolios
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
              <h2 className="project-title">Abod Movies</h2>
              <h3 className="project-subtitle">A Movie Streaming Website</h3>
            </div>
            <p className="project-description">
              Fully functional Movie streaming website built with React, TMDB
              API and a third party movie streaming provider server
            </p>
            <div className="techs">
              <p href="#" className="project-techs">
                React
              </p>
              <p href="#" className="project-techs">
                TMDB API
              </p>
              <p href="#" className="project-techs">
                CSS
              </p>
              <p href="#" className="project-techs">
                Vanilla JS
              </p>
              <a href="#" className="project-links">
                <a
                  href="https://abresh-movies.netlify.app/"
                  target="blank"
                  className="quick-view"
                >
                  Visit Now
                </a>
              </a>
            </div>
            <div className="links">
              <a
                href="https://abresh-movies.netlify.app/"
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
              <h2 className="project-title">Coming Soon</h2>
              <h3 className="project-subtitle">On Going Project</h3>
            </div>
            <p className="project-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quod
              architecto facilis! Ratione dolor.
            </p>
            <div className="techs">
              <p href="#" className="project-techs">
                React
              </p>
              <p href="#" className="project-techs">
                API
              </p>
              <p href="#" className="project-techs">
                SASS
              </p>
              <p href="#" className="project-techs">
                Vanilla JS
              </p>
              <a href="#" className="project-links">
                <p className="quick-view">Quick View</p>
              </a>
            </div>
            <div className="links">
              <a href="#" className="project-links">
                <BiLinkExternal style={{ textDecoration: "none" }} />
              </a>
              <a href="#" target="blank" className="project-links">
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
