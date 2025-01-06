import React from 'react';

// Sample default data
const defaultData = {
  personalInfo: {
    name: "Your Name",
    email: "email@example.com",
    phone: "(123) 456-7890",
    linkedIn: "linkedin.com/in/yourprofile"
  },
  summary: ["Your professional summary"],
  experience: [{
    title: "Job Title",
    company: "Company Name",
    dateRange: "2020 - Present",
    responsibilities: ["Your responsibilities"]
  }],
  education: [{
    degree: "Your Degree",
    school: "School Name",
    dateRange: "2016 - 2020"
  }],
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  interests: "Your interests and hobbies"
};

const Demo = ({ data = defaultData }) => {
  // Merge provided data with default data to ensure all fields exist
  const resumeData = {
    ...defaultData,
    ...data,
    personalInfo: {
      ...defaultData.personalInfo,
      ...(data?.personalInfo || {})
    }
  };

  const {
    personalInfo,
    summary,
    experience,
    education,
    skills,
    interests
  } = resumeData;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-2xl text-blue-600 font-bold uppercase">
          {personalInfo.name}
        </h1>
        <div className="text-gray-600 text-sm">
          {personalInfo.email} | {personalInfo.phone}
        </div>
        <div className="text-gray-600 text-sm">
          {personalInfo.linkedIn}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-blue-600 mb-4 uppercase">
          Summary
        </h2>
        <ul className="list-disc pl-6">
          {summary.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold border-b-2 border-blue-600 mb-4 uppercase">
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
                <li key={idx} className="mb-2">{resp}</li>
              ))}
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
        <div className="text-gray-600">
          {interests}
        </div>
      </div>
    </div>
  );
};

// Example usage
export default () => (
  <Demo />
);