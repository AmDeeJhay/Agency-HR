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
  skillsDetails: ["Skill 1", "Skill 2", "Skill 3"],
  interests: "Your interests and hobbies",
};

const ProfessionalBlueTemplate = ({ formData, pageNumber }) => {
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
    skillsDetails: Array.isArray(formData?.skillsDetails.skillsDetails)
      ? formData.skillsDetails.skillsDetails
      : defaultData.skillsDetails || [],
  };

  const {
    personalDetails,
    objectiveDetails,
    experienceDetails,
    educationDetails,
    skillsDetails,
    interests,
  } = resumeData;

  const showHeader = pageNumber === 0;
  
  const splitIntoPages = (content, totalPages) => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        <div
          key={i}
          className="bg-white shadow-lg mx-auto relative"
          style={{
            width: `${A4_WIDTH}px`,
            height: `${A4_HEIGHT}px`,
            marginBottom: "2rem",
            padding: "48px",
            breakAfter: "page",
          }}
        >
          <div
            className="absolute top-4 right-4 text-gray-400 text-sm"
            style={{ userSelect: "none" }}
          >
            Page {i + 1} of {totalPages}
          </div>
          <div
            style={{
              transform: `translateY(${-i * A4_HEIGHT}px)`,
              transformOrigin: "top left",
            }}
          >
            {content}
          </div>
        </div>
      );
    }
    return pages;
  };

  return (
    <div className="resume-container text-xs">
      {/* Header Section */}
      <section className="resume-section page-section">
        <div className="text-center">
          <h1 className="text-xl text-blue-600 font-bold uppercase mb-2">
            {personalDetails.firstName} {personalDetails.lastName}
          </h1>
          <div className="text-gray-600 flex justify-between border-b-2 border-black">
            <div>{personalDetails.email}</div>
            <div>{personalDetails.phone}</div>
            <div>{personalDetails.linkedin}</div>
          </div>
        </div>
      </section>

      <section className="resume-section mb-3 page-section">
        <h2 className="font-bold border-b-2 border-black mb-4 uppercase text-blue-600">
          {objectiveDetails.jobTitle} Summary
        </h2>
        <ul className="list-disc pl-6">
          {objectiveDetails.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6 resume-section page-section">
        <h2 className="font-bold border-b-2 border-black mb-4 uppercase text-blue-600">
          Work Experience
        </h2>
        {experienceDetails.map((job, index) => (
          <div key={index} className="page-break-inside-avoid mb-4">
            <div className="flex justify-between">
              <div className="font-bold capitalize">{job.jobTitle}</div>
              <div className="text-gray-600 italic">
                {job.startDate} - {job.endDate}
              </div>
            </div>
            <div className="font-bold">{job.companyName}</div>
            <ul className="list-disc pl-6">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {educationDetails && educationDetails.length > 0 && (
        <section className="mb-6 resume-section page-section">
          <h2 className="text-blue-600 font-bold border-b-2 border-black mb-4 uppercase">
            Education
          </h2>
          {educationDetails.map((edu, index) => (
            <div key={index} className="page-break-inside-avoid mb-4">
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
        </section>
      )}

      <section className="mb-6 resume-section page-section">
        <h2 className="text-blue-600 font-bold border-b-2 border-black mb-4 uppercase">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skillsDetails.map((skill, index) => {
            if (skill !== "")
              return (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm"
                >
                  {skill}
                </div>
              );
          })}
        </div>
      </section>

      <section className="mb-6 resume-section page-section">
        <h2 className="text-blue-600 font-bold border-b-2 border-black mb-4 uppercase">
          Interests
        </h2>
        <div className="text-gray-600">{interests}</div>
      </section>
    </div>
  );
};
export { ProfessionalBlueTemplate }; // ModernPinkTemplate, ClassicBlackTemplate
