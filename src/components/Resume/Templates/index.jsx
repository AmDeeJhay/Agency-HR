import React from "react";

// Sample default formData
export const defaultData = {
  personalDetails: {
    firstName: "Your FirstName",
    lastName: "LastName",
    email: "email@example.com",
    phone: "(123) 456-7890",
    linkedin: "linkedin.com/in/yourprofile",
  },
  objectiveDetails: {
    jobTitle: "Job Title",
    bullets: ["Bullet Text", "Bullet Text", "Bullet Text"],
  },
  experience: [
    {
      title: "Job Title",
      company: "Company Name",
      dateRange: "2020 - Present",
      responsibilities: ["Your responsibilities"],
    },
  ],
  experienceDetails: [
    {
      jobTitle: "Job Title",
      companyName: "Company Name",
      startDate: "",
      endDate: "",
      responsibilities: ["Your responsibilities"],
    },
  ],
  education: [
    {
      degree: "Your Degree",
      school: "School Name",
      dateRange: "2016 - 2020",
    },
  ],
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  interests: "Your interests and hobbies",
};

const ProfessionalBlueTemplate = ({ formData }) => {
  // Merge provided formData with default formData to ensure all fields exist
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
    experienceDetails: Array.isArray(formData?.experienceDetails)
    ? formData.experienceDetails
    : defaultData.experienceDetails || [],
  };

  console.log('templates',formData)
  const {
    personalDetails,
    objectiveDetails,
    experienceDetails,
    education,
    skills,
    interests,
  } = resumeData;

console.log('res', experienceDetails)
  return (
    <div className="">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-blue-600 font-bold uppercase">
          {personalDetails.firstName} {personalDetails.lastName}
        </h1>
        <div className="text-gray-600 text-sm">
          {personalDetails.email} | {personalDetails.phone}
        </div>
        <div className="text-gray-600 text-sm">{personalDetails.linkedin}</div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-blue-600 mb-4 uppercase text-blue-600">
          {objectiveDetails.jobTitle} Summary
        </h2>
        <ul className="list-disc pl-6">
          {objectiveDetails.bullets.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-blue-600 mb-4 uppercase text-blue-600">
          Employment & Experience
        </h2>
        {experienceDetails.map((job, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <div className="font-bold capitalize">{job.jobTitle}</div>
              <div className="text-gray-600 italic">
                {job.startDate} - {job.endDate}
                </div>
            </div>
            <div className="font-bold">{job.companyName}</div>
            <ul className="list-disc pl-6">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>
                  {resp}
                </li>
              ))}
              {/* .map((resp, idx) => (
                <li key={idx} className="mb-2">
                  {resp}
                </li>
              ))} */}
            </ul>
          </div>
        ))}
      </div>

      {education && education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b-2 border-blue-600 mb-4 uppercase">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <div className="font-bold">{edu.degree}</div>
                <div className="text-gray-600">{edu.dateRange}</div>
              </div>
              <div>{edu.school}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-blue-600 mb-4 uppercase">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-blue-600 mb-4 uppercase">
          Interests
        </h2>
        <div className="text-gray-600">{interests}</div>
      </div>
    </div>
  );
};
export { ProfessionalBlueTemplate }; // ModernPinkTemplate, ClassicBlackTemplate
