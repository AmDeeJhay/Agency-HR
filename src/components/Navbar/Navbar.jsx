import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between px-4 py-3">
      <div className="text-lg cursor-pointer font-poppins font-bold">Agency HR</div>
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300 nav-link relative cursor-pointer font-medium text-base">Home</Link></li>
          <li><Link to="/resume" className="hover:text-gray-300 nav-link relative cursor-pointer font-medium text-base">Create Resume</Link></li>
          <li><Link to="/cover-letter" className="hover:text-gray-300 nav-link relative cursor-pointer font-medium text-base">Cover Letter</Link></li>
          <li><Link to="/chat" className="hover:text-gray-300 nav-link relative cursor-pointer font-medium text-base">Chat</Link></li>
        </ul>
      </div>
      {/* <div className="flex items-center space-x-2">
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-2 py-1 rounded-md text-black"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">Search</button>
      </div> */}
    </nav>
  );
};

export default Navbar;