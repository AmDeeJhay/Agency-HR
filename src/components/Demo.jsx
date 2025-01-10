// import React from "react";
// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   Font,
// } from "@react-pdf/renderer";

// // Registering fonts (optional)
// Font.register({
//   family: "Roboto",
//   fonts: [
//     { src: "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf" }, // Regular
//     { src: "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lbBP.ttf", fontWeight: "bold" }, // Bold
//   ],
// });

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     fontSize: 10,
//     fontFamily: "Roboto",
//     lineHeight: 1.5,
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: 10,
//   },
//   sectionTitle: {
//     fontSize: 12,
//     fontWeight: "bold",
//     color: "#007BFF",
//     marginBottom: 5,
//     borderBottom: 1,
//     borderBottomColor: "black",
//   },
//   detailsRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 5,
//   },
//   listItem: {
//     marginLeft: 10,
//     marginBottom: 2,
//   },
//   skillBadge: {
//     backgroundColor: "#E3F2FD",
//     color: "#007BFF",
//     padding: 5,
//     borderRadius: 15,
//     marginRight: 5,
//     marginBottom: 5,
//   },
// });

// const ResumePDF = ({ data }) => {
//   const {
//     personalDetails,
//     objectiveDetails,
//     experienceDetails,
//     educationDetails,
//     skillsDetails,
//     interests,
//   } = data;

//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         {/* Header Section */}
//         <View style={styles.header}>
//           <Text style={{ fontSize: 16, fontWeight: "bold", color: "#007BFF" }}>
//             {personalDetails.firstName} {personalDetails.lastName}
//           </Text>
//           <View style={styles.detailsRow}>
//             <Text>{personalDetails.email}</Text>
//             <Text>{personalDetails.phone}</Text>
//             <Text>{personalDetails.linkedin}</Text>
//           </View>
//         </View>

//         {/* Objective Section */}
//         <View style={{ marginBottom: 10 }}>
//           <Text style={styles.sectionTitle}>
//             {objectiveDetails.jobTitle} Summary
//           </Text>
//           <View>
//             {objectiveDetails.bullets.map((item, index) => (
//               <Text key={index} style={styles.listItem}>
//                 • {item}
//               </Text>
//             ))}
//           </View>
//         </View>

//         {/* Work Experience Section */}
//         <View style={{ marginBottom: 10 }}>
//           <Text style={styles.sectionTitle}>Work Experience</Text>
//           {experienceDetails.map((job, index) => (
//             <View key={index} style={{ marginBottom: 5 }}>
//               <View style={styles.detailsRow}>
//                 <Text style={{ fontWeight: "bold" }}>{job.jobTitle}</Text>
//                 <Text>{job.startDate} - {job.endDate}</Text>
//               </View>
//               <Text style={{ fontWeight: "bold" }}>{job.companyName}</Text>
//               <View>
//                 {job.responsibilities.map((resp, idx) => (
//                   <Text key={idx} style={styles.listItem}>
//                     • {resp}
//                   </Text>
//                 ))}
//               </View>
//             </View>
//           ))}
//         </View>

//         {/* Education Section */}
//         {educationDetails && educationDetails.length > 0 && (
//           <View style={{ marginBottom: 10 }}>
//             <Text style={styles.sectionTitle}>Education</Text>
//             {educationDetails.map((edu, index) => (
//               <View key={index} style={{ marginBottom: 5 }}>
//                 <View style={styles.detailsRow}>
//                   <Text style={{ fontWeight: "bold" }}>{edu.course}</Text>
//                   <Text>{edu.startDate} - {edu.endDate}</Text>
//                 </View>
//                 <Text>{edu.schoolName}</Text>
//                 {edu.desc.map((desc, idx) => (
//                   <Text key={idx} style={styles.listItem}>
//                     • {desc}
//                   </Text>
//                 ))}
//               </View>
//             ))}
//           </View>
//         )}

//         {/* Skills Section */}
//         <View style={{ marginBottom: 10 }}>
//           <Text style={styles.sectionTitle}>Skills</Text>
//           <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
//             {skillsDetails.map((skill, index) => (
//               skill && (
//                 <Text key={index} style={styles.skillBadge}>
//                   {skill}
//                 </Text>
//               )
//             ))}
//           </View>
//         </View>

//         {/* Interests Section */}
//         <View>
//           <Text style={styles.sectionTitle}>Interests</Text>
//           <Text>{interests}</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// import React from "react";
// import ReactPDF, { PDFDownloadLink } from "@react-pdf/renderer";

// const data = {
//   personalDetails: {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     phone: "123-456-7890",
//     linkedin: "linkedin.com/in/johndoe",
//   },
//   objectiveDetails: {
//     jobTitle: "Software Engineer",
//     bullets: ["Innovative developer with 5+ years of experience.", "Expert in backend technologies."],
//   },
//   experienceDetails: [
//     {
//       jobTitle: "Senior Developer",
//       companyName: "TechCorp",
//       startDate: "Jan 2020",
//       endDate: "Present",
//       responsibilities: ["Developed scalable APIs.", "Led the team of 10 developers."],
//     },
//   ],
//   educationDetails: [
//     {
//       course: "Bachelor's in Computer Science",
//       schoolName: "University of Tech",
//       startDate: "2015",
//       endDate: "2019",
//       desc: ["Graduated with honors.", "Active in tech communities."],
//     },
//   ],
//   skillsDetails: ["JavaScript", "Node.js", "React", "Python"],
//   interests: "Reading, Hiking, Gaming",
// };

// function App() {
//   return (
//     <div>
//       <h1>React Resume Generator</h1>
//       <PDFDownloadLink
//         document={<ResumePDF data={data} />}
//         fileName="John-Doe-Resume.pdf"
//         style={{
//           textDecoration: "none",
//           padding: "10px 20px",
//           backgroundColor: "#007BFF",
//           color: "#fff",
//           borderRadius: "5px",
//         }}
//       >
//         {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
//       </PDFDownloadLink>
//     </div>
//   );
// }

// export default App;

