/** @format */

import React from "react";
import selfPhoto from "../img/self.jpeg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <h2 className="title">About Me</h2>
        <div className="about-section">
          <div className="about-img">
            <img src={selfPhoto} alt="" />
          </div>
          <div className="about-text">
            <p>
              I am Nicolas Oten, a graphic designer and front end developer in
              constant learning, focused on mastering the{" "}
              <span>MERN stack</span> (MongoDB, Express, Node.js, React.js).
            </p>
            <p>
              I am passionate about writing code and playing video games in my
              spare time.
            </p>
            <p>
              In 2010 I began my career as a graphic designer at the Universidad
              de la Empresa (Uruguay) and since that same year I have been
              working in the area of ​​design and communication, in 2016 I began
              to study self-taught web development in Wordpress and web layout
              with HTML and CSS (Sass), in 2020 I focused my studies on Front
              End development with React.js taking courses on online learning
              platforms such as Platzi and Udemy.
            </p>
            <p>
              I currently work as a graphic designer and web developer for
              Zapatería Macri (Uruguay) since August 2017 and as a freelance web
              designer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
