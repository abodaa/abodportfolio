import React, { PureComponent } from "react";
import Sidebar from "./Sidebar";
import "../styles/about.scss";
import me from "../images/profile.png";
import { NavLink } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import {
  BsDownload,
  BsArrowRightCircle,
  BsArrowLeftCircle,
} from "react-icons/bs";

export default function About() {
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
    <div className="about-page-container">
      <>
        <p className="about-bg">ABOUT</p>
        <h1 className="about-header">about me</h1>
        <div className="about-header-devider"></div>
      </>
      <div className="about-description-image">
        <p className="about-description">
          Hello 👋... My name is ABRAHAM, and I like making things that are
          accessible online. In 2018, I first became interested in web
          development when I chose to use Wordpress to create a straightforward
          website for a fictional business. For the past few years, I have
          worked as a freelance web developer, creating and designing websites
          for various clients. Back then, well-known open-source content
          management systems (CMS) such (WordPress, Drupal, Magento, and others)
          were my tools. Recently, I made the decision to pursue a career as a
          full stack web developer. I set out to learn about the latest full
          stack web development trends and technologies, so I began studying the
          courses that would be most useful to me. Since I am a quick learner, I
          think that taking part in any relevant projects will make me a
          valuable contributor to the success of the project. On the other hand,
          I will profit personally by learning from it.
        </p>
        <img src={me} alt="mypic" />
      </div>
      <div className="about-buttons">
        <a
          href="https://drive.google.com/file/d/1jsxOABOtxseBwsOQxQvxu0eQ74WXHXlO/view?usp=sharing"
          target="blank"
          className="about-button-one"
        >
          <BsDownload style={{ color: "white" }} />
          download my CV
        </a>
      </div>
    </div>
  );
}
