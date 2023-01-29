import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="navbar-container columns is-vcentered">

        <div className="logo-container column is-one-quarter">
          <h1 className="logo">LateLab_</h1>
        </div>

        <div className="pages-container is-flex column is-half">
          <ul className="pages">
            <li className="page">
              <a className="page-link" href="#">
                Home
              </a>
            </li>
            <li className="page">
              <a className="page-link" href="#">
                Recipes
              </a>
            </li>
            <li className="page">
              <a className="page-link" href="#">
                About us
              </a>
            </li>
          </ul>
        </div>

        <div className="btn-container is-flex column is-one-quarter">
          <button className="new-recipe-btn">New recipe</button>
        </div>
      </div>
    </nav>
  );
}
