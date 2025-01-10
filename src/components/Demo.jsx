import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCw, Search } from 'lucide-react';

const defaultData = {
  personalDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: ''
  },
  experienceDetails: [],
  educationDetails: [],
  skillsDetails: [],
  objectiveDetails: {
    jobTitle: '',
    bullets: []
  },
  interests: ''
};

// Content height calculations for each section
const calculateSectionHeight = (section) => {
  if (!section) return 0;
  const tempDiv = document.createElement('div');
  tempDiv.style.visibility = 'hidden';
  tempDiv.style.position = 'absolute';
  tempDiv.style.width = '794px'; // A4 width
  tempDiv.innerHTML = section.outerHTML;
  document.body.appendChild(tempDiv);
  const height = tempDiv.offsetHeight;
  document.body.removeChild(tempDiv);
  return height;
};

const ProfessionalBlueTemplate = ({ formData, pageNumber }) => {
  const resumeData = {
    ...defaultData,
    ...formData,
    personalDetails: {
      ...defaultData.personalDetails,
      ...(formData?.personalDetails || {})
    },
    objectiveDetails: {
      ...defaultData.objectiveDetails,
      ...(formData?.objectiveDetails || {})
    }
  };

  const {
    personalDetails,
    objectiveDetails,
    experienceDetails,
    educationDetails,
    skillsDetails,
    interests
  } = resumeData;

  // Only show header on first page
  const showHeader = pageNumber === 0;
  
  return (
    <div className="resume-container text-xs space-y-6">
      {showHeader && (
        <>
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

          {/* Summary Section */}
          <section className="resume-section page-section">
            <h2 className="font-bold border-b-2 border-black mb-4 uppercase text-blue-600">
              {objectiveDetails.jobTitle || 'Professional'} Summary
            </h2>
            <ul className="list-disc pl-6">
              {objectiveDetails.bullets.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </>
      )}

      {/* Experience Section */}
      <section className="resume-section page-section">
        <h2 className="font-bold border-b-2 border-black mb-4 uppercase text-blue-600">
          Work Experience
        </h2>
        {experienceDetails.map((job, index) => (
          <div key={index} className="mb-4 page-break-inside-avoid">
            <div className="flex justify-between">
              <div className="font-bold capitalize">{job.jobTitle}</div>
              <div className="text-gray-600 italic">
                {job.startDate} - {job.endDate}
              </div>
            </div>
            <div className="font-bold">{job.companyName}</div>
            <ul className="list-disc pl-6">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      {educationDetails && educationDetails.length > 0 && (
        <section className="resume-section page-section">
          <h2 className="text-blue-600 font-bold border-b-2 border-black mb-4 uppercase">
            Education
          </h2>
          {educationDetails.map((edu, index) => (
            <div key={index} className="mb-4 page-break-inside-avoid">
              <div className="flex justify-between items-center">
                <div className="font-bold">{edu.course}</div>
                <div className="text-gray-600 italic">
                  {edu.startDate} - {edu.endDate}
                </div>
              </div>
              <div>{edu.schoolName}</div>
              <ul className="list-disc italic pl-6">
                {edu.desc.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Skills Section */}
      {skillsDetails && skillsDetails.length > 0 && (
        <section className="resume-section page-section">
          <h2 className="text-blue-600 font-bold border-b-2 border-black mb-4 uppercase">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skillsDetails.map((skill, index) => (
              skill && (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm"
                >
                  {skill}
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {/* Interests Section */}
      {interests && (
        <section className="resume-section page-section">
          <h2 className="text-blue-600 font-bold border-b-2 border-black mb-4 uppercase">
            Interests
          </h2>
          <div className="text-gray-600">{interests}</div>
        </section>
      )}
    </div>
  );
};

const ResumePreview = ({ formData = {}, selectedTemplate, scale = 1 }) => {
  const A4_WIDTH = 794;
  const A4_HEIGHT = 1123;
  const CONTENT_PADDING = 48;
  const EFFECTIVE_HEIGHT = A4_HEIGHT - (CONTENT_PADDING * 2);

  const [previewScale, setPreviewScale] = useState(0.5);
  const [previewRotation, setPreviewRotation] = useState(0);
  const contentRef = useRef(null);
  const [totalPages, setTotalPages] = useState(1);

  const handleZoomIn = () => setPreviewScale(scale => Math.min(scale + 0.1, 1));
  const handleZoomOut = () => setPreviewScale(scale => Math.max(scale - 0.1, 0.3));
  const handleRotate = () => setPreviewRotation(rotation => (rotation + 90) % 360);

  useEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      const pages = Math.ceil(height / EFFECTIVE_HEIGHT);
      setTotalPages(pages);
    }
  }, [formData, EFFECTIVE_HEIGHT]);

  return (
    <div className="flex-1 relative bg-gray-100 overflow-hidden">
      {/* Preview Controls */}
      <div className="fixed right-1/4 bottom-3 transform -translate-x-1/2 flex items-center gap-2 bg-white rounded-lg shadow-lg p-2 z-10">
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={handleZoomIn}
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={handleZoomOut}
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button 
          className="p-2 hover:bg-gray-100 rounded-full"
          onClick={handleRotate}
        >
          <RotateCw className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Resume Preview Area */}
      <div className="w-full h-full overflow-auto p-8">
        <div
          style={{
            transform: `scale(${previewScale}) rotate(${previewRotation}deg)`,
            transformOrigin: 'center top',
            transition: 'transform 0.2s ease'
          }}
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
                .page-break-inside-avoid {
                  break-inside: avoid;
                  page-break-inside: avoid;
                }
                .page-section {
                  break-inside: avoid;
                  page-break-inside: avoid;
                }
              }

              .resume-content {
                column-count: 1;
                column-fill: auto;
                column-gap: 0;
              }
            `}
          </style>
          
          <div ref={contentRef}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg mx-auto relative mb-8 last:mb-0"
                style={{
                  width: `${A4_WIDTH}px`,
                  minHeight: `${A4_HEIGHT}px`,
                  padding: `${CONTENT_PADDING}px`,
                  breakAfter: 'page',
                }}
              >
                <div 
                  className="absolute top-4 right-4 text-gray-400 text-sm"
                  style={{ userSelect: 'none' }}
                >
                  Page {index + 1} of {totalPages}
                </div>
                <ProfessionalBlueTemplate 
                  formData={formData} 
                  pageNumber={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;