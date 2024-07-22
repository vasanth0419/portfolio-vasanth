import React from "react";
import "./style.css/Home.css";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="personal">
            <h2 className="word">Hi,</h2>
            <h2 className="word">
              I'm Vasanth <span style={{ color: "orange" }}>Salomon,</span>
            </h2>
            <h2 className="intro">MERN STACK DEVELOPER.</h2>
          </div>
          <button type="button" className="btn aboutme dwl btn-dark">
            About Me <i className="bi arrow bi-arrow-down-circle-fill"></i>
          </button>
          <div className="icons mt-3">
            <button type="button" className="btn btn-light">
              <i className="hover-fx bi bi-linkedin"></i>
            </button>
            <button type="button" className="btn btn-light">
              <i className="hover-fx bi bi-instagram"></i>
            </button>
            <button type="button" className="btn btn-light">
              <i className="hover-fx bi bi-github"></i>
            </button>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img className="image" src="src/img/profile-1.jpg" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
