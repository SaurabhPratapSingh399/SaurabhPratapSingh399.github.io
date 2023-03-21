import React, { useContext } from "react";
import "./Introduction.css";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/ProfPic.jpg";

export const Introduction = () => {
  const [{ themename }] = useContext(ThemeContext);

  return (
    <>
      <section id="">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone 👋 My name is{" "}
                <span className="different">Saurabh Pratap Singh </span> from{" "}
                <span className="different">
                  {" "}
                   Siwan, Bihar (India)
                </span>
                {/* need to add gradation and collage */}
                . I Post graduated with MCA from{" "}   
                <span className="different">
                  {/* collage address */}
                  Greater Noida Institute Of Technology, Greater Noida (Uttar Pradesh)
                </span>
                . In June 2022 I Joined{" "}
                <span className="different">Masai School</span> a military-type
                coding school. I got a hand on experience in frontend and backend
                technologies MERN, HTML, CSS, JavaScript.{" "}
                <span className="different">1000+ hours of Coding</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
