/** @format */

import React from "react";

const SkillsItems = ({ isIcon, icon, title, alt }) => {
  return (
    <li className="skill-item">
      {isIcon ? (
        <img src={icon} alt={alt ? alt : null} className="isIcon" />
      ) : null}
      {title}
    </li>
  );
};

export default SkillsItems;
