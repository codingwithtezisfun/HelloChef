import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/navbar.css";
import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" style={{ width: "150px", height: "70px" }} />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarContent"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Our Plans
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Weekly Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              How it Works
            </a>
          </li>
        </ul>
        <Link to="./SignIn">
          <button className="btn buttonn btn-outline-primary" type="button">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
