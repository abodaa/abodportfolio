import React, { PureComponent } from "react";
// import Sidebar from "./Sidebar";
import "../styles/projects.scss";
import projectOne from "../images/Proj.png";
import projectTwo from "../images/Proj2.png";

import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
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
      <div>
        <h1 className="projects-header">some things I've built</h1>
        <div className="projects-header-devider"></div>
        <p className="projects-page-description">
          I've worked on the following development project in the past. Wish to
          see more? I'm working on some excellent projects, and this page will
          feature all of my most recent and fantastic project portfolios.
        </p>
      </div>

      {/* Project One */}
      <div className="projects-container">
        <div className="project-one">
          <div className="project-description-container">
            <div>
              <p className="featured">Featured Project</p>
              <h2 className="project-title">Lekulu Entertainment</h2>
              <h3 className="project-subtitle">A movie streaming web app</h3>
            </div>
            <p className="project-description">
              Lekuluent.com is a streaming service that provides access to a
              large range of Tv-shows, Movies, Documentaries, and other contents
              on different platforms. Fully functional movie streaming website
              built with ReactJs, ExpressJs, MongoDB, TMDB API, and a different
              movie streaming service provider's server.
            </p>
            <div className="techs">
              <p className="project-techs">ExpressJs</p>

              <p className="project-techs">ReactJs</p>
              <p className="project-techs">MongoDB</p>
              <p className="project-techs">CSS</p>
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
          <a target="blank" href="https://lekuluent.com">
            <img src={projectOne} className="project-img" />
          </a>
        </div>
      </div>

      {/* Project two */}
      <div className="projects-container">
        <div className="project-image-container">
          <a target="blank" href="https://limad.netlify.app">
            <img src={projectTwo} className="project-img" />
          </a>
        </div>
        <div className="project-one">
          <div className="project-description-container">
            <div>
              <p className="featured">Learning Project</p>
              <h2 className="project-title">Limad | ልማድ</h2>
              <h3 className="project-subtitle">Habits tracking web app</h3>
            </div>
            <p className="project-description">
              A habits tracker web app built with ExpressJs, MongoDB, ReactJs,
              and vanilla CSS. A simple full stack web app that is great to track
              your progress and stay motivated on your habits journey.
            </p>
            <div className="techs">
              <p className="project-techs">ExpressJs</p>
              <p className="project-techs">ReactJs</p>
              <p className="project-techs">MongoDB</p>
              <p className="project-techs">CSS</p>
            </div>
            <div className="links">
              <a
                href="https://limad.netlify.app"
                target="blank"
                className="project-links"
              >
                <BiLinkExternal style={{ textDecoration: "none" }} />
              </a>
              <a
                href="https://github.com/abodaa/Limad-habits-tracker-API.git"
                target="blank"
                className="project-links"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
