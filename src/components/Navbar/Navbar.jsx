import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white shadow-md text-black  flex items-center justify-between px-4 py-4 transition-all duration-3 ${isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
      <div className="text-lg cursor-pointer font-poppins font-bold">Agency HR</div>
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-4">
          <li><Link to="/" className=" nav-link relative cursor-pointer font-medium text-base">Home</Link></li>
          <li><Link to="/resume" className=" nav-link relative cursor-pointer font-medium text-base">Create Resume</Link></li>
          <li><Link to="/cover-letter" className=" nav-link relative cursor-pointer font-medium text-base">Cover Letter</Link></li>
          <li><Link to="/chat" className=" nav-link relative cursor-pointer font-medium text-base">Chat</Link></li>
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