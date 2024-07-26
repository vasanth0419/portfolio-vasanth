import React from "react";
import "./style.css/Skills.css";
import Education from "./Education";
import html from "../assets/tech/html5.png";
import { motion } from "framer-motion";
import css from "../assets/tech/css.png";
import js from "../assets/tech/js.png";
import react from "../assets/tech/react.png";
import nodejs from "../assets/tech/nodejs.png";
import express from "../assets/tech/express.png";
import mongodb from "../assets/tech/mongodb.png";
import bootstrap from "../assets/tech/bootstrap.png";
import tailwindcss from "../assets/tech/tailwind.png";
import redux from "../assets/tech/redux.png";
import formik from "../assets/tech/formik.png";
import git from "../assets/tech/git.png";
import github from "../assets/tech/github.png";
const skills = [
  { src: html, alt: "HTML 5", label: "HTML 5" },
  { src: css, alt: "CSS 3", label: "CSS 3" },
  {
    src: js,
    alt: "JavaScript",
    label: "JavaScript",
  },
  {
    src: react,
    alt: "React JS",
    label: "React JS",
  },
  { src: nodejs, alt: "Node JS", label: "Node JS" },
  {
    src: express,
    alt: "Express JS",
    label: "Express JS",
  },
  {
    src: mongodb,
    alt: "MongoDB",
    label: "MongoDB",
  },
  {
    src: bootstrap,
    alt: "Bootstrap",
    label: "Bootstrap",
  },
  {
    src: tailwindcss,
    alt: "Tailwind CSS",
    label: "Tailwind CSS",
  },
  { src: redux, alt: "Redux", label: "Redux" },
  { src: formik, alt: "Formik", label: "Formik" },
  { src: git, alt: "Git", label: "Git" },
  { src: github, alt: "GitHub", label: "GitHub" },
];

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="container-fluid mt-4 skills">
          <div className="container skills-2">
            <h1 className="text-center text-light head-skill mb-4">
              {" "}
              <span>
                <i class="bi bi-laptop"></i>
              </span>{" "}
              Skills
            </h1>
            <div className="d-flex flex-wrap justify-content-center gap-5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="d-flex flex-column img-div align-items-center"
                >
                  <img
                    loading="lazy"
                    src={skill.src}
                    alt={skill.alt}
                    className="skill-img"
                  />
                  <p className="text-center head-skill text-light text-xs">
                    {skill.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Education />
      </motion.div>
    </>
  );
};

export default Skills;
