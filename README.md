# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Overview
Resume Builder is a web application that allows users to create and customize their resumes. Users can fill in their personal details, education, experience, skills, and interests. The application provides a preview of the resume and allows users to download it as a PDF. Additionally, the project is powered by AI to assist users in generating a cover letter and providing prompts based on user input.

Features
Personal Details: Users can enter their personal information such as name, email, phone number, and LinkedIn profile.
Objective: Users can add a career objective to their resume.
Experience: Users can list their work experience.
Education: Users can add their educational background.
Skills: Users can list their skills.
Interests: Users can add their interests and hobbies.
Resume Preview: Users can preview their resume in real-time.
Download as PDF: Users can download their resume as a PDF file.
AI-Powered Cover Letter: The application can generate a cover letter based on the user's input.
AI Chat Section: Users can interact with an AI to generate prompts and get assistance with their resume.

Installation
Clone the repository:

Install the dependencies:

Start the development server:

Usage
Open the application in your browser:

Fill in the required fields in each section (Personal Details, Objective, Experience, Education, Skills, Interests).

Use the sidebar to navigate between sections.

Preview your resume in the Resume Preview section.

Click the "Download Resume" button to download your resume as a PDF.

Use the AI-powered features to generate a cover letter and get prompts based on your input.

Components
ResumePage
The main component that handles the form sections and the resume preview.

PersonalDetailsForm
A form component for entering personal details.

InterestForm
A form component for entering interests and hobbies.

ResumePreview
A component that displays the resume preview.

DownloadResume
A component that handles the PDF generation and download functionality.

Dependencies

react: A JavaScript library for building user interfaces.
react-select: A flexible and customizable select input control for React.
react-select-country-list: A country list for react-select.
jspdf: A library to generate PDF documents in JavaScript.
lucide-react: A collection of simple and beautiful icons.
Dev Dependencies
eslint: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
tailwindcss: A utility-first CSS framework for rapidly building custom user interfaces.
vite: A build tool that aims to provide a faster and leaner development experience for modern web projects.