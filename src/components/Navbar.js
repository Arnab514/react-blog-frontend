import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold space-x-4">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-300 px-4">Blog Website Frontend</Link>
          <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 px-4">Home</Link>
          <Link to="/create" className="text-gray-300 hover:text-white transition-colors duration-300">Create Blog</Link>
        </div>
        <div className="space-x-4 flex items-center">
          <a href="https://www.linkedin.com/in/arnab-majumder-923ab41bb/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Arnab514" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:arnabmajumdar399@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://arnab-majumder-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
