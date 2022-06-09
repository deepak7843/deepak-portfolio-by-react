import React from "react";
import { links } from "../portfolio";
import { SocialIcon } from "react-social-icons";

import Fade from "react-reveal/Fade";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">
        <Fade bottom cascade duration={2500}>
          LET'S CONNECT
        </Fade>
      </h1>
      <div className="icon">
        {links.map((link) => (
          <div className="icons">
            {" "}
            <SocialIcon url={link} target="_blank" />{" "}
          </div>
        ))}
      </div>

      <center>
        <p id="emailPhone">
          <a href="tel:+917906074990">📞+91 7906074990</a>{" "}
          <a href="deepakshankardubey123@gmail.com" target="_blank" id="email">
            {" "}
            📧 deepakshankardubey123@gmail.com
          </a>
        </p>
        <hr className="style-f" />
      </center>
      <p className="copyright">
        👨‍💻 with ❤️ by <b id="footName">Deepak Shankar dubey</b> using ⚛️ 
       </p>
    </div>
  );
};

export default Contact;
