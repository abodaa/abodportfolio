import React, { PureComponent } from "react";
// import Sidebar from "./Sidebar";
import "../styles/projects.scss";
import projectOne from "../images/Lekuluent.png";
import projectTwo from "../images/Limad.png";
import projectThree from "../images/Akkoo.png";

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
              <p className="project-techs">Express</p>
              <p className="project-techs">React</p>
              <p className="project-techs">MongoDB</p>
              <p className="project-techs">Tailwind CSS</p>
            </div>
            <div className="links">
              <a
                href="https://lekulumovies.netlify.app"
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
          <a target="blank" href="https://lekulumovies.netlify.app">
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
              and vanilla CSS. A simple full stack web app that is great to
              track your progress and stay motivated on your habits journey.
            </p>
            <div className="techs">
              <p className="project-techs">Express</p>
              <p className="project-techs">React</p>
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

      {/* Project Three */}
      <div className="projects-container">
        <div className="project-one">
          <div className="project-description-container">
            <div>
              <p className="featured">Recreated</p>
              <h2 className="project-title">Akkoo Coffee</h2>
              <h3 className="project-subtitle">
                Redesign and revamp of Akkoo Coffee's website
              </h3>
            </div>
            <p className="project-description">
              AKkoo coffe is a well-known Ethiopian restaurant and coffee shop.
              This project is simply a redesign of their existing website.
              React, Tailwind, and Framer motion were used to create a modern UI
              and UX. It is more akin to a restaurant landing page, with some
              functions limited. If further features are required in the future,
              they will be simple to add.
            </p>
            <div className="techs">
              <p className="project-techs">React</p>
              <p className="project-techs">Tailwind</p>
              <p className="project-techs">Framer Motion</p>
            </div>
            <div className="links">
              <a
                href="https://akkoocoffee.netlify.app"
                target="blank"
                className="project-links"
              >
                <BiLinkExternal style={{ textDecoration: "none" }} />
              </a>
              <a
                href="https://github.com/abodaa/akkooCoffee"
                target="blank"
                className="project-links"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="project-image-container">
          <a target="blank" href="https://akkoocoffee.netlify.app">
            <img src={projectThree} className="project-img" />
          </a>
        </div>
      </div>
    </div>
  );
}
