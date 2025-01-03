import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaPerson, FaBookOpen, FaBriefcase, FaToolbox } from "react-icons/fa6";

const Sidebar = ({ status }) => {
  const details = [
    { text: "Personal", icon: <FaPerson />, key: "personalDetails" },
    { text: "Objective", icon: <FaBookOpen />, key: "objectiveDetails" },
    { text: "Experience", icon: <FaBookOpen />, key: "experienceDetails" },
    { text: "Contact", icon: <FaBookOpen />, key: "contactDetails" },
    { text: "Work", icon: <FaBriefcase />, key: "workDetails" },
    { text: "Experience", icon: <FaToolbox />, key: "experienceDetails" },
  ];

  return (
    <div className="bg-white text-black h-screen p-3 flex flex-col items-center fixed w-36 mr-5 border-b-8 border-red-950 border-r-8">
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
            {/* Text or Icon based on screen size */}
            <div className="ml-3 hidden sm:block">
              <h3 className="text-xs text-black font-poppins font-semibold uppercase">
                {item.text}
              </h3>
            </div>
            <div className="ml-3 sm:hidden">{item.icon}</div>
            {/* Connector Line */}
            {index !== details.length - 1 && (
              <div className="absolute ml-2 md:ml-3 transform -translate-x-1/2 top-full h-6 border-l-2 border-black"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
