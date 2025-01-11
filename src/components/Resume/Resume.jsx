import { useState } from "react";
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
} from "../Form";

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
    console.log("sectionData", sectionData)
    return Object.values(sectionData).every((value) => value !== "");
  };

  const handleSubmit = async () => {
    if (isSectionCompleted('personalDetails')) {
      try {
        const response = await fetch('https://your-backend-api-url.com/endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Success:', result);
          setShowModal(true);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const addMoreInterest = () => {
    setFormData((prev) => ({
      ...prev,
      interestDetails: [...prev.interestDetails, ""],
    }));
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

          {currentSection === "interestsDetails" && (
            <InterestForm
              data={formData.interestsDetails}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handlePrevious={handlePrevious}
              addMoreInterest={addMoreInterest}
            />
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

      {console.log("preview", formData)}
      <div className="w-1/2 border-l-8 max-h-[95vh] overflow-scroll">
        <ResumePreview
          formData={formData}
          scale={1} 
        />
      </div>
    </div>
  );
};

export default ResumePage;
