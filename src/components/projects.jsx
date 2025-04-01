import React from "react";
import './projects.css'; // Import the CSS file for styling
import ComingSoon from '../assets/comingsoon.jpg'; // Import the coming soon image
import Eventor from "../assets/eventor.png"; // Import the Eventor image
import AwesomeTodos from "../assets/awesometodos.png"; // Import the AwesomeTodos image

const projectList = [
  { imgSrc: AwesomeTodos, description: "AwesomeTodos." },
  { imgSrc: Eventor, description: "Eventor." },
  { imgSrc: ComingSoon, description: "Coming Soon" },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="title">My Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imgSrc} alt={`Project ${index + 1}`} className="project-image" />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
