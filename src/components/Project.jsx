import React from "react";
import "./style.css/Project.css";
import Footer from "./Footer";
const Project = () => {
  return (
    <>
      <div>
        <div className="team_section">
          <h3 className="headings">My project</h3>
          <p className="sub_heading">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            minus.
          </p>

          <div className="container-fluid project">
            <div className="team">
              <div className="img">
                <img src="src/img/profile-1.jpg" alt="" />
              </div>
              <h3>mern project</h3>
              <p className="designation">design</p>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, modi.
              </p>
              <ul className="social_links">
                <li>
                  <i class="bi bi-link-45deg"></i>
                </li>
                <li>
                  <i className="bi bi-github"></i>
                </li>
              </ul>
            </div>
            <div className="team">
              <div className="img">
                <img src="src/img/profile-1.jpg" alt="" />
              </div>
              <h3>mern project</h3>
              <p className="designation">design</p>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, modi.
              </p>
              <ul className="social_links">
                <li>
                  <i class="bi bi-link-45deg"></i>
                </li>
                <li>
                  <i className="bi bi-github"></i>
                </li>
              </ul>
            </div>
            <div className="team">
              <div className="img">
                <img src="src/img/profile-1.jpg" alt="" />
              </div>
              <h3>mern project</h3>
              <p className="designation">design</p>
              <p className="para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, modi.
              </p>
              <ul className="social_links">
                <li>
                  <i class="bi bi-link-45deg"></i>
                </li>
                <li>
                  <i className="bi bi-github"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div><Footer/>
    </>
  );
};

export default Project;
