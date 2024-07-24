import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      © 2024 Blog Website. All Rights Reserved.
          <a href="https://www.linkedin.com/in/arnab-majumder-923ab41bb/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 px-2">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Arnab514" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 px-2">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:arnabmajumdar399@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300 px-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://arnab-majumder-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 px-2">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
    </footer>
  );
};

export default Footer;
