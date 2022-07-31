import React, { PureComponent } from "react";
import Sidebar from "./Sidebar";
import "../styles/about.scss";
import me from "../images/me4.jfif";
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
      color={"#ffffff"}
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
          Hello! My name is <em>ABRAHAM</em> and I enjoy creating things that
          live on the internet. My interest in web development started back in
          2018 when I decided to build a simple website using Wordpress for an
          imaginary company. I was working as a freelance Web Developer for the
          past few years, building and Designing websites for some clients. My
          main tools for web development back then were popular open-source CMS
          like (WordPress, Drupal, Magento, Keystone.js and others). Lately I
          decided to become a Full Stack Web Developer and started the journey
          exploring about the full stack Web Developement technologies and
          trends,so I started learning the most relevant and valuable subjects.
          I believe participating on any related projects will make me a good
          contributor to the overall project's success as I am a fast learner on
          the other hands benefits myself to learn from it.
        </p>
        <img src={me} alt="mypic" />
      </div>
      <div className="about-buttons">
        <a href="#" target="blank" className="about-button-one">
          <BsDownload style={{ color: "white" }} />
          download my CV
        </a>
      </div>
    </div>
  );
}
