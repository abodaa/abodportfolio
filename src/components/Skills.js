import React, { PureComponent } from "react";
import Sidebar from "./Sidebar";
import "../styles/skills.scss";
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
          Web Developer with a proven track record of delivering high-performing
          and reliable MERN applications, combined with a solid background in
          unit and manual testing, provide a deep understanding of the software
          development life cycle and the ability to quickly identify and resolve
          potential issues. Skilled at creating efficient bug reports and
          leading teams of QA engineers to ensure all quality processes are met.
          Valuable asset to any development team, committed to delivering
          high-quality software. Please visit my {" "}
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
              <p className="skills-bar-title">Node Js</p>
              <div className="skills-bar-seven"></div>
            </div>
            <div className="skills-bar">
              <p className="skills-bar-title">CMS (Wordpress / Joomla)</p>
              <div className="skills-bar-five"></div>
            </div>
            <div className="skills-bar">
              <p className="skills-bar-title">QA(Software Quality Assurance)</p>
              <div className="skills-bar-six"></div>
            </div>
          </div>
          <div className="experience-box">
            <div className="skills-experience">
              <h3 className="experience-one-title">QA Engineer</h3>
              <p className="experience-one-time">
                {" "}
                Safaricom Telecommunications Ethiopia
              </p>
              <p className="experience-one-time">May 2022 - Present</p>
              <p className="experience-one-subtitle">
                Developing web and mobile system test cases, validating them,
                translating them into other local languages, allocating them to
                the testing team, executing the tests, creating and reproducing
                defects and bugs, reporting on defect status, running sanity and
                regression tests, assisting with UAT test plan preparation,
                delivering daily test report to management, understanding the
                software development life cycle, being familiar with software
                testing methods and tools, and having effective teamwork
                techniques.
              </p>
            </div>
            <div className="skills-experience">
              <h3 className="experience-one-title">Freelance Web Developer</h3>
              <p className="experience-one-time"> Addis Ababa, Ethiopia</p>
              <p className="experience-one-time">July 2018 - May 2022</p>
              <p className="experience-one-subtitle">
                Creating custom websites for clients based on their
                specifications and requirements. Utilizing ReactJS, JavaScript,
                HTML, and CSS to create visually appealing and user-friendly
                websites, as well as CMS such as WordPress and Joomla for
                maintenance. Throughout the development process, I effectively
                communicated with my clients to make sure that they were
                satisfied with the end product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
