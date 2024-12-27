import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Sidebar = ({ status }) => {
  return (
    <div className="bg-white text-black w-48 min-h-screen p-3 flex flex-col items-center fixed">
      <h2 className="text-base font-semibold text-black font-poppins mb-4 mt-24 self-start ml-6">Progress</h2>
      <div className="space-y-5 ml-3">
        {/* Step 1: Personal Details */}
        <div className="relative flex items-center">
          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold ${status.personalDetails === 'completed' ? 'bg-green-500' : 'bg-black'}`}>
            {status.personalDetails === 'completed' ? <FaCheck className="text-white"/> : ''}
          </div>
          <div className="ml-3">
            <h3 className="text-xs text-black font-poppins font-semibold">Personal</h3>
          </div>
          <div className="absolute ml-3 transform -translate-x-1/2 top-full h-6 border-l-2 border-black"></div>
        </div>
        {/* Step 2: Contact Details */}
        <div className="relative flex items-center">
          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold ${status.contactDetails === 'completed' ? 'bg-green-500' : 'bg-black'}`}>
            {status.contactDetails === 'completed' ? <FaCheck className="text-white" /> : ''}
          </div>
          <div className="ml-3">
            <h3 className="text-xs text-black font-poppins font-semibold">Contact</h3>
          </div>
          <div className="absolute ml-3 transform -translate-x-1/2 top-full h-6 border-l-2 border-black"></div>
        </div>
        {/* Step 3: Professional Experience */}
        <div className="relative flex items-center">
          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold ${status.workDetails === 'completed' ? 'bg-green-500' : 'bg-black'}`}>
            {status.workDetails === 'completed' ? <FaCheck className="text-white" /> : ''}
          </div>
          <div className="ml-3">
            <h3 className="text-xs text-black font-poppins font-semibold">Professional Experience</h3>
          </div>
          <div className="absolute ml-3 transform -translate-x-1/2 top-full h-6 border-l-2 border-black"></div>
        </div>
        {/* Step 4: Skills */}
        <div className="relative flex items-center">
          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold ${status.skillsDetails === 'completed' ? 'bg-green-500' : 'bg-black'}`}>
            {status.skillsDetails === 'completed' ? <FaCheck className="text-white" /> : ''}
          </div>
          <div className="ml-3">
            <h3 className="text-xs text-black font-poppins font-semibold">Skills</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;