import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ResumePage = () => {
  const [status, setStatus] = useState({
    personalDetails: 'pending',
    contactDetails: 'pending',
    workDetails: 'pending',
  });

  const [currentSection, setCurrentSection] = useState('personalDetails');
  const [formData, setFormData] = useState({
    personalDetails: {},
    contactDetails: {},
    workDetails: {},
  });

  const handleNext = (section) => {
    setStatus((prev) => ({
      ...prev,
      [section]: 'completed',
    }));
    if (section === 'personalDetails') {
      setCurrentSection('contactDetails');
    } else if (section === 'contactDetails') {
      setCurrentSection('workDetails');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [currentSection]: {
        ...prev[currentSection],
        [name]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      {/* Sidebar */}
      <Sidebar status={status} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Create Your Resume</h2>
        </header>

        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Form Section */}
          {currentSection === 'personalDetails' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Details</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.personalDetails.fullName || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.personalDetails.dob || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleNext('personalDetails')}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save & Next
                </button>
              </form>
            </div>
          )}

          {currentSection === 'contactDetails' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.contactDetails.email || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.contactDetails.phone || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleNext('contactDetails')}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save & Next
                </button>
              </form>
            </div>
          )}

          {currentSection === 'workDetails' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Work Details</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.workDetails.companyName || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.workDetails.jobTitle || ''}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleNext('workDetails')}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save & Next
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResumePage;