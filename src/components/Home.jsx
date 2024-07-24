import React from "react";
import "./style.css/Home.css";
import About from "./About";
import profile from "../assets/tech/profile-1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid home">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="personal">
              <h2 className="word">Hi,</h2>
              <h2 className="word">
                I'm Vasanth <span className="gradient-text">Salomon,</span>
              </h2>
              <h2 className="intro gradient-text">MERN STACK DEVELOPER.</h2>
            </div>
            <Link to="/about">
              <button type="button" className="btn aboutme dwl btn-dark">
                About Me <i className="bi arrow bi-arrow-down-circle-fill"></i>
              </button>
            </Link>
            <div className="icons mt-3">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/vasanth-salomon?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMpMQz%2FzFRX2S%2BQNGt1PQHw%3D%3D"
              >
                <button type="button" className="btn btn-light">
                  <i className="hover-fx bi bi-linkedin"></i>
                </button>
              </a>
              <a target="_blank" href="">
                <button type="button" className="btn btn-light">
                  <i className="hover-fx bi bi-instagram"></i>
                </button>
              </a>
              <a target="_blank" href="https://github.com/vasanth0419">
                <button type="button" className="btn btn-light">
                  <i className="hover-fx bi bi-github"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img className="image" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
