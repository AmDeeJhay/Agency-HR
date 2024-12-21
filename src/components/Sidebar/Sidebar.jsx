import React from 'react';

const Sidebar = ({ status }) => {
  return (
    <div className="bg-white text-black items-center justify-center w-48 min-h-screen p-3 mt-4">
      <h2 className="text-base font-bold mb-6 text-center">Progress</h2>
      <div className="space-y-0">
        {/* Step 1: Personal Details */}
        <div className=" relative flex items-center">
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
            {status.personalDetails === 'completed' ? '✔️' : '1'}
          </div>
          <div className="ml-2">
            <h3 className="text-sm font-medium">Personal Details</h3>
          </div>
        </div>
        <div className="border-l-2 border-gray-600 ml-3 h-6"></div>
        {/* Step 2: Contact Details */}
        <div className="flex items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gray-600 text-white flex items-center justify-center font-semibold ${status.contactDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.contactDetails === 'completed' ? '✔️' : '2'}
          </div>
          <div className="ml-2">
            <h3 className="text-sm font-medium">Contact Details</h3>
          </div>
        </div>
        <div className="border-l-2 border-gray-600 ml-3 h-6"></div>
        {/* Step 3: Work Details */}
        <div className="flex items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gray-600 text-white flex items-center justify-center font-semibold ${status.workDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.workDetails === 'completed' ? '✔️' : '3'}
          </div>
          <div className="ml-2">
            <h3 className="text-sm font-medium">Work Details</h3>
          </div>
        </div>
        <div className="border-l-2 border-gray-600 ml-3 h-6"></div>
        {/* Step 4: */}
        <div className="flex items-center">
          <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gray-600 text-white flex items-center justify-center font-semibold ${status.workDetails === 'completed' ? 'bg-green-500' : 'bg-gray-600'}`}>
            {status.experienceDetails === 'completed' ? '✔️' : '4'}
          </div>
          <div className="ml-2">
            <h3 className="text-sm font-medium">Experience</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;