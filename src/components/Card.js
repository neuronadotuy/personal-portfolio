/** @format */

import React from "react";
import empty from "../img/web-empty.jpg";

const Card = ({
  src,
  title,
  urlWeb,
  urlGithub,
  html,
  css,
  js,
  react,
  sass,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={src ? src : empty} alt="" />
      </div>
      <div className="card-desc">
        <h3>{title}</h3>
        <div className="card-info">
          <ul className="card-icons">
            {html ? (
              <li>
                <img src={html} alt="" />
              </li>
            ) : null}
            {css ? (
              <li>
                <img src={css} alt="" />
              </li>
            ) : null}
            {sass ? (
              <li>
                <img src={sass} alt="" />
              </li>
            ) : null}
            {js ? (
              <li>
                <img src={js} alt="" />
              </li>
            ) : null}
            {react ? (
              <li>
                <img src={react} alt="" />
              </li>
            ) : null}
          </ul>
          <div className="card-links">
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
      </div>
    </div>
  );
};

export default Card;
