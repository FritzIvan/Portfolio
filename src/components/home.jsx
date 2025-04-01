import React from 'react';
import './home.css'; // Ensure you import the CSS file
import myPicture from '../assets/mypic.png'; // Adjust the path to your image
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import the icons

const Hero = () => {
  return (
    <section className="home">
      <div className="text-container">
        <h1>Hello, my name is</h1> {/* Replace with your actual name */}
        <h2>Fritz Ivan Genovatin</h2> {/* Replace with your actual name */}
        <p>I'm a web developer with a passion for creating beautiful and functional websites.</p>
        <a href="#projects" className="btn">View My Work</a>
        
       
      </div>
      <div className="image-container">
        <img src={myPicture} alt="My Picture" className="profile-image" />
      </div>
    </section>
  );
};

export default Hero;