import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FaUser, FaCalendarAlt, FaGlobe, FaMapMarkerAlt, FaHome } from 'react-icons/fa';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const CreateCoverLetter = () => {
  const [status, setStatus] = useState({
    personalDetails: 'pending',
    contactDetails: 'pending',
    workDetails: 'pending',
    experienceDetails: 'pending',
  });

  const [currentSection, setCurrentSection] = useState('personalDetails');
  const [formData, setFormData] = useState({
    personalDetails: {},
    contactDetails: {},
    workDetails: {},
    experienceDetails: {},
  });

  const handleNext = (section) => {
    if (isSectionCompleted(section)) {
      setStatus((prev) => ({
        ...prev,
        [section]: 'completed',
      }));
    } else {
      alert('Please fill all the fields.');
      return;
    }
    if (section === 'personalDetails') {
      setCurrentSection('contactDetails');
    } else if (section === 'contactDetails') {
      setCurrentSection('workDetails');
    } else if (section === 'workDetails') {
      setCurrentSection('experienceDetails');
    }
  };

  const handlePrevious = (section) => {
    if (section === 'contactDetails') {
      setCurrentSection('personalDetails');
    } else if (section === 'workDetails') {
      setCurrentSection('contactDetails');
    } else if (section === 'experienceDetails') {
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

  const handleCountryChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        country: selectedOption,
        state: null, // Reset state when country changes
      },
    }));
  };

  const handleStateChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        state: selectedOption,
      },
    }));
  };

  const isSectionCompleted = (section) => {
    const sectionData = formData[section];
    return Object.values(sectionData).every((value) => value !== '');
  };

  const countryOptions = countryList().getData();
  const stateOptions = [
    { value: 'state1', label: 'State 1' },
    { value: 'state2', label: 'State 2' },
    // Add more state options as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      {/* Sidebar */}
      <Sidebar status={status} />

      {/* Main Content */}
      <main className="flex-1 p-8 ml-48">
        <header className="flex justify-between items-center ml-6">
          <h2 className="text-base font-semibold text-black font-poppins mb-4">Create Your Resume</h2>
          <div className={`text-sm font-semibold ${isSectionCompleted(currentSection) ? 'text-green-500' : 'text-gray-500'}`}>
            {isSectionCompleted(currentSection) ? 'Completed' : 'Pending'}
          </div>
        </header>

        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Form Section */}
          {currentSection === 'personalDetails' && (
            <div>
              <h3 className="text-sm font-semibold text-black font-poppins mb-4">Personal Details</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.personalDetails.firstName || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.personalDetails.lastName || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaCalendarAlt className="inline mr-2" /> Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.personalDetails.dob || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaGlobe className="inline mr-2" /> Country
                    </label>
                    <Select
                      options={countryOptions}
                      value={formData.personalDetails.country}
                      onChange={handleCountryChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaMapMarkerAlt className="inline mr-2" /> State/Province
                    </label>
                    <Select
                      options={stateOptions} // Placeholder options
                      value={formData.personalDetails.state}
                      onChange={handleStateChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaHome className="inline mr-2" /> Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.personalDetails.address || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-start mt-4">
                  {isSectionCompleted('personalDetails') ? (
                    <button
                      type="button"
                      onClick={() => handleNext('personalDetails')}
                      className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                      disabled
                    >
                      Next
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {currentSection === 'contactDetails' && (
            <div>
              <h3 className="text-sm font-semibold text-black font-poppins mb-4">Contact Details</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.personalDetails.firstName || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.personalDetails.lastName || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaCalendarAlt className="inline mr-2" /> Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.personalDetails.dob || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaGlobe className="inline mr-2" /> Country
                    </label>
                    <Select
                      options={countryOptions}
                      value={formData.personalDetails.country}
                      onChange={handleCountryChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaMapMarkerAlt className="inline mr-2" /> State/Province
                    </label>
                    <Select
                      options={stateOptions} // Placeholder options
                      value={formData.personalDetails.state}
                      onChange={handleStateChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaHome className="inline mr-2" /> Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.personalDetails.address || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => handlePrevious('contactDetails')}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-5 py-2 rounded-3xl text-xs"
                  >
                    Previous
                  </button>
                  {isSectionCompleted('contactDetails') ? (
                    <button
                      type="button"
                      onClick={() => handleNext('contactDetails')}
                      className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNext('contactDetails')}
                      className="bg-black text-white px-4 py-2 rounded-md"
                    >
                      Save
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {currentSection === 'workDetails' && (
            <div>
              <h3 className="text-sm font-semibold text-black font-poppins mb-4">Work Details</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.personalDetails.firstName || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.personalDetails.lastName || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaCalendarAlt className="inline mr-2" /> Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.personalDetails.dob || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaGlobe className="inline mr-2" /> Country
                    </label>
                    <Select
                      options={countryOptions}
                      value={formData.personalDetails.country}
                      onChange={handleCountryChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaMapMarkerAlt className="inline mr-2" /> State/Province
                    </label>
                    <Select
                      options={stateOptions} // Placeholder options
                      value={formData.personalDetails.state}
                      onChange={handleStateChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaHome className="inline mr-2" /> Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.personalDetails.address || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => handlePrevious('workDetails')}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                  >
                    Previous
                  </button>
                  {isSectionCompleted('workDetails') ? (
                    <button
                      type="button"
                      onClick={() => handleNext('workDetails')}
                      className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                    >
                      Next
                    </button> 
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNext('experienceDetails')}
                      className="bg-black text-white px-4 py-2 rounded-md"
                    >
                      Save
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {currentSection === 'experienceDetails' && (
            <div>
              <h3 className="text-sm font-semibold text-black font-poppins mb-4">Experience Details</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.personalDetails.firstName || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.personalDetails.lastName || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaCalendarAlt className="inline mr-2" /> Date of Birth
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.personalDetails.dob || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaGlobe className="inline mr-2" /> Country
                    </label>
                    <Select
                      options={countryOptions}
                      value={formData.personalDetails.country}
                      onChange={handleCountryChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaMapMarkerAlt className="inline mr-2" /> State/Province
                    </label>
                    <Select
                      options={stateOptions} // Placeholder options
                      value={formData.personalDetails.state}
                      onChange={handleStateChange}
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaHome className="inline mr-2" /> Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.personalDetails.address || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => handlePrevious('experienceDetails')}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                  >
                    Previous
                  </button>
                  {isSectionCompleted('experienceDetails') ? (
                    <button
                      type="button"
                      onClick={() => handleNext('experienceDetails')}
                      className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNext('experienceDetails')}
                      className="bg-black text-white px-4 py-2 rounded-md"
                    >
                      Save
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CreateCoverLetter;