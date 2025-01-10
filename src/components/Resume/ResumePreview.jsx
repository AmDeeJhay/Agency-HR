import { useRef, useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { ProfessionalBlueTemplate } from "./Templates";

const ResumePreview = ({ formData, selectedTemplate, scale = 1 }) => {
  const A4_WIDTH = 794;
  const A4_HEIGHT = 1123;

  const contentRef = useRef(null)
//   Zoom
const [previewScale, setPreviewScale] = useState(0.5);
const [previewRotation, setPreviewRotation] = useState(0);

const handleZoomIn = () => setPreviewScale(scale => Math.min(scale + 0.1, 1));
const handleZoomOut = () => setPreviewScale(scale => Math.max(scale - 0.1, 0.3));
const handleRotate = () => setPreviewRotation(rotation => (rotation + 90) % 360);

  return (
    <div className="flex-1 relative bg-gray-50 overflow-hidden">
      {/* Preview Controls */}
      <div className="fixed right-9 bottom-3 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded-lg shadow-lg p-2 z-10">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ZoomIn className="w-5 h-5" onClick={handleZoomIn}/>
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={handleZoomOut}
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        {/* <button className="p-2 hover:bg-gray-100 rounded-full">
          <RotateCw className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search className="w-5 h-5" />
        </button> */}
      </div>

      {/* Resume Preview Area */}
      <div className="w-full h-full overflow-auto p-8">
        <div
          style={{
            transform: `scale(${previewScale}) rotate(${previewRotation}deg)`,
            transformOrigin: "center top",
            transition: "transform 0.2s ease",
          }}
          ref={contentRef}
        >
          <style>
            {`
              @media print {
                @page {
                  size: A4;
                  margin: 0;
                }
                body {
                  margin: 0;
                  padding: 0;
                }
                .page-break {
                  break-after: page;
                  page-break-after: always;
                }
                .no-break {
                  break-inside: avoid;
                  page-break-inside: avoid;
                }
              }

              .resume-content {
                column-count: 1;
                column-fill: auto;
                column-gap: 0;
              }

              .section {
                break-inside: avoid;
                page-break-inside: avoid;
              }
            `}
          </style>

          {/* <div className="resume-content" ref={contentRef}> */}
          {/* {splitIntoPages( */}
          <ResumePage pageNumber={1} totalPages={1}>
            {/* <div className="w-full h-full"> */}
            <ProfessionalBlueTemplate formData={formData} />

            {/* </div> */}
          </ResumePage>
          {/* )} */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

const ResumePage = ({ children, pageNumber, totalPages }) => {
  return (
    <div
      className="bg-white shadow-lg mx-auto relative mb-8 last:mb-0"
      style={{
        width: "794px", // A4 width
        minHeight: "1123px", // A4 height
        padding: "48px",
      }}
    >
      <div
        className="absolute top-4 right-4 text-gray-400 text-sm"
        style={{ userSelect: "none" }}
      >
        Page {pageNumber} of {totalPages}
      </div>
      <div className="h-full">{children}</div>
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
