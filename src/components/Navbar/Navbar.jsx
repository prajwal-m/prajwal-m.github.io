import React from "react";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  const menuBtnClickHandler = () => {
    const menuItems = document.getElementById("myLinks");
    console.log(menuItems);
    setIsmenuOpen((prevValue) => !prevValue);
  };

  const toggleMenuBar = () => {
    setIsmenuOpen((prevValue) => !prevValue);
  };

  const getMenuClassNames = () =>
    `mobile-menu-items ${isMenuOpen ? "menu-open" : ""}`;

  return (
    <header className="portfolio-header">
      <div className="header-content">
        <div className="header-logo-container">
          <div className="header-image">
            <img
              src="https://user-images.githubusercontent.com/46987044/203060204-4906a46a-3ac6-4ce5-991b-4d0043678eb4.png"
              alt="logo icon"
            />
          </div>
          <p className="header-title">Prajwal</p>
        </div>
        <button className="menu-btn" onClick={menuBtnClickHandler}>
          <i className="fa fa-bars"></i>
        </button>

        <nav className="header-nav">
          <a href="#home" className="header-link">
            Home
          </a>
          <a href="#about" className="header-link">
            About
          </a>
          <a href="#skills" className="header-link">
            Skills
          </a>
          <a href="#experience" className="header-link">
            Experience
          </a>
          <a href="#projects" className="header-link">
            Projects
          </a>
        </nav>
      </div>
      <div id="myLinks" className={getMenuClassNames()}>
        <a href="#home" className="header-link" onClick={toggleMenuBar}>
          Home
        </a>
        <a href="#about" className="header-link" onClick={toggleMenuBar}>
          About
        </a>
        <a href="#skills" className="header-link" onClick={toggleMenuBar}>
          Skills
        </a>
        <a href="#experience" className="header-link" onClick={toggleMenuBar}>
          Experience
        </a>
        <a href="#projects" className="header-link" onClick={toggleMenuBar}>
          Projects
        </a>
      </div>
    </header>
  );
};

export default Navbar;
