import React, { PureComponent } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { RiFacebookCircleLine, RiTelegramLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import "../styles/sticky.scss";
import logo from "../images/Abod-Logo.png";
export default function Sticky() {
  return (
    <>
      <div className="sticky-social-icons">
        {/* <a target="blank" href="https://www.facebook.com/creativeabod">
          <RiFacebookCircleLine className="social-icons" />
        </a> */}
        <a target="blank" href="https://t.me/BigAbod">
          <TbBrandTelegram className="social-icons" />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/abraham-bogale?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUAC5npkgRz2jh7Nowj%2B20w%3D%3D"
        >
          <FiLinkedin className="social-icons" />
        </a>
        <a target="blank" href="https://github.com/abodaa">
          <FiGithub className="social-icons" />
        </a>
        <div className="social-line"></div>
      </div>
    </>
  );
}
