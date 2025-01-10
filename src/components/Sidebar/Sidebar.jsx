// import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import { FaPerson, FaBookOpen, FaBriefcase, FaToolbox } from "react-icons/fa6";

const Sidebar = ({ status }) => {
  const details = [
    { text: "Personal", icon: <FaPerson />, key: "personalDetails" },
    { text: "Objective", icon: <FaBookOpen />, key: "objectiveDetails" },
    { text: "Experience", icon: <FaBookOpen />, key: "experienceDetails" },
    { text: "Education", icon: <FaToolbox />, key: "educationDetails" },
    { text: "Skills", icon: <FaToolbox />, key: "skillsDetails" },
    { text: "Contact", icon: <FaBookOpen />, key: "contactDetails" },
    { text: "Work", icon: <FaBriefcase />, key: "workDetails" },
    { text: "Experience", icon: <FaToolbox />, key: "experienceDetails" },
  ];

  return (
    <div className="text-black h-screen p-3 flex flex-col items-center fixed w-40 mr-5 border-r-2 bg-gray-50">
      <h2 className="text-sm md:text-base font-semibold text-black font-poppins mb-5 mt-24">
        Progress
      </h2>
      <div className="space-y-6 w-full">
        {details.map((item, index) => (
          <div key={index} className="relative flex items-center">
            {/* Status Indicator */}
            <div
              className={`flex-shrink-0 md:w-6 w-4 md:h-6 h-4 rounded-full flex items-center justify-center font-semibold ${
                status[item.key] === "completed" ? "bg-green-500" : "bg-black"
              }`}
            >
              {status[item.key] === "completed" && <FaCheck className="text-white text-xs md:text-base" />}
            </div>
            {/* Icon and Text */}
            <div className="ml-2 flex items-center">
              {item.icon}
              <span className="ml-2 text-xs md:text-sm font-poppins">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define prop types
Sidebar.propTypes = {
  status: PropTypes.object.isRequired, // Adjust the shape as needed
};

export default Sidebar;