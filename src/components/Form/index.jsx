import { useState } from "react";
import {
  FaUser,
  FaGlobe,
  FaMapMarkerAlt,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import Select from "react-select";
import countryList from "react-select-country-list";

const countryOptions = countryList().getData();
const stateOptions = [
  { value: "state1", label: "State 1" },
  { value: "state2", label: "State 2" },
  // Add more state options as needed
];
export const formConfig = {
  personalDetails: [
    {
      label: "First Name",
      name: "firstName",
      type: "field",
      icon: <FaUser />,
      placeholder: "Firstname",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "field",
      icon: <FaUser />,
      placeholder: "Lastname",
    },
    {
      label: "Email",
      name: "email",
      type: "field",
      icon: <FaEnvelope />,
      placeholder: "email@email.com",
    },
    {
      label: "Phone",
      name: "phone",
      type: "field",
      icon: <FaPhone />,
      placeholder: "(+234)0000000000",
    },
    {
      label: "LinkedIn",
      name: "linkedin",
      type: "field",
      icon: <FaLinkedin />,
      placeholder: "linkedin.com/in/yourprofile",
    },
      { label: "Country", name: "country", type: "select", icon: <FaGlobe />, options: countryOptions, placeholder: "Country" },
      { label: "State/Province", name: "state", type: "select", icon: <FaMapMarkerAlt />, options: stateOptions, placeholder: "State" },
      { label: "Address", name: "address", type: "field", icon: <FaHome />, placeholder: "" },
  ],
  objectiveDetails: [
    {
      label: "Target Job Title",
      name: "jobTitle",
      type: "field",
      icon: null,
      placeholder: "Job Title",
    },
    {
      label: "Bullet",
      name: "jobTitle",
      type: "field",
      icon: null,
      placeholder: "Job Title",
    },
  ],
  contactDetails: [
    {
      label: "Phone",
      name: "phone",
      type: "field",
      icon: <FaPhone />,
      placeholder: "",
    },
    {
      label: "Email",
      name: "email",
      type: "field",
      icon: <FaEnvelope />,
      placeholder: "",
    },
  ],
};

const SkillsForm = ({ data, handleChange, handleNext, handlePrevious }) => {
  const [education, setEducation] = useState(
    data.skillsDetails || [""]
  );

  const handleDescChange = (index, value) => {
    const updatedEducation = [...education];
    updatedEducation[index] = value;
    setEducation(updatedEducation);
    handleChange({
      target: { name: "skillsDetails", value: updatedEducation },
    });
  };

  const addDesc = () => {
    const updatedEducation = [...education, ""];
    setEducation(updatedEducation);
    handleChange({
      target: { name: "skillsDetails", value: updatedEducation },
    });
  };

  const removeDesc = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
    handleChange({
      target: { name: "skillsDetails", value: updatedEducation },
    });
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-black font-poppins mb-4">
        Your Skills
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-2">
          <div className="border p-4 rounded-lg shadow-sm relative">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Add New Skill
              </label>
              {education.map((skill, index) => (
                <div key={index} className="flex items-start gap-2 mb-2">
                  <input
                    value={skill}
                    onChange={(e) => handleDescChange(index, e.target.value)}
                    className="w-full p-2 border rounded-lg min-h-[40px]"
                    placeholder="Insert skill here..."
                  />
                  {education.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDesc(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addDesc}
                className="w-full bg-black hover:bg-black-600 text-white font-poppins font-medium py-2 px-4 rounded-lg"
              >
                Add Skill
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <Button onClick={handlePrevious} text="Previous" />
          <Button onClick={handleNext} text="Next" />
        </div>
      </form>
    </div>
  );
};

const EducationDetailsForm = ({
  data,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  const [education, setEducation] = useState(
    data.educationDetails || [
      {
        schoolName: "",
        course: "",
        startDate: "",
        endDate: "",
        desc: [""],
      },
    ]
  );

  const handleSchoolChange = (index, field, value) => {
    const updatedSchool = [...education];
    updatedSchool[index][field] = value;
    setEducation(updatedSchool);

    // Update the parent state
    handleChange({
      target: { name: "educationDetails", value: updatedSchool },
    });
  };

  const handleAddSchool = () => {
    setEducation([
      ...education,
      {
        schoolName: "",
        course: "",
        startDate: "",
        endDate: "",
        desc: [""],
      },
    ]);
  };

  const handleRemoveSchool = (index) => {
    const updatedSchool = education.filter((_, i) => i !== index);
    setEducation(updatedSchool);

    // Update the parent state
    handleChange({
      target: { name: "educationDetails", value: updatedSchool },
    });
  };

  const handleDescChange = (expIndex, respIndex, value) => {
    const updatedSchool = [...education];
    if (!Array.isArray(updatedSchool[expIndex].desc)) {
      updatedSchool[expIndex].desc = [value];
    } else {
      updatedSchool[expIndex].desc[respIndex] = value;
    }
    setEducation(updatedSchool);
    handleChange({
      target: { name: "educationDetails", value: updatedSchool },
    });
  };

  const addDesc = (expIndex) => {
    const updatedSchool = [...education];
    if (!Array.isArray(updatedSchool[expIndex].desc)) {
      updatedSchool[expIndex].desc = [""];
    } else {
      updatedSchool[expIndex].desc.push("");
    }
    setEducation(updatedSchool);
  };

  const removeDesc = (expIndex, respIndex) => {
    const updatedSchool = [...education];
    updatedSchool[expIndex].desc.splice(respIndex, 1);
    setEducation(updatedSchool);
    handleChange({
      target: { name: "educationDetails", value: updatedSchool },
    });
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-black font-poppins mb-4">
        Education
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-6">
          {education.map((education, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-sm relative"
            >
              <h4 className="text-xs font-bold text-gray-700 mb-2">
                School {index + 1}
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="School Name"
                  name="schoolName"
                  value={education.schoolName}
                  onChange={(e) =>
                    handleSchoolChange(index, "schoolName", e.target.value)
                  }
                  placeholder="School Name"
                />
                <FormField
                  label="Degree/Course"
                  name="course"
                  value={education.course}
                  onChange={(e) =>
                    handleSchoolChange(index, "course", e.target.value)
                  }
                  placeholder="Degree/Course"
                />
                <FormField
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={education.startDate}
                  onChange={(e) =>
                    handleSchoolChange(index, "startDate", e.target.value)
                  }
                  placeholder="Enter start date"
                />
                <FormField
                  label="End Date"
                  name="endDate"
                  value={education.endDate}
                  type="date"
                  onChange={(e) =>
                    handleSchoolChange(index, "endDate", e.target.value)
                  }
                  placeholder="Enter end date"
                />
              </div>
              {/* <div className="mt-4">
                  <FormField
                    label="Your Experience"
                    name="responsibilities"
                    value={experience.responsibilities}
                    onChange={(e) =>
                      handleExperienceChange(index, "responsibilities", e.target.value)
                    }
                    placeholder="Describe your role and achievements"
                  />
                </div> */}

              <div className="mt-4 space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  {"Decription (optional):"}
                </label>
                {
                  education.desc.map((resp, respIndex) => (
                    <div
                      key={respIndex}
                      className="flex items-start gap-2 mb-2"
                    >
                      <div className="flex-grow">
                        <div className="relative">
                          <textarea
                            value={resp}
                            onChange={(e) =>
                                handleDescChange(
                                index,
                                respIndex,
                                e.target.value
                              )
                            }
                            className="w-full p-2 border rounded-lg min-h-[70px] mb-2"
                            placeholder="Insert text here..."
                          />
                        </div>
                      </div>
                      {education.desc.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeDesc(index, respIndex)
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() => addDesc(index)}
                  className="w-full bg-black hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <span>Add</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleRemoveSchool(index)}
                className="absolute top-2 right-2 text-red-500 text-xs"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-start mt-2">
          <button
            type="button"
            onClick={handleAddSchool}
            className="bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-poppins px-4 py-2 rounded-lg text-xs"
          >
            Add New School
          </button>
        </div>

        <div className="flex justify-between mt-4">
          <Button onClick={() => handlePrevious()} text="Previous" />
          <Button onClick={() => handleNext()} text="Next" />
        </div>
      </form>
    </div>
  );
};

const ExperienceDetailsForm = ({
  data,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  const [experiences, setExperiences] = useState(
    data.experienceDetails || [
      {
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        responsibilities: [""],
      },
    ]
  );

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);

    // Update the parent state
    handleChange({
      target: { name: "experienceDetails", value: updatedExperiences },
    });
  };

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
        responsibilities: [""],
      },
    ]);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);

    // Update the parent state
    handleChange({
      target: { name: "experienceDetails", value: updatedExperiences },
    });
  };

  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    const updatedExperiences = [...experiences];
    if (!Array.isArray(updatedExperiences[expIndex].responsibilities)) {
      updatedExperiences[expIndex].responsibilities = [value];
    } else {
      updatedExperiences[expIndex].responsibilities[respIndex] = value;
    }
    setExperiences(updatedExperiences);
    handleChange({
      target: { name: "experienceDetails", value: updatedExperiences },
    });
  };

  const addResponsibility = (expIndex) => {
    const updatedExperiences = [...experiences];
    if (!Array.isArray(updatedExperiences[expIndex].responsibilities)) {
      updatedExperiences[expIndex].responsibilities = [""];
    } else {
      updatedExperiences[expIndex].responsibilities.push("");
    }
    setExperiences(updatedExperiences);
  };

  const removeResponsibility = (expIndex, respIndex) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[expIndex].responsibilities.splice(respIndex, 1);
    setExperiences(updatedExperiences);
    handleChange({
      target: { name: "experienceDetails", value: updatedExperiences },
    });
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-black font-poppins mb-4">
        Work Experience
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-sm relative"
            >
              <h4 className="text-xs font-bold text-gray-700 mb-2">
                Experience {index + 1}
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  label="Job Title"
                  name="jobTitle"
                  value={experience.jobTitle}
                  onChange={(e) =>
                    handleExperienceChange(index, "jobTitle", e.target.value)
                  }
                  placeholder="Enter job title"
                />
                <FormField
                  label="Company Name"
                  name="companyName"
                  value={experience.companyName}
                  onChange={(e) =>
                    handleExperienceChange(index, "companyName", e.target.value)
                  }
                  placeholder="Enter company name"
                />
                <FormField
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={experience.startDate}
                  onChange={(e) =>
                    handleExperienceChange(index, "startDate", e.target.value)
                  }
                  placeholder="Enter start date"
                />
                <FormField
                  label="End Date"
                  name="endDate"
                  value={experience.endDate}
                  type="date"
                  onChange={(e) =>
                    handleExperienceChange(index, "endDate", e.target.value)
                  }
                  placeholder="Enter end date"
                />
              </div>
              {/* <div className="mt-4">
                  <FormField
                    label="Your Experience"
                    name="responsibilities"
                    value={experience.responsibilities}
                    onChange={(e) =>
                      handleExperienceChange(index, "responsibilities", e.target.value)
                    }
                    placeholder="Describe your role and achievements"
                  />
                </div> */}

              <div className="mt-4 space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Your Experience
                </label>
                {
                  experience.responsibilities.map((resp, respIndex) => (
                    <div
                      key={respIndex}
                      className="flex items-start gap-2 mb-2"
                    >
                      <div className="flex-grow">
                        <div className="relative">
                          <textarea
                            value={resp}
                            onChange={(e) =>
                              handleResponsibilityChange(
                                index,
                                respIndex,
                                e.target.value
                              )
                            }
                            className="w-full p-2 border rounded-lg min-h-[70px] mb-2"
                            placeholder="Describe your responsibility..."
                          />
                        </div>
                      </div>
                      {experience.responsibilities.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeResponsibility(index, respIndex)
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() => addResponsibility(index)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <span>Add</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleRemoveExperience(index)}
                className="absolute top-2 right-2 text-red-500 text-xs"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-start mt-2">
          <button
            type="button"
            onClick={handleAddExperience}
            className="bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-poppins px-4 py-2 rounded-lg text-xs"
          >
            Add New Experience
          </button>
        </div>

        <div className="flex justify-between mt-4">
          <Button onClick={() => handlePrevious()} text="Previous" />
          <Button onClick={() => handleNext()} text="Next" />
        </div>
      </form>
    </div>
  );
};

const ObjectiveDetailsForm = ({
  data,
  handleChange,
  handleNext,
  handlePrevious,
}) => {
  const [bullets, setBullets] = useState(data.bullets || ["",]); // Initialize with three bullets

  // Add a new bullet field
  const handleAddBullet = () => {
    setBullets([...bullets, ""]);
  };

  // Update the value of a specific bullet
  const handleBulletChange = (index, value) => {
    const updatedBullets = [...bullets];
    updatedBullets[index] = value;
    setBullets(updatedBullets);

    // Update the parent state
    handleChange({ target: { name: "bullets", value: updatedBullets } });
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-black font-poppins mb-4">
        Objective
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-6">
          {/* Target Job Title */}
          <FormField
            label="Target Job Title"
            name="jobTitle"
            value={data.jobTitle || ""}
            onChange={handleChange}
            placeholder="Job Title"
          />

          {/* Dynamic Bullets */}
          {bullets.map((bullet, index) => (
            <FormTextArea
              key={index}
              label={`Bullet ${index + 1}`}
              name={`bullet-${index}`}
              value={bullet}
              onChange={(e) => handleBulletChange(index, e.target.value)}
              placeholder="Enter bullet point"
            />
          ))}
        </div>

        {/* Add New Bullet Button */}
        <div className="flex justify-start mt-2">
          <button
            type="button"
            onClick={handleAddBullet}
            className="bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-poppins px-4 py-2 rounded-lg text-xs"
          >
            Add New Bullet
          </button>
        </div>

        {/* Next Button */}
        <div className="flex justify-between mt-4">
          <Button onClick={() => handlePrevious()} text="Previous" />
          <Button onClick={() => handleNext()} text="Next" />
        </div>
      </form>
    </div>
  );
};

const PersonalDetailsForm = ({ data, handleChange, handleCountryChange, handleStateChange, handleNext }) => {
  
  return (
    <div>
      <h3 className="text-sm font-semibold text-black font-poppins mb-4">
        Personal Details
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-6">
          {formConfig.personalDetails.map((field) => {
            const value = data[field.name]; // Dynamically get the value from props

            return field.type === "field" ? (
              <FormField
                key={field.name}
                label={field.label}
                name={field.name}
                value={value}
                onChange={handleChange}
                icon={field.icon}
                placeholder={field.placeholder}
              />
            ) : (
              <FormSelect
                key={field.name}
                label={field.label}
                name={field.name}
                value={value}
                options={field.options}
                onChange={
                  field.name === "country"
                    ? handleCountryChange
                    : handleStateChange
                }
                icon={field.icon}
              />
            );
          })}
        </div>
        <div className="flex justify-start mt-4">
          <button
            type="button"
            onClick={() => handleNext("personalDetails")}
            className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins px-6 py-3 rounded-3xl text-xs"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

const FormField = ({ type, name, value, onChange, icon, placeholder }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
);

const FormTextArea = ({ type, name, value, onChange, icon, placeholder, className }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <textarea
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm max-h-[60px]"
    />
  </div>
);

const FormSelect = ({ label, name, value, options, onChange, icon }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <Select
      name={name}
      value={value}
      options={options}
      onChange={onChange}
      className="w-full"
    />
  </div>
);

const InterestForm = ({ data, handleChange }) => {
  const [interests, setInterests] = useState(
    data.interestsDetails || [""]
  );

  const handleDescChange = (index, value) => {
    const updatedInterests = [...interests];
    updatedInterests[index] = value;
    setInterests(updatedInterests);
    handleChange({
      target: { name: "interestsDetails", value: updatedInterests },
    });
  };

  const addDesc = () => {
    const updatedInterests = [...interests, ""];
    setInterests(updatedInterests);
    handleChange({
      target: { name: "interestsDetails", value: updatedInterests },
    });
  };

  const removeDesc = (index) => {
    const updatedInterests = interests.filter((_, i) => i !== index);
    setInterests(updatedInterests);
    handleChange({
      target: { name: "interestsDetails", value: updatedInterests },
    });
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-black font-poppins mb-4">
        Your Interests
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-2">
          <div className="border p-4 rounded-lg shadow-sm relative">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Add Interests
              </label>
              {interests.map((skill, index) => (
                <div key={index} className="flex items-start gap-2 mb-2">
                  <input
                    value={skill}
                    onChange={(e) => handleDescChange(index, e.target.value)}
                    className="w-full p-2 border rounded-lg min-h-[40px]"
                    placeholder="What are your interests..."
                  />
                  {interests.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeDesc(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addDesc}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
              >
                Add Interests
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const Button = ({ text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins px-6 py-3 rounded-3xl text-xs"
  >
    {text}
  </button>
);

export { Button, PersonalDetailsForm, ObjectiveDetailsForm, ExperienceDetailsForm, EducationDetailsForm, SkillsForm, InterestForm };
