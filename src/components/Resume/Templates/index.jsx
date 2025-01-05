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
      desc: [""],
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
    educationDetails: Array.isArray(formData?.educationDetails.educationDetails)
      ? formData.educationDetails.educationDetails
      : defaultData.educationDetails || [],
  };

  console.log("templates", formData);
  const {
    personalDetails,
    objectiveDetails,
    experienceDetails,
    educationDetails,
    skills,
    interests,
  } = resumeData;

  console.log("res", experienceDetails);
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
                <li key={idx}>{resp}</li>
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

      {educationDetails && educationDetails.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b-2 border-blue-600 mb-4 uppercase">
            Education
          </h2>
          {educationDetails.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <div className="font-bold">{edu.course}</div>
                <div className="text-gray-600 italic">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              <div>{edu.schoolName}</div>
              <ul className="list-disc italic">
                {edu.desc.map((resp, idx) => (
                  <p key={idx}>{resp}</p>
                ))}
              </ul>
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
