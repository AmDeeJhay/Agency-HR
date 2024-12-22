import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Sidebar = ({ status }) => {
  return (
    <div className="bg-white text-black w-48 min-h-screen p-3 flex flex-col items-center fixed">
      <h2 className="text-base font-bold mb-6 text-center">Progress</h2>
      <div className="space-y-6">
        {/* Step 1: Personal Details */}
        <div className="relative flex flex-col items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold ${status.personalDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.personalDetails === 'completed' ? <FaCheck /> : '1'}
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-medium text-center">Personal Details</h3>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>
        </div>
        {/* Step 2: Contact Details */}
        <div className="relative flex flex-col items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold ${status.contactDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.contactDetails === 'completed' ? <FaCheck /> : '2'}
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-medium text-center">Contact Details</h3>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>
        </div>
        {/* Step 3: Work Details */}
        <div className="relative flex flex-col items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold ${status.workDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.workDetails === 'completed' ? <FaCheck /> : '3'}
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-medium text-center">Work Details</h3>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>
        </div>
        {/* Step 4: Work Experience */}
        <div className="relative flex flex-col items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-semibold ${status.experienceDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.experienceDetails === 'completed' ? <FaCheck /> : '4'}
          </div>
          <div className="mt-2">
            <h3 className="text-sm font-medium text-center">Work Experience</h3>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;