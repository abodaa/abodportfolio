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
          high-quality software. Please visit my{" "}
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
                Safaricom Telecommunications Ethiopia, M-PESA project
              </p>
              <p className="experience-one-time">May 2022 - Present</p>
              <div className="experience-one-subtitle">
                <li>
                  Leading Business Apps testing team
                </li>
                <li>API testing using Postman</li>
                <li>
                  Developing web and mobile channels system test cases and
                  executing them
                </li>
                <li>
                  validating developed test cases against product workflow
                  (customer journey), validating translations (Amharic and Afan
                  Oromo)
                </li>
                <li>
                  Creating defects and assigning to respective
                  development/product team
                </li>
                <li>
                  Following up on defect resolution with development/product
                  team
                </li>
                <li>Reproduce bugs and report on defect status</li>{" "}
                <li>
                  Running Sanity, Regression, Performance, Functional and User
                  acceptance tests on different test cycles
                </li>{" "}
                <li>
                  Assist on test plan preparation and preparing and delivering
                  daily test report for management.
                </li>
              </div>
            </div>
            <div className="skills-experience">
              <h3 className="experience-one-title">Freelance Web Developer</h3>
              <p className="experience-one-time"> Addis Ababa, Ethiopia</p>
              <p className="experience-one-time">July 2018 - Present</p>
              <p className="experience-one-subtitle">
                Creating and maintaining websites using technologies such as
                ReactJS, NodeJS, ExpressJs, MongoDB, JavaScript, HTML, CSS, and
                various content management systems. Skilled in front-end and
                MERN stack development and able to create visually appealing
                fully functional, high performance and user-friendly web apps
                that meet client needs.
                <li>
                  Working with clients to understand their needs and develop
                  custom websites that met their requirements.
                </li>
                <li>
                  Experienced working with the technologies in the MERN stack:
                  MongoDB, ExpressJs, ReactJs and NodeJs.
                </li>
                <li>
                  Working with common frontend development tools such as Babel,
                  Webpack, NPM React.js workflows.
                </li>
                <li>
                  Utilizing HTML, CSS, JavaScript, ReactJS, and other front-end
                  technologies to create visually appealing and user-friendly
                  websites.
                </li>
                <li>
                  Communicating effectively with clients throughout the
                  development process to ensure their satisfaction with the
                  final product
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
