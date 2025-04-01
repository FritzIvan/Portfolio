import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-icons">
          <a href="https://www.facebook.com/ivanfritz.genovatin" target="_blank" rel="noopener noreferrer" className="facebook">
            <FaFacebook />
          </a>
          <a href="https://github.com/FritzIvan" target="_blank" rel="noopener noreferrer" className="github">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/_fritzivan/" target="_blank" rel="noopener noreferrer" className="instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/fritz-ivan-genovatin-a71820316/" target="_blank" rel="noopener noreferrer" className="linkedin">
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Tsong Portfolio.</p>
      </div>
    </footer>
  );
};

export default Footer;
