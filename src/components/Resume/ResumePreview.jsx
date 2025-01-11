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

export default ResumePreview;
