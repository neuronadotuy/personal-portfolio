/** @format */

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import MenuSocialMedia from "./MenuSocialMedia";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2 className="logo">Nicolas Oten</h2>
        <p>Diseñador | Desarrollador Front End</p>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-plus rotate" : "fas fa-plus"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <MenuItem url="#" title="Home" setClick={setClick} />
        <MenuItem url="#" title="Sobre Mi" setClick={setClick} />
        <MenuItem url="#" title="Trabajos" setClick={setClick} />
        <MenuItem url="#" title="Contacto" setClick={setClick} />
        <MenuSocialMedia
          url="https://github.com/neuronadotuy"
          icon="fab fa-github"
          cname="nav-link  nav-icon"
          setClick={setClick}
        />
        <MenuSocialMedia
          url="https://www.linkedin.com/in/nicolas-oten/"
          icon="fab fa-linkedin"
          cname="nav-link  nav-icon"
          setClick={setClick}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
