import React from "react";
import "../styles/homeoriginal.scss";
import { NavLink } from "react-router-dom";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import HashLoader from "react-spinners/HashLoader";

export default function Homeoriginal() {
  const hour = new Date().getHours();

  const greetings = ["Good Morning", "Good Afternoon", "Good Evening"];
  let greetingText = "";

  if (hour < 12) {
    greetingText = greetings[0];
  } else if (hour < 18) {
    greetingText = greetings[1];
  } else {
    greetingText = greetings[2];
  }
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
    <div className="home-original-page-container">
      <h1 className="home-original-bg">HOME</h1>
      <div className="home-original-container-elements">
        <div className="home-original-container-intros">
          <h1 className="home-original-intro-greeting">{greetingText},</h1>
          <h1 className="home-original-name-intro">I'm Abraham</h1>
          <h2 className="home-original-profission-intro">
            Web Developer from <span>Ethiopia</span>
          </h2>
        </div>
      </div>

      {/* <div> */}
      <p className="home-original-self-introduction">
        A disciplined tech enthusiast who is motivated to integrate the art of
        design with the art of programming. Having B.Sc. in Electrical and
        Computer Engineering (Computer Engineering specialization),I have
        considerable years of experience as a frontend web developer and
        software tester. I am always on self-teaching process to advance my tech
        stack and acquire more knowledge and experience.
      </p>

      <div className="home-original-buttons">
        <NavLink style={{ textDecoration: "none" }} to="/contact">
          <button className="home-original-button-one">Contact Me</button>
        </NavLink>
        <a
          className="home-original-button-two"
          href="https://www.linkedin.com/in/abraham-bogale?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPNOnQVI1R6e9dz362NhwOA%3D%3D"
          target="blank"
        >
          Know Me Better
        </a>
      </div>
      {/* </div> */}
    </div>
  );
}
