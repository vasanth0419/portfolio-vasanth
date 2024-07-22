import React from "react";
import "./style.css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container-fluid  navbar-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a
              className="navbar-brand vasanth permanent-marker-regular mx-5"
              href="#"
            >
              Vasanth ,
            </a>
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
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item  mx-4">
                  <a
                    className="nav-link text-dark"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item  mx-3">
                  <a className="nav-link text-dark" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link text-dark" href="#">
                    Skills
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link text-dark" href="#">
                    Education
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link text-dark" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link text-dark" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <button type="button" className="btn hireme btn-dark mx-5">
                Hire me
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
