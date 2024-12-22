import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Sidebar = ({ status }) => {
  return (
    <div className="bg-white text-black w-48 min-h-screen p-3 flex flex-col items-center fixed">
      <h2 className="text-base font-semibold text-black font-poppins mb-5 mt-24 text-center">Progress</h2>
      <div className="space-y-6 ml-3">
        {/* Step 1: Personal Details */}
        <div className="relative flex items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold ${status.personalDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.personalDetails === 'completed' ? <FaCheck className="text-white"/> : ''}
          </div>
          <div className="ml-3">
            <h3 className="text-xs text-black font-poppins font-semibold">Personal</h3>
          </div>
          <div className="absolute ml-3.5 transform -translate-x-1/2 top-full h-6 border-l-2 border-gray-600"></div>
        </div>
        {/* Step 2: Contact Details */}
        <div className="relative flex items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold ${status.contactDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.contactDetails === 'completed' ? <FaCheck /> : ''}
          </div>
          <div className="ml-3">
            <h3 className="text-xs text-black font-poppins font-semibold">Contact</h3>
          </div>
          <div className="absolute ml-3.5 transform -translate-x-1/2 top-full h-6 border-l-2 border-gray-600"></div>
        </div>
        {/* Step 3: Work Details */}
        <div className="relative flex items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold ${status.workDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.workDetails === 'completed' ? <FaCheck /> : ''}
          </div>
          <div className="ml-3">
            <h3 className="text-xs text-black font-poppins font-semibold">Work</h3>
          </div>
          <div className="absolute ml-3.5 transform -translate-x-1/2 top-full h-6 border-l-2 border-gray-600"></div>
        </div>
        {/* Step 4: Work Experience */}
        <div className="relative flex items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold ${status.experienceDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.experienceDetails === 'completed' ? <FaCheck /> : ''}
          </div>
          <div className="ml-3">
            <h3 className="text-xs text-black font-poppins font-semibold">Experience</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;