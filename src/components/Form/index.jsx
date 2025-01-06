import { useState } from "react";
import {
  FaUser,
  FaGlobe,
  FaMapMarkerAlt,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaPlus,
  FaTrash,
  FaLink,
  FaMinus,
  FaLinkedinIn,
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
    //   { label: "Country", name: "country", type: "select", icon: <FaGlobe />, options: countryOptions, placeholder: "Country" },
    //   { label: "State/Province", name: "state", type: "select", icon: <FaMapMarkerAlt />, options: stateOptions, placeholder: "State" },
    //   { label: "Address", name: "address", type: "field", icon: <FaHome />, placeholder: "" },
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

const ObjectiveDetailsForm = ({ data, handleChange, handleNext, handlePrevious }) => {
  const [bullets, setBullets] = useState(data.bullets || ["", "", ""]); // Initialize with three bullets

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
            <FormField
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

const PersonalDetailsForm = ({ data, handleChange, handleNext }) => {
  console.log(data);
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

const FormField = ({ label, name, value, onChange, icon, placeholder }) => (
  <div>
    <label className="flex place-items-center gap-2 font-medium font-poppins text-black text-xs">
      {icon} {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
);

const FormSelect = ({ label, value, options, onChange, icon }) => (
  <div>
    <label className="block font-medium font-poppins text-black text-xs">
      {icon} {label}
    </label>
    <Select
      options={options}
      value={value}
      onChange={onChange}
      className="mt-1"
      required
    />
  </div>
);

const Button = ({ text, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-black hover:bg-white border border-black hover:text-black text-white font-poppins px-6 py-3 rounded-3xl text-xs"
  >
    {text}
  </button>
);

export { PersonalDetailsForm, ObjectiveDetailsForm };
