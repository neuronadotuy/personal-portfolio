/** @format */

import React from "react";

const MenuItem = ({ url, title, isIcon, isBlank, cname, setClick }) => {
  const closeMenu = () => {
    setClick(false);
  };

  return (
    <li
      onClick={() => {
        closeMenu();
      }}>
      <a
        href={url ? url : "#"}
        target={isBlank ? "_blank" : null}
        rel="noreferrer"
        className={cname ? cname : "nav-link"}>
        {isIcon ? <i className={isIcon}></i> : null}
        {title}
      </a>
    </li>
  );
};

export default MenuItem;
