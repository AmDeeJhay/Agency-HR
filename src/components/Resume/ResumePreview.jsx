import { useRef, useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import ProfessionalBlueTemplate from "./Templates";
import DownloadResume from "./DownloadResume";

const ResumePreview = ({ formData, selectedTemplate }) => {
  const contentRef = useRef();
  const [previewScale, setPreviewScale] = useState(0.7);

  const handleZoomIn = () => setPreviewScale(scale => Math.min(scale + 0.1, 1));
  const handleZoomOut = () => setPreviewScale(scale => Math.max(scale - 0.1, 0.3));

  return (
    <div className="flex-1 relative bg-gray-100 overflow-auto">
      {/* Preview Controls */}
      <div className="fixed  bottom-10 flex items-center gap-2 bg-white rounded-lg shadow-lg p-2 z-10">
        <button
          onClick={handleZoomIn}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <DownloadResume resumeRef={contentRef} />
      </div>

      {/* Resume Preview Area */}
      <div className="min-h-screen flex justify-center">
        <div
          style={{
            transform: `scale(${previewScale})`,
            transformOrigin: "top center",
            transition: "transform 0.2s ease",
          }}
        >
          <div
            ref={contentRef}
            className="bg-white shadow-lg mx-auto"
            style={{
              width: "210mm",
              minHeight: "297mm",
              padding: "10mm",
              boxSizing: "border-box",
              margin: "0 auto",
            }}
          >
            <ProfessionalBlueTemplate formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ResumePreview;
