// CreateCoverLetter.jsx
// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

const CreateCoverLetter = () => {
  // useEffect(() => {
  //   // GSAP Animations
  //   gsap.from('.form-header', { duration: 1.5, y: -50, opacity: 0, ease: 'power3.out' });
  //   gsap.from('.form-container', { duration: 1.5, scale: 0.9, opacity: 0, delay: 0.5, ease: 'power3.out' });
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-white px-4 py-8">
      <h1 className="form-header text-3xl md:text-4xl font-bold text-center text-black mb-8">
        Create a Professional Cover Letter
      </h1>
      <div className="form-container bg-white p-8 rounded-lg shadow-lg max-w-5xl mx-auto">
        <form className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-black block text-sm font-medium mb-1" htmlFor="full-name">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                className="w-full px-4 py-2 rounded-md text-black border border-black"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="text-black block text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md text-black border border-black "
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Employer Details */}
          <div>
            <label className="text-black block text-sm font-medium mb-1" htmlFor="employer-name">
              Employer's Name
            </label>
            <input
              type="text"
              id="employer-name"
              className="w-full px-4 py-2 rounded-md text-black border border-black"
              placeholder="Enter the employer's name"
            />
          </div>
          <div>
            <label className="text-black block text-sm font-medium mb-1" htmlFor="employer-company">
              Employer's Company Name
            </label>
            <input
              type="text"
              id="employer-company"
              className="w-full px-4 py-2 rounded-md text-black border border-black"
              placeholder="Enter the company name"
            />
          </div>

          {/* Cover Letter Details */}
          <div>
            <label className="text-black block text-sm font-medium mb-1" htmlFor="job-title">
              Job Title
            </label>
            <input
              type="text"
              id="job-title"
              className="w-full px-4 py-2 rounded-md text-black border border-black"
              placeholder="Enter the job title you are applying for"
            />
          </div>
          <div>
            <label className="text-black block text-sm font-medium mb-1" htmlFor="introduction">
              Introduction (Opening Paragraph)
            </label>
            <textarea
              id="introduction"
              className="w-full px-4 py-2 rounded-md text-black border border-black"
              rows="3"
              placeholder="Briefly introduce yourself and your interest in the job"
            ></textarea>
          </div>
          <div>
            <label className="text-black block text-sm font-medium mb-1" htmlFor="skills">
              Key Skills or Experiences
            </label>
            <textarea
              id="skills"
              className="w-full px-4 py-2 rounded-md text-black border border-black"
              rows="4"
              placeholder="Highlight key skills or experiences relevant to the job"
            ></textarea>
          </div>

          {/* Closing Statement */}
          <div>
            <label className="text-black block text-sm font-medium mb-1" htmlFor="closing">
              Closing Statement
            </label>
            <textarea
              id="closing"
              className="w-full px-4 py-2 rounded-md text-black border border-black"
              rows="3"
              placeholder="Add a closing paragraph thanking the employer and expressing enthusiasm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-500 hover:bg-black text-white py-2 rounded-md font-medium text-lg">
            Generate Cover Letter
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCoverLetter;
