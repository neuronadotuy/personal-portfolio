/** @format */

import React from "react";

const MenuSocialMedia = ({ url, icon, cname, setClick }) => {
  const handleClick = () => {
    setClick(false);
  };

  return (
    <li onClick={handleClick}>
      <a href={url} className={cname} target="_blank" rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default MenuSocialMedia;
