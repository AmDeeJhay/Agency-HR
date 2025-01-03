import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ResumePreview from "./ResumePreview";
import {
  FaUser,
  FaGlobe,
  FaMapMarkerAlt,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaPlus,
  FaTrash,
  FaLink,
  FaMinus,
} from "react-icons/fa";
import Select from "react-select";
import countryList from "react-select-country-list";
import { ObjectiveDetailsForm, PersonalDetailsForm } from "../Form";

const socialOptions = [
  { value: "twitter", label: "Twitter" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "github", label: "Github" },
  { value: "dribbble", label: "Dribbble" },
  { value: "behance", label: "Behance" },
  // Add more social options as needed
];

const skillOptions = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "React", label: "React" },
  { value: "Node.js", label: "Node.js" },
  { value: "Python", label: "Python" },
  { value: "Django", label: "Django" },
  { value: "Java", label: "Java" },
  { value: "C++", label: "C++" },
  { value: "Ruby", label: "Ruby" },
  { value: "PHP", label: "PHP" },
  // Add more skill options as needed
];

const skillLevelOptions = [
  { value: "Amateur", label: "Amateur" },
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
  { value: "Proficient", label: "Proficient" },
  { value: "Professional", label: "Professional" },
  { value: "Entry level", label: "Entry level" },
  { value: "Junior Level", label: "Junior Level" },
  { value: "Senior Level", label: "Senior Level" },
  { value: "Associate", label: "Associate" },
];

const monthOptions = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const yearOptions = Array.from({ length: 50 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: year, label: year };
});
const SECTIONS = [
  "personalDetails",
  "objectiveDetails", // New section is included seamlessly
  "contactDetails",
  "workDetails",
  "skills",
];
const ResumePage = () => {
  const [status, setStatus] = useState(
    SECTIONS.reduce((acc, section) => {
      acc[section] = "pending";
      return acc;
    }, {})
  );

  const [currentSection, setCurrentSection] = useState(SECTIONS[0]);
  const [formData, setFormData] = useState({
    personalDetails: {},
    objectiveDetails: {},
    contactDetails: {},
    workDetails: [{}],
    skills: [],
  });

  const handleAddSkill = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, { skill: "", description: "", level: "" }],
    }));
    setShowSkillOptions(false);
  };

  const handleSkillChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedSkills = [...prev.skills];
      updatedSkills[index] = {
        ...updatedSkills[index],
        [name]: value,
      };
      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  };

  const handleDeleteSkill = (index) => {
    setFormData((prev) => {
      const updatedSkills = prev.skills.filter((_, i) => i !== index);
      return {
        ...prev,
        skills: updatedSkills,
      };
    });
  };

  const [showExperience, setShowExperience] = useState([true]);
  const [showUrlInput, setShowUrlInput] = useState([false]);
  const [showSkillOptions, setShowSkillOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workDetails: [...prev.workDetails, {}],
    }));
    setShowExperience((prev) => [...prev, true]);
    setShowUrlInput((prev) => [...prev, false]);
  };

  const toggleExperienceVisibility = (index) => {
    setShowExperience((prev) =>
      prev.map((show, i) => (i === index ? !show : show))
    );
  };

  const toggleUrlInputVisibility = (index) => {
    setShowUrlInput((prev) =>
      prev.map((show, i) => (i === index ? !show : show))
    );
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (currentSection === "workDetails") {
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
    } else {
      setFormData((prev) => ({
        ...prev,
        [currentSection]: {
          ...prev[currentSection],
          [name]: value,
        },
      }));
    }
  };

  const [socialLinks, setSocialLinks] = useState([]);
  const [showSocialOptions, setShowSocialOptions] = useState(false);

  const handleNext = () => {
    const currentIndex = SECTIONS.indexOf(currentSection);

    if (isSectionCompleted(currentSection)) {
      setStatus((prev) => ({
        ...prev,
        [currentSection]: isSectionCompleted(currentSection) ? "completed" : "pending",
      }));

      if (currentIndex < SECTIONS.length - 1) {
        setCurrentSection(SECTIONS[currentIndex + 1]);
      } else {
        // Final step, e.g., show modal
        console.log("All sections completed");
      }
    } else {
      alert("Please fill all the fields.");
    }
  };

  const handlePrevious = () => {
    const currentIndex = SECTIONS.indexOf(currentSection);

    if (currentIndex > 0) {
      setCurrentSection(SECTIONS[currentIndex - 1]);
    }
  };
  // const handleNext = (section) => {
  //   if (isSectionCompleted(section)) {
  //     setStatus((prev) => ({
  //       ...prev,
  //       [section]: "completed",
  //     }));
  //   } else {
  //     alert("Please fill all the fields.");
  //     return;
  //   }
  //   if (section === "personalDetails") {
  //     setCurrentSection("contactDetails");
  //   } else if (section === "contactDetails") {
  //     setCurrentSection("workDetails");
  //   } else if (section === "workDetails") {
  //     setCurrentSection("skills");
  //   } else if (section === "skills") {
  //     setStatus((prev) => ({
  //       ...prev,
  //       skillsDetails: "completed",
  //     }));
  //     setShowModal(true);
  //   }
  // };

  // const handlePrevious = (section) => {
  //   console.log(section);
  //   if (section === "contactDetails") {
  //     setCurrentSection(() => "personalDetails");
  //   } else if (section === "workDetails") {
  //     setCurrentSection("contactDetails");
  //   } else if (section === "skillsDetails") {
  //     setCurrentSection("workDetails");
  //   } else if (section === "skills") {
  //     setCurrentSection("skillsDetails");
  //   }
  // };

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
    return Object.values(sectionData).every((value) => value !== "");
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
    { value: "state1", label: "State 1" },
    { value: "state2", label: "State 2" },
    // Add more state options as needed
  ];

  return (
    <div className="h-screen bg-gray-50 text-gray-900 flex flex-1">
      {/* Sidebar */}
      <div className="w-36 ">
        <Sidebar status={status} />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-0 bg-gray-500 overflow-y-scroll max-h-[95vh]">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-base font-bold font-poppins ml-6 mt-1">
            Create Your Resume
          </h2>
          <div
            className={`text-sm font-semibold ${
              isSectionCompleted(currentSection)
                ? "text-green-500"
                : "text-gray-500"
            }`}
          >
            {isSectionCompleted(currentSection) ? "Completed" : "Pending"}
          </div>
        </header>

        <div className="bg-white shadow-md rounded-lg w-full p-8 overflow-auto">
          {/* Form Section */}
          {currentSection === "personalDetails" && (
            <PersonalDetailsForm
              data={formData.personalDetails}
              handleChange={handleChange}
              handleNext={handleNext}
            />
          )}

          {currentSection === "objectiveDetails" && (
            <ObjectiveDetailsForm
              data={formData.personalDetails}
              handleChange={handleChange}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          )}

          {/* {currentSection === "personalDetails" && (
            <div>
              <h3 className="text-sm font-semibold text-black font-poppins mb-4">
                Personal Details
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.personalDetails.firstName || ""}
                      onChange={handleChange}
                      required
                      className="mt-1 text-black block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaUser className="inline mr-2" /> Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.personalDetails.lastName || ""}
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
                      value={formData.personalDetails.address || ""}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-start mt-4">
                  <button
                    type="button"
                    onClick={() => handleNext("personalDetails")}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          )} */}

          {currentSection === "contactDetails" && (
            <div>
              <h3 className="text-sm font-semibold text-black font-poppins mb-4">
                Contact Details
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium font-poppins text-black text-xs">
                      <FaPhone className="inline mr-2" /> Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.contactDetails.phone || ""}
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
                      value={formData.contactDetails.email || ""}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center mb-4">
                    <h3 className="text-sm font-semibold text-black font-poppins mb-4">
                      Social Links
                    </h3>
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
                        value={formData.contactDetails[link.value] || ""}
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
                    onClick={() => handlePrevious("contactDetails")}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-5 py-2 rounded-3xl text-xs"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNext("contactDetails")}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Form Section */}
          {currentSection === "workDetails" && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Professional Experience
              </h3>
              {formData.workDetails.map((experience, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">
                      Experience {index + 1}
                    </h4>
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
                            value={experience.jobTitle || ""}
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
                            value={experience.employer || ""}
                            onChange={(e) => handleChange(e, index)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={() => toggleUrlInputVisibility(index)}
                            className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins px-3 py-2 rounded-2xl text-xs flex items-center"
                          >
                            <FaLink className="mr-1 font-poppins font-bold text-sm " />{" "}
                            Link
                          </button>
                          {showUrlInput[index] && (
                            <input
                              type="text"
                              name="companyUrl"
                              value={experience.companyUrl || ""}
                              onChange={(e) => handleChange(e, index)}
                              required
                              className="mt-1 ml-1 block w-full px-2 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          )}
                        </div>
                        <div>
                          <label className="block font-medium font-poppins text-black text-xs">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={experience.city || ""}
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
                                {
                                  target: {
                                    name: "country",
                                    value: selectedOption,
                                  },
                                },
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
                                  {
                                    target: {
                                      name: "startMonth",
                                      value: selectedOption,
                                    },
                                  },
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
                                  {
                                    target: {
                                      name: "startYear",
                                      value: selectedOption,
                                    },
                                  },
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
                                  {
                                    target: {
                                      name: "endMonth",
                                      value: selectedOption,
                                    },
                                  },
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
                                  {
                                    target: {
                                      name: "endYear",
                                      value: selectedOption,
                                    },
                                  },
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
                          <h3 className="text-sm font-semibold text-black font-poppins mb-4">
                            Description
                          </h3>
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
                          value={experience.description || ""}
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
                  onClick={() => handlePrevious("workDetails")}
                  className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleAddExperience}
                  className="bg-white hover:bg-gray-50 border border-black hover:text-black text-black font-poppins  px-6 py-3 rounded-3xl text-xs flex items-center"
                >
                  <FaPlus className="mr-2" /> Professional Experience
                </button>
                <button
                  type="button"
                  onClick={() => handleNext("workDetails")}
                  className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentSection === "skills" && (
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Create Skills
              </h3>
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-sm font-semibold text-black font-poppins mb-4">
                    Add Skills
                  </h3>
                  <FaPlus
                    className="ml-2 mb-4 text-black cursor-pointer"
                    onClick={() => setShowSkillOptions(!showSkillOptions)}
                  />
                </div>
                {showSkillOptions && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skillOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleAddSkill(option)}
                        className="bg-gray-200 hover:bg-gray-300 text-black font-poppins px-3 py-1 rounded-md text-xs"
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
                {formData.skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-semibold">
                        Skill {index + 1}
                      </h4>
                      <FaTrash
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleDeleteSkill(index)}
                      />
                    </div>
                    <input
                      type="text"
                      name="skill"
                      placeholder="Enter skill"
                      value={skill.skill}
                      onChange={(e) => handleSkillChange(e, index)}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <textarea
                      name="description"
                      placeholder="Description"
                      value={skill.description}
                      onChange={(e) => handleSkillChange(e, index)}
                      required
                      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <Select
                      options={skillLevelOptions}
                      value={skill.level}
                      onChange={(selectedOption) =>
                        handleSkillChange(
                          { target: { name: "level", value: selectedOption } },
                          index
                        )
                      }
                      className="mt-1"
                      placeholder="Select skill level"
                      required
                    />
                  </div>
                ))}
                <div className="flex justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => handlePrevious("skillsDetails")}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins px-6 py-3 rounded-3xl text-xs"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => handleNext("skills")}
                    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins px-6 py-3 rounded-3xl text-xs"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">
              We have received your request
            </h2>
            <p>
              Your Resume will be sent to your mail as PDF for you to download.
            </p>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="mt-4 bg-black hover:bg-white border border-black hover:text-black text-white font-poppins px-6 py-3 rounded-3xl text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="w-1/2 border-l-8 max-h-[95vh] overflow-scroll">
        <ResumePreview
          formData={formData}
          // selectedTemplate={selectedTemplate}
          scale={0.8} // Adjust scale to fit the preview window
        />
      </div>
    </div>
  );
};

export default ResumePage;
