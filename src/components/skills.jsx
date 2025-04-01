// Skills.js
import React from "react";
import './skills.css'; // Import the CSS file for styling

const Skills = () => {
  const skillsList = [
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "HTML", level: "Intermediate" },
    { name: "Node.js", level: "Beginner" },
    { name: "Git", level: "Beginner" },
    { name: "Python", level: "Intermediate" },
    { name: "SQL", level: "Beginner" },
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;