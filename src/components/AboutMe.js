/** @format */

import React, { Fragment } from "react";
import photo from "../img/self.jpeg";
import MenuSocialMedia from "./MenuSocialMedia";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <h2>Sobre Mi</h2>
        <div className="wrapper">
          <div className="img">
            <img src={photo} alt="Nicolas Oten" />
          </div>
          <div className="text">
            <p>
              Diseñador gráfico y desarrollador front end en constante
              aprendizaje, focalizado en dominar el stack MERN (MongoDB,
              Express, Node.js, React.js).
            </p>
            <p>
              En 2010 comencé la carrera de diseñador gráfico en la Universidad
              de la Empresa (Uruguay) y desde ese mismo año trabajo en el área
              del diseño y la comunicación, en 2016 comencé a estudiar de forma
              autodidacta desarrollo web en Wordpress y maquetación web con HTML
              y CSS, en 2018 enfoqué mis estudios en desarrollo Front End con
              React.js tomando cursos en plataformas de aprendizaje online como
              lo son Platzi y Udemy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
