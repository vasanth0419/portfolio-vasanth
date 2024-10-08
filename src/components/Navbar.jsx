import React from "react";
import "./style.css/Navbar.css";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? "nav-link text-dark active"
      : "nav-link text-dark";
  };
  return (
    <div>
      <div className="container-fluid navbar-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link
              className="navbar-brand vasanth permanent-marker-regular mx-5"
              to="/"
            >
              Vasanth
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item mx-4">
                  <Link className={isActive("/")} aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className={isActive("/about")} to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className={isActive("/skills")} to="/skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className={isActive("/project")} to="/project">
                    Projects
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className={isActive("/contact")} to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <Link to="/contact">
                <button type="button" className="btn hireme btn-dark mx-5">
                  Hire me
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
