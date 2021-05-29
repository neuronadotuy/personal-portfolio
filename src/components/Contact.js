/** @format */

import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact-section">
          <div className="contact-info mail">
            <i class="fas fa-envelope-square"></i> <p>nicolaswt@gmail.com</p>
          </div>
          <div className="contact-info phone">
            <i class="fas fa-phone-square-alt"></i> <p>+598 99 720 192</p>
          </div>
          <div className="contact-info social">
            <a
              href="https://github.com/neuronadotuy"
              target="_blank"
              rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-oten/"
              target="_blank"
              rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
