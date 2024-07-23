import React from "react";
import "./style.css/Education.css";
import Footer from "./Footer";
const Education = () => {
  return (
    <>
      <div>
        <div className="main">
          <h3 className="heading">Education</h3>
          <div className="container edu">
            <ul>
              <li>
                <h3 className="title">Full Stack Development</h3>
                <p>Guvi Geek Network Private Ltd</p>
                <span className="circle"></span>
                <span className="date">March 2024</span>
              </li>
              <li>
                <h3 className="title">MBA Human Resources</h3>
                <p>Alagappa University, Karaikudi</p>
                <span className="circle"></span>
                <span className="date">2020-2022</span>
              </li>
              <li>
                <h3 className="title">B.Sc Hotel Management</h3>
                <p>MIHMCT, Chennai </p>
                <span className="circle"></span>
                <span className="date">2016-2019</span>
              </li>
              <li>
                <h3 className="title">HSC</h3>
                <p>Manner Sethupathy Mat.Hr.Sec. School, Ramanathapuram</p>
                <span className="circle"></span>
                <span className="date">2015-2016</span>
              </li>
            </ul>
          </div>
        </div>
      </div><Footer/>
    </>
  );
};

export default Education;
