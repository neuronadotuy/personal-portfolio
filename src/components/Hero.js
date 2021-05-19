/** @format */

import React from "react";
import Emoji from "./Emoji";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h2>
          Hola <Emoji symbol="👋" label="Waving Hand" /> soy Nicolás Oten
        </h2>
        <h1>Diseñador y Desarrollador Front End.</h1>
      </div>
    </div>
  );
};

export default Hero;
