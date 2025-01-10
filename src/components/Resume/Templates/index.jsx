import React from "react";

// Sample default formData
export const defaultData = {
  personalDetails: {
    firstName: "Your FirstName",
    lastName: "LastName",
    email: "email@example.com",
    phone: "(123) 456-7890",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/yourprofile",
    address: "youraddress"
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
  };

  const {
    personalDetails,
    objectiveDetails,
    experience,
    education,
    skills,
    interests,
  } = resumeData;

  return (
    <div className="">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-black font-bold font-poppins text-medium uppercase">
          {personalDetails.firstName} {personalDetails.lastName}
        </h1>
        <div className="text-gray-600 font-poppins text-sm">
          {personalDetails.email} | {personalDetails.phone}
        </div>
        <div className="text-gray-600  font-poppins text-sm">{personalDetails.linkedin}</div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-gray-500 mb-4 uppercase">
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
        <h2 className="text-lg font-bold border-b-2 border-gray-500 mb-4 uppercase">
          Experience
        </h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <div className="font-bold">{job.title}</div>
              <div className="text-gray-600">{job.dateRange}</div>
            </div>
            <div className="font-bold mb-2">{job.company}</div>
            <ul className="list-disc pl-6">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-2">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {education && education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b-2 border-gray-500 mb-4 uppercase">
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
        <h2 className="text-lg font-bold border-b-2 border-gray-500 mb-4 uppercase">
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
        <h2 className="text-lg font-bold border-b-2 border-gray-500 mb-4 uppercase">
          Declration
        </h2>
        <div className="text-gray-600">{interests}</div>
      </div>
    </div>
  );
};
export { ProfessionalBlueTemplate }; // ModernPinkTemplate, ClassicBlackTemplate
