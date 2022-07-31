import React from "react";
import "../styles/home.scss";
import Sidebar from "./Sidebar";

export default function Home() {
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

  return (
    <div className="home-container">
      <h1 className="home-bg">HOME</h1>
      <div className="home-container-elements">
        <div className="home-container-intros">
          <h1 className="home-intro-greeting">Hello,</h1>
          <h1 className="home-name-intro">I'm Abraham,</h1>
          <h2 className="home-profission-intro">
            Web Developer from <span>Ethiopia</span>
          </h2>
        </div>
      </div>

      <div className="home-self-introduction">
        <p>
          Disciplined and tech enthusiastic person, who is motivated to combine
          the art of design with the art of programming. With Bsc in Electrical
          and Computer Engineering (Computer Engineering specialization) I have
          a considerable years of experience as a frontend web developer and
          software tester. I am always learning new skills to be the
          professional who I want to become.
        </p>
        <div className="home-buttons">
          <button className="home-button-one">Contact Me</button>
          <button className="home-button-two">Know Me Better</button>
        </div>
      </div>
    </div>
  );
}
