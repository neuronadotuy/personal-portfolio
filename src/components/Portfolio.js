/** @format */

import React from "react";
import Card from "./Card";

import webgastos from "../img/web-gastos.png";
import webportfolio from "../img/web-portfolio.png";
import webpacientes from "../img/web-pacientes.png";
import webprestamos from "../img/web-prestamos.png";
import webclima from "../img/web-clima.png";
import webcrypto from "../img/web-crypto.png";
import webpixabay from "../img/web-pixabay.png";
import webshoppingcart from "../img/web-shoppingcart.png";
import webviaje from "../img/web-viaje.png";

import html from "../img/html5.png";
import css from "../img/css3.png";
import sass from "../img/sass.png";
import js from "../img/javascript.png";
import react from "../img/react.png";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="title">Portfolio</h2>
        <div className="works">
          <Card
            src={webgastos}
            title="Expense Manager"
            urlWeb="https://vigilant-wiles-225547.netlify.app/"
            urlGithub="https://github.com/neuronadotuy/admin-gastos"
            html={html}
            css={css}
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
            urlWeb="https://cranky-curie-760e77.netlify.app/"
            urlGithub="https://github.com/neuronadotuy/administrador-de-citas"
            html={html}
            css={css}
            react={react}
          />
          <Card
            src={webprestamos}
            title="Loan Calculator"
            urlWeb="https://trusting-morse-e8303f.netlify.app/"
            urlGithub="https://github.com/neuronadotuy/reactjs-Prestamos"
            html={html}
            css={css}
            react={react}
          />

          {/*  */}

          <Card
            src={webclima}
            title="Weather App"
            urlWeb="https://happy-kowalevski-212a23.netlify.app/"
            urlGithub="https://github.com/neuronadotuy/app-clima-js"
            html={html}
            css={css}
            js={js}
          />

          <Card
            src={webcrypto}
            title="Crypto Compare"
            urlWeb="https://elastic-newton-68c7ac.netlify.app/"
            urlGithub="https://github.com/neuronadotuy/Cryptocompare-API"
            html={html}
            css={css}
            js={js}
          />

          <Card
            src={webpixabay}
            title="Image Search"
            urlWeb="https://wonderful-noether-e57fbf.netlify.app/"
            urlGithub="https://github.com/neuronadotuy/pixabay-API-JS"
            html={html}
            css={css}
            js={js}
          />

          <Card
            src={webshoppingcart}
            title="Shopping Cart"
            urlWeb="https://objective-lalande-a6ad3d.netlify.app/"
            urlGithub="https://github.com/neuronadotuy/shopping-cart-js"
            html={html}
            css={css}
            js={js}
          />

          <Card
            src={webviaje}
            title="Travel Landing Page"
            urlWeb="https://trusting-dubinsky-c0e6c2.netlify.app/"
            urlGithub="https://github.com/neuronadotuy/miviaje.com"
            html={html}
            css={css}
            js={js}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
