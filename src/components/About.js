import React, { PureComponent } from "react";
import Sidebar from "./Sidebar";
import "../styles/about.scss";
import me from '../images/me3.png'
import {BsDownload} from 'react-icons/bs'

export default function Contact() {
  return (
    <div className="about-page-container">
      <p className="about-bg">ABOUT ME</p>
      <h1 className="about-header">about me</h1>
      <div className="about-header-devider"></div>
      <div className="about-description-image">
        <p className="about-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          magnam corporis exercitationem rerum est possimus nostrum, adipisci
          dignissimos quaerat perferendis quo ipsa id. Eum nihil pariatur
          accusantium tenetur voluptate laborum quis temporibus facere obcaecati
          iusto quia fuga qui aspernatur dolorem iure itaque soluta dolore
          laboriosam, veritatis, libero officia! Quam ipsam ad dolorem tempora
          eaque in veritatis dicta ex esse, magni optio asperiores quo quos
          veniam. Facilis culpa odit quisquam numquam! Dolorem nobis officiis
          minus voluptatem exercitationem iusto, molestias dolores praesentium
          veritatis rerum voluptatum amet sit nesciunt repellat. Hic ab,
          nesciunt maxime eius, autem iusto reiciendis, accusamus veritatis
          adipisci magni provident!
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
