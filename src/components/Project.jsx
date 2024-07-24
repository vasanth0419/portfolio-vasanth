import React from "react";
import "./style.css/Project.css";
import Footer from "./Footer";

import mern from "../assets/project/main.png";
import todo from "../assets/project/todo-app.png";
import weather from "../assets/project/weather.png";

import library from "../assets/project/library.png";

const Project = () => {
  return (
    <>
      <div className="team_section">
        <h3 className="headings">My project</h3>
        <div className="container-fluid project">
          <div
            style={{
              backgroundImage: `url(${mern})`,
            }}
            className="team pro-1"
          >
            <div className="overlay">
              <h3>Mern project</h3>

              <p className="para">Daily dress color suggesition for womens</p>
              <ul className="social_links">
                <li>
                  <a href="https://womens-fix.netlify.app/">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vasanth0419/project-womensfix-frontend.git">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vasanth0419/project-womensfix-backend.git">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${todo})`,
            }}
            className="team pro-2"
          >
            <div className="overlay">
              <h3>Todo-app</h3>

              <p className="para">
                Allow users to add new tasks with titles, descriptions, due
                dates, and priorities.
              </p>
              <ul className="social_links">
                <li>
                  <a href="https://todo-app-task-3.netlify.app/">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vasanth0419/todoapp.git">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${weather})`,
            }}
            className="team pro-3"
          >
            <div className="overlay">
              <h3>Weather</h3>

              <p className="para">
                Display real-time weather data including temperature, humidity,
                wind speed, and atmospheric pressure.
              </p>
              <ul className="social_links">
                <li>
                  <a href="https://weather-ap-app.netlify.app/">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vasanth0419/weather-app.git">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${library})`,
            }}
            className="team pro-4"
          >
            <div className="overlay">
              <h3>Library</h3>

              <p className="para">
                Allow users to search the library’s catalog by title, author,
                genre, or ISBN. Advanced search filters help refine results.
              </p>
              <ul className="social_links">
                <li>
                  <a href="https://books-library-task.netlify.app/">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/vasanth0419/bookslibrary.git">
                    <i className="bi bi-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project;
