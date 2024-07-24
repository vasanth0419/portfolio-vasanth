import React from "react";
import "./style.css/About.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import profile from "../assets/tech/profile-1.jpg";
const About = () => {
  return (
    <>
      <div className="container-fluid aboutpage">
        <h1 className="about">
          <i className="bi bi-person-fill"></i> About Me
        </h1>
        <div className="row">
          <div className="col-md-7 aboutinfo">
            <p>
              Hi, I am a{" "}
              <b style={{ color: "rgb(106, 6, 236)" }}>
                Full Stack Web Developer
              </b>{" "}
              with experience in JavaScript, and expertise in frameworks like
              React, Node.js, Express.js, and MongoDB.
            </p>
            <p>
              I'm a quick learner and collaborate closely with clients to create
              efficient, scalable, and user-friendly solutions that solve
              real-world problems.
            </p>
            <p>Let's work together to bring your ideas to life!</p>
            <p className="info">
              <span>
                <i className="bi env bi-envelope-fill"></i>
              </span>
              vasanthsalomonv1904@gmail.com
            </p>
            <p>
              <span>
                <i className="bi tel bi-telephone-fill"></i>
              </span>
              9566443153
            </p>
            <div className="buttons">
              <Link to="/skills">
                <button type="button" className="btn aboutme dwl btn-dark">
                  Skills <i className="bi arrow bi-arrow-down-circle-fill"></i>
                </button>
              </Link>
              <a target="_blank" href="src/assets/resume/cv.pdf">
                <button type="button" className="btn aboutme dwl btn-dark">
                  Download CV{" "}
                  <i className="bi arrow bi-arrow-up-circle-fill"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <img className="image-2" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
