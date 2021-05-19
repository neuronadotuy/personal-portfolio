/** @format */

import React from "react";

const MenuItem = ({ url, title, setClick }) => {
  const handleClick = () => {
    setClick(false);
  };

  return (
    <li onClick={handleClick}>
      <a href={url} className="nav-link">
        {title}
      </a>
    </li>
  );
};

export default MenuItem;
