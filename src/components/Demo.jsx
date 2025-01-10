import PropTypes from 'prop-types';

const Demo = ({ data = defaultData }) => {
  const {
    personalDetails,
    objectiveDetails,
    experienceDetails,
    educationDetails,
    skillsDetails,
    interests
  } = data;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white items-center p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">{personalDetails.name}</h1>
        <p className="mb-2">{personalDetails.email}</p>
        <p className="mb-2">{personalDetails.phone}</p>
        <p className="mb-2">{personalDetails.address}</p>
        <p className="mb-2">{personalDetails.country}</p>
        <p className="mb-4">{personalDetails.state}</p>
        <p className="mb-4">{personalDetails.linkedIn}</p>
        <h2 className="text-xl font-semibold mb-2">Objective</h2>
        <p className="mb-4">{objectiveDetails}</p>
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <ul className="list-disc list-inside mb-4">
          {summary.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Education Section */}
        {educationDetails && educationDetails.length > 0 && (
          <section className="resume-section page-section">
            <h2 className="text-black font-bold border-b-2 border-black mb-4 uppercase">
              Education
            </h2>
            {educationDetails.map((edu, index) => (
              <div key={index} className="mb-4 page-break-inside-avoid">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-sm">{edu.school}</p>
                <p className="text-sm">{edu.dateRange}</p>
              </div>
            ))}
          </section>
        )}

        {/* Experience Section */}
        {experienceDetails && experienceDetails.length > 0 && (
          <section className="resume-section page-section">
            <h2 className="text-black font-bold border-b-2 border-black mb-4 uppercase">
              Experience
            </h2>
            {experienceDetails.map((job, index) => (
              <div key={index} className="mb-4 page-break-inside-avoid">
                <h3 className="text-lg font-semibold">{job.title}</h3>
                <p className="text-sm">{job.company}</p>
                <p className="text-sm">{job.dateRange}</p>
                <ul className="list-disc list-inside">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Skills Section */}
        {skillsDetails && skillsDetails.length > 0 && (
          <section className="resume-section page-section">
            <h2 className="text-black font-bold border-b-2 border-black mb-4 uppercase">
              Skills
            </h2>
            <ul className="list-disc list-inside">
              {skillsDetails.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Interests Section */}
        {interests && (
          <section className="resume-section page-section">
            <h2 className="text-black font-bold border-b-2 border-black mb-4 uppercase">
              Interests
            </h2>
            <p>{interests}</p>
          </section>
        )}
      </div>
    </div>
  );
};

// Define prop types
Demo.propTypes = {
  data: PropTypes.shape({
    personalDetails: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      linkedIn: PropTypes.string,
    }),
    objectiveDetails: PropTypes.string,
    experienceDetails: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      company: PropTypes.string,
      dateRange: PropTypes.string,
      responsibilities: PropTypes.arrayOf(PropTypes.string),
    })),
    educationDetails: PropTypes.arrayOf(PropTypes.shape({
      degree: PropTypes.string,
      school: PropTypes.string,
      dateRange: PropTypes.string,
    })),
    skillsDetails: PropTypes.arrayOf(PropTypes.string),
    interests: PropTypes.string,
  }),
};

// Define default props
Demo.defaultProps = {
  data: {
    personalDetails: {
      name: "Your Name",
      email: "email@example.com",
      phone: "(123) 456-7890",
      linkedIn: "linkedin.com/in/yourprofile"
    },
    objectiveDetails: "Your objective details",
    experienceDetails: [{
      title: "Job Title",
      company: "Company Name",
      dateRange: "2020 - Present",
      responsibilities: ["Your responsibilities"]
    }],
    educationDetails: [{
      degree: "Your Degree",
      school: "School Name",
      dateRange: "2016 - 2020"
    }],
    skillsDetails: ["Skill 1", "Skill 2", "Skill 3"],
    interests: "Your interests and hobbies"
  },
};

export default Demo;