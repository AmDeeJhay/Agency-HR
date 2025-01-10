import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { ProfessionalBlueTemplate } from "./Templates";

const ResumePreview = ({ formData, selectedTemplate, scale = 1 }) => {
    const {personalDetails} = formData
  // A4 dimensions in pixels (assuming 96 DPI)
  // A4 is 210mm × 297mm, which is approximately 794px × 1123px
  const A4_WIDTH = 794;
  const A4_HEIGHT = 1123;

//   Zoom
const [previewScale, setPreviewScale] = useState(0.5);
// const [previewRotation, setPreviewRotation] = useState(0);

const handleZoomIn = () => setPreviewScale(scale => Math.min(scale + 0.1, 1));
const handleZoomOut = () => setPreviewScale(scale => Math.max(scale - 0.1, 0.3));
// const handleRotate = () => setPreviewRotation(rotation => (rotation + 90) % 360);

  return (
    <div className="flex-1 relative bg-gray-100 overflow-hidden">
      {/* Preview Controls */}
      <div className="fixed right-9 bottom-3 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded-lg shadow-lg p-2 z-10">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ZoomIn className="w-5 h-5" onClick={handleZoomIn}/>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full" onClick={handleZoomOut}>
          <ZoomOut className="w-5 h-5" />
        </button>
        {/* <button className="p-2 hover:bg-gray-100 rounded-full">
          <RotateCw className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search className="w-5 h-5" />
        </button> */}
      </div>

      {/* A4 Paper Preview */}
      <div className="w-full h-full overflow-auto p-8 flex items-center justify-center">
        <div
          className="bg-white shadow-lg transform-gpu"
          style={{
            width: `${A4_WIDTH * scale}px`,
            height: `${A4_HEIGHT * scale}px`,
            transform: `scale(${scale})`,
            transformOrigin: "center top",
            transition: "transform 0.2s ease",
          }}
        >
          {/* Resume Content */}
          <div className="w-full h-full p-12 overflow-hidden">
            <ProfessionalBlueTemplate formData={formData} />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            optio possimus voluptatum nulla aspernatur deserunt reprehenderit
            nemo excepturi esse sunt hic dolore natus magni quibusdam eos, id
            eius minus porro!
            {/* {selectedTemplate === 'template1' && (
              <ProfessionalTemplate formData={formData} />
            )}
            {selectedTemplate === 'template2' && (
              <ModernTemplate formData={formData} />
            )}
            {selectedTemplate === 'template3' && (
              <ClassicTemplate formData={formData} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Example template component
// const ProfessionalTemplate = ({ formData }) => {
//   const { personalDetails, contactDetails, workDetails, skills } = formData;
// console.log(personalDetails)
//   return (
//     <div className="h-full">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">
//           {personalDetails.firstName} {personalDetails.lastName}
//         </h1>
//         <div className="text-gray-600 mt-2 space-x-4">
//           <span>{contactDetails.email}</span>
//           <span>{contactDetails.phone}</span>
//         </div>
//       </div>

//       {/* Professional Summary */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">
//           Professional Summary
//         </h2>
//         <p className="text-gray-700">{personalDetails.summary}</p>
//       </div>

//       {/* Work Experience */}
//       <div className="mb-6">
//         <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">
//           Work Experience
//         </h2>
//         {workDetails.map((job, index) => (
//           <div key={index} className="mb-4">
//             <h3 className="font-bold">{job.jobTitle}</h3>
//             <p className="text-gray-600">{job.employer}</p>
//             <p className="text-gray-500">
//               {job.startDate} - {job.endDate}
//             </p>
//             <p className="text-gray-700 mt-2">{job.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Skills */}
//       <div>
//         <h2 className="text-xl font-bold border-b-2 border-gray-300 mb-3">
//           Skills
//         </h2>
//         <div className="flex flex-wrap gap-2">
//           {skills.map((skill, index) => (
//             <span
//               key={index}
//               className="bg-gray-100 px-3 py-1 rounded-full text-gray-700"
//             >
//               {skill.skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default ResumePreview;
