import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FaUser, FaCalendarAlt, FaGlobe, FaMapMarkerAlt, FaHome, FaPhone, FaEnvelope, FaPlus, FaTrash, FaLink, FaMinus } from 'react-icons/fa';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const socialOptions = [
  { value: 'twitter', label: 'Twitter' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'github', label: 'Github' },
  { value: 'dribbble', label: 'Dribbble' },
  { value: 'behance', label: 'Behance' },
  // Add more social options as needed
];

const monthOptions = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' },
];

const yearOptions = Array.from({ length: 50 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: year, label: year };
});

const ResumePage = () => {
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
    workDetails: [{}],
    experienceDetails: {},
  });

  const [showExperience, setShowExperience] = useState([true]); // State to toggle visibility of experiences

  const handleAddExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workDetails: [...prev.workDetails, {}],
    }));
    setShowExperience((prev) => [...prev, true]);
  };

  const toggleExperienceVisibility = (index) => {
    setShowExperience((prev) =>
      prev.map((show, i) => (i === index ? !show : show))
    );
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedWorkDetails = [...prev.workDetails];
      updatedWorkDetails[index] = {
        ...updatedWorkDetails[index],
        [name]: value,
      };
      return {
        ...prev,
        workDetails: updatedWorkDetails,
      };
    });
  };


  const [socialLinks, setSocialLinks] = useState([]);
  const [showSocialOptions, setShowSocialOptions] = useState(false);

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

  const handleAddSocialLink = (selectedOption) => {
    setSocialLinks((prev) => [...prev, selectedOption]);
    setShowSocialOptions(false);
  };

  const handleRemoveSocialLink = (index) => {
    setSocialLinks((prev) => prev.filter((_, i) => i !== index));
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
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">Create Your Resume</h2>
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
                  <button
                    type="button"
                    onClick={() => handleNext('personalDetails')}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                  >
                    Next
                  </button>
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
                      <FaPhone className="inline mr-2" /> Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.contactDetails.phone || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaEnvelope className="inline mr-2" /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.contactDetails.email || ''}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <h3 className="text-sm font-semibold text-black font-poppins mb-4">Social Links</h3>
                    <FaPlus
                      className="ml-2 mb-4 text-black cursor-pointer"
                      onClick={() => setShowSocialOptions(!showSocialOptions)}
                    />
                  </div>
                  {showSocialOptions && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {socialOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleAddSocialLink(option)}
                          className="bg-gray-200 hover:bg-gray-300 text-black font-poppins px-3 py-1 rounded-md text-xs"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                  {socialLinks.map((link, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <input
                        type="text"
                        name={link.value}
                        placeholder={`Enter your ${link.label} URL`}
                        value={formData.contactDetails[link.value] || ''}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <FaTrash
                        className="ml-2 text-red-500 cursor-pointer"
                        onClick={() => handleRemoveSocialLink(index)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => handlePrevious('contactDetails')}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-5 py-2 rounded-3xl text-xs"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNext('contactDetails')}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}

          
          {/* Form Section */}
          {currentSection === 'workDetails' && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Professional Experience</h3>
              {formData.workDetails.map((experience, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Experience {index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => toggleExperienceVisibility(index)}
                      className="text-black"
                    >
                      {showExperience[index] ? <FaMinus /> : <FaPlus />}
                    </button>
                  </div>
                  {showExperience[index] && (
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block font-medium font-poppins text-black text-xs">
                            Job Title
                          </label>
                          <input
                            type="text"
                            name="jobTitle"
                            value={experience.jobTitle || ''}
                            onChange={(e) => handleChange(e, index)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block font-medium font-poppins text-black text-xs">
                            Employer
                          </label>
                          <input
                            type="text"
                            name="employer"
                            value={experience.employer || ''}
                            onChange={(e) => handleChange(e, index)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="flex items-center">
                          <label className="block font-medium font-poppins text-black text-xs">
                            <FaLink className="inline mr-2" /> Company URL
                          </label>
                          <input
                            type="text"
                            name="companyUrl"
                            value={experience.companyUrl || ''}
                            onChange={(e) => handleChange(e, index)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block font-medium font-poppins text-black text-xs">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={experience.city || ''}
                            onChange={(e) => handleChange(e, index)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block font-medium font-poppins text-black text-xs">
                            Country
                          </label>
                          <Select
                            options={countryOptions}
                            value={experience.country}
                            onChange={(selectedOption) =>
                              handleChange(
                                { target: { name: 'country', value: selectedOption } },
                                index
                              )
                            }
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div>
                          <label className="block font-medium font-poppins text-black text-xs">
                            Start Date
                          </label>
                          <div className="flex gap-2">
                            <Select
                              options={monthOptions}
                              value={experience.startMonth}
                              onChange={(selectedOption) =>
                                handleChange(
                                  { target: { name: 'startMonth', value: selectedOption } },
                                  index
                                )
                              }
                              className="mt-1"
                              placeholder="Month"
                              required
                            />
                            <Select
                              options={yearOptions}
                              value={experience.startYear}
                              onChange={(selectedOption) =>
                                handleChange(
                                  { target: { name: 'startYear', value: selectedOption } },
                                  index
                                )
                              }
                              className="mt-1"
                              placeholder="Year"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block font-medium font-poppins text-black text-xs">
                            End Date
                          </label>
                          <div className="flex gap-2">
                            <Select
                              options={monthOptions}
                              value={experience.endMonth}
                              onChange={(selectedOption) =>
                                handleChange(
                                  { target: { name: 'endMonth', value: selectedOption } },
                                  index
                                )
                              }
                              className="mt-1"
                              placeholder="Month"
                              required
                            />
                            <Select
                              options={yearOptions}
                              value={experience.endYear}
                              onChange={(selectedOption) =>
                                handleChange(
                                  { target: { name: 'endYear', value: selectedOption } },
                                  index
                                )
                              }
                              className="mt-1"
                              placeholder="Year"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex items-center mb-2">
                          <h3 className="text-sm font-semibold text-black font-poppins mb-4">Description</h3>
                          {/* <div className="flex ml-2 space-x-2">
                            <FaBold className="cursor-pointer" />
                            <FaItalic className="cursor-pointer" />
                            <FaUnderline className="cursor-pointer" />
                            <FaListOl className="cursor-pointer" />
                            <FaAlignLeft className="cursor-pointer" />
                            <FaAlignCenter className="cursor-pointer" />
                            <FaAlignRight className="cursor-pointer" />
                          </div> */}
                        </div>
                        <textarea
                          name="description"
                          value={experience.description || ''}
                          onChange={(e) => handleChange(e, index)}
                          required
                          className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </form>
                  )}
                </div>
              ))}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => handlePrevious('workDetails')}
                  className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleAddExperience}
                  className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs flex items-center"
                >
                  <FaPlus className="mr-2" /> Professional Experience
                </button>
                <button
                  type="button"
                  onClick={() => handleNext('workDetails')}
                  className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ResumePage;
                

