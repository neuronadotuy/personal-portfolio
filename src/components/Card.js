/** @format */

import React from "react";
import empty from "../img/web-empty.png";
import SkillsItems from "./SkillsItems";

const Card = ({ src, title, tools, urlWeb, urlGithub }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={src ? src : empty} alt="" />
      </div>
      <div className="card-desc">
        <h3>{title}</h3>
        <p className="card-tools">{tools}</p>
        <a
          href={urlWeb ? urlWeb : "#"}
          target="_blank"
          rel="noreferrer"
          className="card-link">
          <i className="fas fa-external-link-alt"></i>
        </a>
        <a
          href={urlGithub ? urlGithub : "#"}
          target="_blank"
          rel="noreferrer"
          className="card-link">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
