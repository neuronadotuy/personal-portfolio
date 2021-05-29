/** @format */

import React from "react";
import Card from "./Card";

import webgastos from "../img/web-gastos.png";
import webportfolio from "../img/web-portfolio.png";
import webpacientes from "../img/web-pacientes.png";

import html from "../img/html5.png";
import css from "../img/css3.png";
import sass from "../img/sass.png";
import js from "../img/javascript.png";
import react from "../img/react.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <h2 className="title">Portfolio</h2>
        <div className="works">
          <Card
            src={webgastos}
            title="Expense Manager"
            urlWeb=""
            urlGithub="https://github.com/neuronadotuy/admin-gastos"
            html={html}
            sass={sass}
            react={react}
          />
          <Card
            src={webportfolio}
            title="Personal Portfolio"
            urlWeb=""
            urlGithub="https://github.com/neuronadotuy/personal-portfolio"
            html={html}
            sass={sass}
            react={react}
          />
          <Card
            src={webpacientes}
            title="Patient Manager"
            urlWeb=""
            urlGithub="https://github.com/neuronadotuy/administrador-de-citas"
            html={html}
            css={css}
            react={react}
          />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
