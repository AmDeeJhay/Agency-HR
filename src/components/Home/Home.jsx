// Home.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  // useEffect(() => {
  //   // GSAP Animations
  //   gsap.from('.header-text', { duration: 1, y: -50, opacity: 0, ease: 'power3.out' });
  //   gsap.from('.subtext', { duration: 1.5, y: 50, opacity: 0, delay: 0.5, ease: 'power3.out' });
  //   gsap.from('.cta-button', { duration: 1, scale: 0.9, opacity: 0, delay: 1, ease: 'power3.out', stagger: 0.2 });
  // }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="header-text text-4xl md:text-6xl font-bold text-blue-400 ">
          Welcome to Agency HR
        </h1>
        <p className="subtext text-lg md:text-xl text-gray-300 mt-14 items-center">
          Revolutionizing the way you manage<br /> your human resources with cutting-edge technology.
        </p>
      </header>

      {/* Call to Action Section */}
      <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button className="cta-button bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md text-lg">
          Get Started
        </button>
        <button className="cta-button bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-md text-lg">
          Learn More
        </button>
      </div>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="p-6 bg-gray-800 rounded-md text-center">
          <h3 className="text-xl font-semibold text-blue-400">AI-Powered Resume Creation</h3>
          <p className="text-gray-300 mt-2">
            Create professional resumes in minutes using our AI-driven technology.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-md text-center">
          <h3 className="text-xl font-semibold text-blue-400">Custom Cover Letters</h3>
          <p className="text-gray-300 mt-2">
            Generate tailored cover letters that stand out to recruiters.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-md text-center">
          <h3 className="text-xl font-semibold text-blue-400">Interactive Chat Support</h3>
          <p className="text-gray-300 mt-2">
            Get assistance and advice for job applications directly from our bot.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
