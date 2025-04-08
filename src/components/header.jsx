import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Make sure to import the icons
import './header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsSticky(offset > 0);
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'top') {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <nav className="nav">
        <div className="logo" onClick={() => scrollToSection('top')}>
          FRITZ IVAN 
        </div>
        <div className="media-icons">
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
      </nav>
    </header>
  );
};

export default Header;