import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Sidebar from "../Sidebar/Sidebar";
import ResumePreview from "./ResumePreview";

import {
  // FaUser,
  // FaGlobe,
  // FaMapMarkerAlt,
  // FaHome,
  FaPhone,
  FaEnvelope,
  FaPlus,
  FaTrash,
  FaLink,
  FaMinus,
} from "react-icons/fa";
import Select from "react-select";
import countryList from "react-select-country-list";
import {
  EducationDetailsForm,
  ExperienceDetailsForm,
  ObjectiveDetailsForm,
  PersonalDetailsForm,
  SkillsForm,
  InterestForm,
  Button,
} from "../Form";
import { getChatResponse } from "../../utils/api/chatService";

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
  "objectiveDetails",
  "experienceDetails",
  "educationDetails",
  "skillsDetails",
  "interestsDetails",
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
    educationDetails: {},
    experienceDetails: {},
    skillsDetails: {},
    contactDetails: {
    },
    objectiveDetails: {
    },
    workDetails: [{

    }],
    skills: [

    ],
    interestsDetails: [

    ],
  });

  const [showModal, setShowModal] = useState(false);
  const [professionalSummary, setProfessionalSummary] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    } else if (name === "experienceDetails") {
      // Special case for experienceDetails (handle as an array)
      setFormData((prev) => ({
        ...prev,
        experienceDetails: value, // Directly set the array
      }));
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
        [currentSection]: isSectionCompleted(currentSection)
          ? "completed"
          : "pending",
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

  const handleSubmit = async (data) => {
    let experience = ""
    let skills = ""
    data?.experienceDetails?.map((item) =>{
      item.responsibilities?.map((item) => {
        return experience += ` ${item} `
      })
    })

    data?.objectiveDetails?.bullets?.map((item) =>{
      return experience += ` ${item} `
    })

    data?.skillsDetails?.skillsDetails?.map((item) =>{
      return skills += ` ${item} `
    })

    const formdata = JSON.stringify({ job_title: data.objectiveDetails.jobTitle, skills, experience})
    try {
      setIsSubmitting(true);
      const response = await getChatResponse(formdata);
      setProfessionalSummary(response.professional_summary);
      setShowModal(true);
      return response;
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const addMoreInterest = () => {
    setFormData((prev) => ({
      ...prev,
      interestsDetails: [...prev.interestsDetails, ""],
    }));
  };

  const countryOptions = countryList().getData();
  const stateOptions = [
    { value: "state1", label: "State 1" },
    { value: "state2", label: "State 2" },
    // Add more state options as needed
  ];

  return (
    <div className="flex h-screen">
      <Toaster position="top-right" />
      {/* Sidebar */}
      <div className="w-36">
        <Sidebar status={status} />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-0 bg-gray-50 overflow-y-scroll max-h-[95vh]">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-sm font-semibold font-poppins ml-6 mt-1">
            Create Your Resume
          </h2>

        </header>

        <div className="bg-white shadow-md rounded-lg w-full p-8 overflow-auto">
          {/* Form Section */}
          {currentSection === "personalDetails" && (
            <PersonalDetailsForm
              data={formData.personalDetails}
              handleChange={handleChange}
              handleCountryChange={handleCountryChange}
              handleStateChange={handleStateChange}
              handleNext={handleNext}
            />
          )}

          {currentSection === "objectiveDetails" && (
            <ObjectiveDetailsForm
              data={formData.objectiveDetails}
              handleChange={handleChange}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          )}

          {currentSection === "experienceDetails" && (
            <ExperienceDetailsForm
              data={formData.experienceDetails}
              handleChange={handleChange}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          )}

          {currentSection === "educationDetails" && (
            <EducationDetailsForm
              data={formData.educationDetails}
              handleChange={handleChange}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          )}

          {currentSection === "skillsDetails" && (
            <SkillsForm
              data={formData.skillsDetails}
              handleChange={handleChange}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          )}

          {/* <div className="flex flex-col"> */}
          {currentSection === "interestsDetails" && (
            <InterestForm
              data={formData.interestsDetails}
              handleChange={handleChange}
              addMoreInterest={addMoreInterest}
            />
          )}

          {SECTIONS.indexOf(currentSection) === SECTIONS.length - 1 && (
            <div className="flex justify-between mt-4">
              <Button onClick={handlePrevious} text={"Previous"} />
              <Button 
                onClick={() => handleSubmit(formData)} 
                text={isSubmitting ? "Processing..." : "Submit"} 
                disabled={isSubmitting}
              />
            </div>
          )}
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 backdrop-blur-sm">
        {isSubmitting ? (
          <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-700">Processing your resume...</p>
          </div>
        ) : (
          <div
            className="bg-white w-[90%] max-w-3xl p-8 rounded-2xl shadow-2xl text-left overflow-y-auto max-h-[500px] custom-scrollbar relative"
          >
            <button
              className="absolute right-6 top-6 text-gray-500 hover:text-black focus:outline-none text-2xl"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              &times;
            </button>
      
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Resume is on its Way! 🚀
            </h2>
            <p className="text-gray-600 mb-6">
              We’ve sent your resume to your email. Below is your current professional summary alongside a new AI-generated suggestion. You can choose to overwrite it if you’d like!
            </p>
      
            {/* Current Professional Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Your Current Professional Summary:
              </h3>
              <ul className="bg-gray-100 text-gray-700 p-4 rounded-lg mt-2 list-disc pl-5">
                {formData.objectiveDetails?.bullets?.length > 0 ? (
                  formData.objectiveDetails.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))
                ) : (
                  <li>No summary provided.</li>
                )}
              </ul>
            </div>
      
            {/* AI-Generated Professional Summary */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800">
                AI-Generated Professional Summary:
              </h3>
              <p className="bg-gray-100 text-gray-700 p-4 rounded-lg mt-2">
                {professionalSummary || "AI could not generate a summary at this time."}
              </p>
            </div>
      
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Overwrite Button */}
              <button
                type="button"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    objectiveDetails: {
                      ...prev.objectiveDetails,
                      bullets: [professionalSummary],
                    },
                  }));
                  setShowModal(false);
      
                  console.log(formData.objectiveDetails);
                }}
              >
                Use AI-Generated Summary
              </button>
      
              {/* Close Button */}
              <button
                type="button"
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition duration-300"
                onClick={() => setShowModal(false)}
              >
                Keep Current Summary
              </button>
            </div>
          </div>
        )}
      </div>
      
      )}

      <div className="w-1/2 border-l-8 max-h-[95vh] overflow-scroll">
        <ResumePreview
          formData={formData}
          scale={1}
        />
      </div>
      
      {/* <Chats botLink="https://t.me/hr_agentic_bot" /> */}
      
    </div>
    
  );
};
export default ResumePage;
