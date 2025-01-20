import React from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Landing = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="font-poppins">
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Agentic HR</div> {/* Text Logo */}
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link to="/about" className="text-black">About</Link>
            <Link to="/faq" className="text-black">Frequently Asked Questions</Link>
            <button
              onClick={() => window.open("https://t.me/hr_agentic_bot", "_blank")}
              className="flex items-center justify-center bg-black text-white font-bold py-2 px-4 rounded-full"
            >
              <FaRobot className="mr-2" />
              Message Bot
            </button>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Agentic HR</h1>
        <p className="text-xl md:text-2xl mb-8">Revolutionizing the way you manage your human resources.</p>
        <Link to="/get-started" className="bg-white text-black font-bold py-2 px-4 rounded-full">
          Get Started
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          At Agentic HR, we are dedicated to providing cutting-edge technology solutions to streamline your HR processes. Our tools are designed to make your job easier and more efficient.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md border border-gray-200 rounded-md">
            <h3 className="text-xl font-bold mb-2">AI-Powered Resume Creation</h3>
            <p className="text-lg">Create professional resumes in minutes using our AI-driven technology.</p>
          </div>
          <div className="p-6 bg-white shadow-md border border-gray-200 rounded-md">
            <h3 className="text-xl font-bold mb-2">Custom Cover Letters</h3>
            <p className="text-lg">Generate tailored cover letters that stand out to recruiters.</p>
          </div>
          <div className="p-6 bg-white shadow-md border border-gray-200 rounded-md">
            <h3 className="text-xl font-bold mb-2">Interactive Chat Support</h3>
            <p className="text-lg">Get instant support and feedback through our interactive chat.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-100 shadow-md rounded-md">
            <p className="text-lg italic">"Agentic HR has transformed the way we manage our HR processes. The AI-powered tools are incredibly efficient."</p>
            <p className="text-lg font-bold mt-4">- John Doe, HR Manager</p>
          </div>
          <div className="p-6 bg-gray-100 shadow-md rounded-md">
            <p className="text-lg italic">"The custom cover letters feature is a game-changer. It has helped me land multiple job interviews."</p>
            <p className="text-lg font-bold mt-4">- Jane Smith, Job Seeker</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg md:text-xl mb-8">Join thousands of users who have transformed their HR processes with Agentic HR.</p>
        <Link to="/get-started" className="bg-white text-black font-bold py-2 px-4 rounded-full">
          Get Started
        </Link>
      </section>

    </div>
  );
};

export default Landing;