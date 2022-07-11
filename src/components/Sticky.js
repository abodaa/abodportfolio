import React, { PureComponent } from "react";
import { BsBoxArrowDown } from "react-icons/bs";
import { RiFacebookCircleLine, RiTelegramLine } from "react-icons/ri";
import { TbBrandTelegram } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import "../styles/sticky.scss";
export default function Sticky() {
  return (
    <>
      <div className="sticky-social-icons">
        <RiFacebookCircleLine className="social-icons" />
        <TbBrandTelegram className="social-icons" />
        <FiGithub className="social-icons" />
        <FiLinkedin className="social-icons" />
      </div>
      <div className="sticky-sound">
        <MdOutlineDarkMode style={{ fontSize: "1.5rem" }} />
        <p>
          sound <span>OFF</span>
        </p>
      </div>
    </>
  );
}
