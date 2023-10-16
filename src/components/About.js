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
          Hello 👋... I'm ABRAHAM, and I enjoy creating stuff that can be found
          online. I originally developed an interest in web development in 2018
          when I decided to use Wordpress to build a simple website for a
          made-up company. I've been a freelance web developer for the past few
          years, building and designing websites for various clients. I used
          popular open-source content management systems (CMS) at that time,
          including WordPress, Drupal, Magento, and others. I have learned and
          earned the exeperience working with the technologies in the
          MERN stack: MongoDB, ExpressJs, ReactJs and NodeJs in addition to the
          basic frontend technologies such as HTML, CSS, and JavaScript. I
          believe that participating in any relevant projects will make me a
          meaningful contributor to the project's success because I am a quick
          learner. On the other side, by learning from it, I will benefit
          personally.🙂
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
