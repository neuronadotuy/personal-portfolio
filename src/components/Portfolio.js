/** @format */

import React from "react";
import Card from "./Card";

import webgastos from "../img/web-gastos.png";
import webportfolio from "../img/web-portfolio.png";
import webpacientes from "../img/web-pacientes.png";

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
            tools="HTML | CSS | ReactJS"
          />
          <Card
            src={webportfolio}
            title="Personal Portfolio"
            urlWeb=""
            urlGithub=""
            tools="HTML | CSS (Sass) | ReactJS"
          />
          <Card
            src={webpacientes}
            title="Patient Manager"
            urlWeb=""
            urlGithub="https://github.com/neuronadotuy/administrador-de-citas"
            tools="HTML | CSS | ReactJS"
          />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
