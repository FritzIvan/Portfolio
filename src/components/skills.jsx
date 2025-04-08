// Skills.js
import React from "react";
import './skills.css'; // Import the CSS file for styling

const Skills = () => {
  const skillsList = [
    { name: "JavaScript", level: "Beginner" },
    { name: "React", level: "Beginner" },
    { name: "CSS", level: "Beginner" },
    { name: "HTML", level: "Beginner" },
    { name: "Node.js", level: "Beginner" },
    { name: "Git", level: "Beginner" },
    { name: "Python", level: "Beginner" },
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