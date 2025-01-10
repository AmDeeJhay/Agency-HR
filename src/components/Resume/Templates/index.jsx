import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa6";

// Sample default formData
export const defaultData = {
  personalDetails: {
    firstName: "Your FirstName",
    lastName: "LastName",
    email: "email@example.com",
    phone: "(123) 456-7890",
    linkedin: "linkedin.com/in/yourprofile",
    country: "Country",
    address: "Address",
  },
  objectiveDetails: {
    jobTitle: "PARTNER MANAGER",
    bullets: [
      "Achievement 1",
      "Achievement 2",
    ],
  },
  experienceDetails: [
    {
      jobTitle: "Job Title",
      companyName: "Company Name",
      startDate: "",
      endDate: "",
      responsibilities: ["Your responsibilities"],
    },
  ],
  educationDetails: [
    {
      course: "Your Degree/Course",
      schoolName: "School Name",
      startDate: "",
      endDate: "",
    },
  ],
  skillsDetails: ["Skill 1", "Skill 2", "Skill 3"],
  interests: "Your interests and hobbies",
};

const ProfessionalBlueTemplate = ({ formData }) => {
  const resumeData = {
    ...defaultData,
    ...formData,
    personalDetails: {
      ...defaultData.personalDetails,
      ...(formData?.personalDetails || {}),
    },
    objectiveDetails: {
      ...defaultData.objectiveDetails,
      ...(formData?.objectiveDetails || {}),
    },
    // Ensure experienceDetails is always an array
    experienceDetails: Array.isArray(formData?.experienceDetails)
      ? formData.experienceDetails
      : defaultData.experienceDetails,
    // Ensure educationDetails is always an array
    educationDetails: Array.isArray(formData?.educationDetails)
      ? formData.educationDetails
      : defaultData.educationDetails,
    skillsDetails: Array.isArray(formData?.skillsDetails)
      ? formData.skillsDetails
      : defaultData.skillsDetails,
  };

  const {
    personalDetails,
    objectiveDetails,
    experienceDetails,
    educationDetails,
    skillsDetails,
    interests,
  } = resumeData;
  return (
    <div className="text-[11px] leading-normal">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-[20px] font-bold text-[#4169E1] mb-2 uppercase">
          {personalDetails.firstName} {personalDetails.lastName}
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-[11px] text-gray-700">
          <span className="flex items-center">{personalDetails.email}</span>
          <span> {personalDetails.phone}</span>
          <span>{personalDetails.linkedin}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-[11px] text-gray-700">
          <span>{personalDetails.country.label}</span>
          <span> {personalDetails.address}</span>
        </div>
        <div className="border-t-[2px] border-black w-full mt-2"></div>
      </div>

      {/* Objective */}
      <div className="mb-6">
        <h2 className="text-[#4169E1] font-bold text-[14px] -border-b-[1.5px] border-black mb-2 uppercase tracking-wide">
          {objectiveDetails.jobTitle} SUMMARY
        </h2>
        <div className="border-t-[1.5px] border-black w-full"></div>
        <ul className="list-disc pl-5 mt-3 text-[11px]">
          {objectiveDetails.bullets.map((bullet, index) => (
            <li key={index} className="mb-1 text-gray-800">{bullet}</li>
          ))}
        </ul>
      </div>

      {/* Work Experience */}
      <div className="mb-6">
        <h2 className="text-[#4169E1] font-bold text-[14px] -border-b-[1.5px] border-black mb-2 uppercase tracking-wide">
          EMPLOYMENT & -XPERIENCE
        </h2>
        <div className="border-t-[1.5px] border-black w-full"></div>
        {experienceDetails.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline mt-3">
              <div>
                <h3 className="font-bold text-[11px]">{exp.jobTitle}</h3>
                <div className="text-[11px]">{exp.companyName}</div>
              </div>
              <span className="text-[11px] text-gray-600">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <ul className="list-disc pl-5 mt-1">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1 text-[11px] text-gray-800">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-6">
        <h2 className="text-[#4169E1] font-bold text-[14px] -border-b-[1.5px] border-black mb-2 uppercase tracking-wide">
          EDUCATION
          -    </h2>
        <div className="border-t-[1.5px] border-black w-full"></div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="mb-3 mt-3">
            <div className="flex justify-between items-baseline">
              <div>
                <div className="font-bold text-[11px]">{edu.course}</div>
                <div className="text-[11px]">{edu.schoolName}</div>
              </div>
              <span className="text-[11px] text-gray-600">
                {edu.startDate} - {edu.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-[#4169E1] font-bold text-[14px] -border-b-[1.5px] border-black mb-2 uppercase tracking-wide">
          SKILLS
        </h2>
        <div className="border-t-[1.5px] border-black w-full"></div>
        <div className="flex flex-wrap gap-4 mt-3">
          {skillsDetails.map((skill, index) => (
            skill && <div key={index} className="text-[11px]">{skill}</div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div className="mb-6">
        <h2 className="text-[#4169E1] font-bold text-[14px] -border-b-[1.5px] border-black mb-2 uppercase tracking-wide">
          INTERESTS
        </h2>
        <div className="border-t-[1.5px] border-black w-full"></div>
        <div className="text-[11px] mt-3">{interests}</div>
      </div>
    </div>
  );
};

export default ProfessionalBlueTemplate;
