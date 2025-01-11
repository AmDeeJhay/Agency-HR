import PropTypes from "prop-types";
import { FaTools } from "react-icons/fa";
import { FaPerson, FaHeart, FaGraduationCap, FaBriefcase, FaBullseye } from "react-icons/fa6";

const Sidebar = ({ status }) => {

  const details = [
    { text: "Personal", icon: <FaPerson />, key: "personalDetails" },
    { text: "Objective", icon: <FaBullseye />, key: "objectiveDetails" },
    { text: "Experience", icon: <FaBriefcase />, key: "experienceDetails" },
    { text: "Education", icon: <FaGraduationCap />, key: "educationDetails" },
    { text: "Skills", icon: <FaTools />, key: "skillsDetails" },
    { text: "Interests", icon: <FaHeart />, key: "interests" },
  ];

  return (
    <div className="text-black h-screen p-3 flex flex-col items-center fixed w-40 mr-5 border-r-2 bg-gray-50">
      <div className="space-y-6 w-full">
        {details.map((item, index) => (
          <div key={index} className="relative flex items-center mb-4 mt-24 ">
            {/* Icon and Text */}
            <div className={`ml-2 flex items-center ${status[item.key] === "completed" ? "text-green-500" : "text-black"}`}>
              <div className="text-2xs md:text-xs font-poppins font-semibold text-gray-500">{item.icon}</div>
              <span className="ml-2 text-sm md:text-xs font-poppins font-semibold">{item.text}</span>
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