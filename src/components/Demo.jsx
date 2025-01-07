// import React from 'react';
import PropTypes from 'prop-types';

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
  const mergedData = { ...defaultData, ...data };

  return (
    <div>
      <h1>{mergedData.personalInfo.name}</h1>
      <p>{mergedData.personalInfo.email}</p>
      <p>{mergedData.personalInfo.phone}</p>
      <p>{mergedData.personalInfo.linkedIn}</p>
      <h2>Summary</h2>
      <ul>
        {mergedData.summary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Experience</h2>
      {mergedData.experience.map((job, index) => (
        <div key={index}>
          <h3>{job.title} at {job.company}</h3>
          <p>{job.dateRange}</p>
          <ul>
            {job.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2>Education</h2>
      {mergedData.education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree} from {edu.school}</h3>
          <p>{edu.dateRange}</p>
        </div>
      ))}
      <h2>Skills</h2>
      <ul>
        {mergedData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>Interests</h2>
      <p>{mergedData.interests}</p>
    </div>
  );
};

// Define prop types
Demo.propTypes = {
  data: PropTypes.shape({
    personalInfo: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      linkedIn: PropTypes.string,
    }),
    summary: PropTypes.arrayOf(PropTypes.string),
    experience: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      company: PropTypes.string,
      dateRange: PropTypes.string,
      responsibilities: PropTypes.arrayOf(PropTypes.string),
    })),
    education: PropTypes.arrayOf(PropTypes.shape({
      degree: PropTypes.string,
      school: PropTypes.string,
      dateRange: PropTypes.string,
    })),
    skills: PropTypes.arrayOf(PropTypes.string),
    interests: PropTypes.string,
  }),
};

// Define default props
Demo.defaultProps = {
  data: defaultData,
};

// Example usage
const DemoComponent = () => (
  <Demo />
);

export default DemoComponent;