// About.js
import React from "react";
import './about.css'; // Import a CSS file for styling
import profilePicture from '../assets/me.png'; // Import your profile picture

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="image-container">
          <img src={profilePicture} alt="Profile" className="profile-image" />
        </div>
        <div className="content-container">
          <h1 className="title">About Me</h1>
          <p>
            Hi! I’m <strong>Fritz Ivan</strong>, a <strong>19-year-old</strong> Bachelor of Science in Information Technology (BSIT) student at <strong>Western Institute of Technology</strong>. I live in <strong>New Lucena, Iloilo</strong>, and have a strong passion for technology, programming, and system development.
          </p>
          <p>
            I enjoy working on projects related to <strong>web development, database management, and embedded systems</strong>
          </p>
          <p>
            As an aspiring IT professional, I am constantly learning new skills in <strong>software development, cybersecurity, and system design</strong> to build secure and efficient solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;