import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors duration-300">Blog Website</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
          <Link to="/create" className="text-gray-300 hover:text-white transition-colors duration-300">Create Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
