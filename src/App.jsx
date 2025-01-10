import './output.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Cover from './components/Cover-Letter/Cover-Letter';
import Chat from './components/Chats/Chat';
import Footer from './components/Footer/Footer';
import "./resume.css"
// import ResumeApp from './components/Demo';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/cover-letter" element={<Cover />} />
            <Route path="/chat" element={<Chat />} />
            {/* <Route path="/app" element={<ResumeApp />} /> */}
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;