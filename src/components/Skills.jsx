import React from "react";
import "./style.css/Skills.css";


const skills = [
  { src: "src/assets/tech/html5.png", alt: "HTML 5", label: "HTML 5" },
  { src: "src/assets/tech/css.png", alt: "CSS 3", label: "CSS 3" },
  { src: "src/assets/tech/js.png", alt: "JavaScript", label: "JavaScript" },
  { src: "src/assets/tech/react.png", alt: "React JS", label: "React JS" },
  { src: "src/assets/tech/nodejs.png", alt: "Node JS", label: "Node JS" },
  {
    src: "src/assets/tech/express.png",
    alt: "Express JS",
    label: "Express JS",
  },
  { src: "src/assets/tech/mongodb.png", alt: "MongoDB", label: "MongoDB" },
  {
    src: "src/assets/tech/bootstrap.png",
    alt: "Bootstrap",
    label: "Bootstrap",
  },
  {
    src: "src/assets/tech/tailwind.png",
    alt: "Tailwind CSS",
    label: "Tailwind CSS",
  },
  { src: "src/assets/tech/redux.png", alt: "Redux", label: "Redux" },
  { src: "src/assets/tech/formik.png", alt: "Formik", label: "Formik" },
  { src: "src/assets/tech/git.png", alt: "Git", label: "Git" },
  { src: "src/assets/tech/github.png", alt: "GitHub", label: "GitHub" },
];

const Skills = () => {
  return (
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
  );
};

export default Skills;
