import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState();

  function toggleBurgerMenu() {
    setIsActive(!isActive);
  }

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand logo">
        <a className="navbar-item" href="#">
          LateLab_
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="dropdown-menu"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="dropdown-menu"
        className={`navbar-menu columns ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a className="page">Home</a>
          <a className="page">Recipes</a>
          <a className="page">About</a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button signup-btn">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light login-btn">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
