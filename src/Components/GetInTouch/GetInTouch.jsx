import React from "react";
import "./GetInTouch.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
import { Email } from "../Email/Email";
const GetInTouch = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div>
            <br />
            <div
              className={"contactcontainer " + themename}
              data-aos="fade-right"
            >
              <a
                href="https://www.linkedin.com/in/saurabh-pratap-singh-1611b923a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="linkedin" />
              </a>
              <a
                href="https://github.com/SaurabhPratapSingh399"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub className="github" />
              </a>
              <a
                href="mailto:Surabpratapsingh1116@gmail"
                target="_blank"
                rel="noreferrer"
              >
                <CgMail className="email" />
              </a>
            </div>
            <br />
            <div className="mailNumber" data-aos="fade-right">
              <div>
                <span>
                  <CgMail className="email" />
                </span>
                <span>
                  <p>Surabpratapsingh1116@gmail.com</p>
                </span>
              </div>
              <div className="iconsCont">
                <span>
                  <BsFillTelephoneFill className="phone" />
                </span>
                <span>
                  <p>+91-8318280626</p>
                </span>
              </div>
            </div>
          </div>
          <br />
          <div className="email-box">
            <Email />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
