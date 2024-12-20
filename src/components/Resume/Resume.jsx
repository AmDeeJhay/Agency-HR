// CreateResume.jsx
// import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CreateResume = () => {
  // useEffect(() => {
  //   // GSAP Animations
  //   gsap.from('.form-header', { duration: 1.5, y: -50, opacity: 0, ease: 'power3.out' });
  //   gsap.from('.form-container', { duration: 1.5, scale: 0.9, opacity: 0, delay: 0.5, ease: 'power3.out' });
  // }, []);

  return (
    <div className="min-h-3.5 bg-gray-900 text-white flex items-center justify-center px-2">
      <div className="w-full max-w-3xl">
        <h1 className="form-header text-4xl font-bold text-center text-blue-400 mb-8">
          Create Your Resume
        </h1>
        <div className="form-container bg-gray-800 p-6 rounded-md">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                className="w-full px-4 py-2 rounded-md text-black"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md text-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="w-full px-4 py-2 rounded-md text-black"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="experience">
                Work Experience
              </label>
              <textarea
                id="experience"
                className="w-full px-4 py-2 rounded-md text-black"
                rows="4"
                placeholder="Describe your work experience"
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="education">
                Education
              </label>
              <textarea
                id="education"
                className="w-full px-4 py-2 rounded-md text-black"
                rows="4"
                placeholder="Describe your educational background"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium text-lg">
              Generate Resume
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
