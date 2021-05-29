/** @format */
import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Plus from "../img/plus-73.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav>
      <div>
        <div className="navbar">
          <div className="menu-icon" onClick={handleClick}>
            {!click ? (
              <img src={Plus} alt="" className="plus is-close" />
            ) : (
              <img src={Plus} alt="" className="plus is-open" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <MenuItem title="Home" url="#" setClick={setClick} />
            <MenuItem title="About" url="#" setClick={setClick} />
            <MenuItem title="Abilities" url="#" setClick={setClick} />
            <MenuItem title="Portfolio" url="#" setClick={setClick} />
            <MenuItem title="Contact" url="#" setClick={setClick} />
            <MenuItem
              isIcon="fab fa-github"
              url="https://github.com/neuronadotuy"
              isBlank
              setClick={setClick}
            />
            <MenuItem
              isIcon="fab fa-linkedin"
              url="https://www.linkedin.com/in/nicolas-oten/"
              isBlank
              setClick={setClick}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
