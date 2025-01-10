import React, { useState } from "react";
import jsPDF from "jspdf";
import { Download } from "lucide-react";

const DownloadResume = ({ resumeRef }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async () => {
    try {
      setIsGenerating(true);
      const element = resumeRef.current;

      // Check if resumeRef is pointing to the correct element
      if (!element) {
        throw new Error("Resume content not found. Please check the resumeRef.");
      }

      // Log element to verify it's correct
      console.log("Element to render:", element);

      // Initialize jsPDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
        precision: 16,
      });

      // Render the content into the PDF
      await pdf.html(element, {
        callback: (pdfInstance) => {
          const timestamp = new Date().toISOString().split("T")[0];
          pdfInstance.save(`resume_${timestamp}.pdf`);
        },
        x: 0, // Add left margin
        y: 0, // Add top margin
        width: 190, // A4 width minus margins (210mm - 20mm)
        windowWidth: 794, // A4 width in pixels at 96 DPI
        html2canvas: {
          scale: 0.25, // Reduced scale for better fitting
          useCORS: true,
          logging: true,
          backgroundColor: "#ffffff",
          allowTaint: true,
          onclone: (clonedDoc) => {
            const style = clonedDoc.createElement('style');
            style.innerHTML = `
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
            `;
            clonedDoc.head.appendChild(style);
          }
        },
      });

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={downloadPDF}
      disabled={isGenerating}
      className={`p-2 rounded-full transition-colors ${isGenerating ? "bg-gray-100 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      title="Download Resume"
    >
      <Download className="w-5 h-5" />
    </button>
  );
};

export default DownloadResume;
