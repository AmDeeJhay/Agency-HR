import PropTypes from "prop-types";
import { FaPerson, FaBookOpen, FaBriefcase, FaToolbox, FaPhone } from "react-icons/fa6";

const Sidebar = ({ status }) => {

  const details = [
    { text: "Personal", icon: <FaPerson />, key: "personalDetails" },
    { text: "Objective", icon: <FaBookOpen />, key: "objectiveDetails" },
    { text: "Contact", icon: <FaPhone />, key: "contactDetails" },
    { text: "Work", icon: <FaBriefcase />, key: "workDetails" },
    { text: "Experience", icon: <FaToolbox />, key: "experienceDetails" },
  ];

  return (
    <div className="bg-white text-black h-screen p-2 flex flex-col items-center fixed w-36 border-r-2 border-gray-200">
      <div className="space-y-5 w-full">
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