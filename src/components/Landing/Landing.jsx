import advice from '../../assets/gif/advice.gif';
import font from '../../assets/gif/font.gif';
import fulfillment from '../../assets/gif/fulfillment.gif';
import resume from '../../assets/gif/resume.gif';
import boss from '../../assets/gif/boss.gif';
import doll from '../../assets/gif/doll.jpg';
import ceo from '../../assets/gif/ceo.gif';
import { Link } from "react-router-dom";
// import templates from '../../assets/gif/templates.png';

const featuresData = [
  {
    id: 1,
    title: 'Expert Tips and Guidance',
    description:
      'Get help every step of the way as you build your resume with expert tips and suggested phrases.',
    icon: advice,
  },
  {
    id: 2,
    title: 'Customized Fonts and Colors',
    description: 'Select custom fonts and colors on any resume template.',
    icon: font,
  },
  {
    id: 3,
    title: 'ATS-Friendly Templates',
    description:
      'Sail through applicant tracking systems with resume templates that appeal to both machines and humans.',
    icon: fulfillment,
  },
  {
    id: 4,
    title: 'Powerful Resume Builder',
    description:
      'Use our potent creation tools and expert guidance to create the perfect resume for your next job application.',
    icon: resume,
  },
  // {
  //   id: 5,
  //   title: 'Multiple Temlates',
  //   description:
  //     'Use our potent creation tools and expert guidance to create the perfect resume for your next job application.',
  //   icon: templates,
  // },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-lg">
        <h1 className="text-3xl md:text-2xl font-bold font-poppins text-black mb-4">
            Create Your Professional Resume Effortlessly
          </h1>  
          <p className="text-black font-poppins text-sm md:text-lg mb-6">
            Build a resume that stands out with our easy-to-use templates  and get closer to your dream job. Empowering you with AI-driven tools to achieve career success.
          </p>
          <button className="bg-black text-white text-sm font-medium font-poppins py-2 px-6 rounded-full hover:bg-white hover:text-black border-black border hover:text-sm transition">
            Learn More
          </button>
        </div>
        <div className="flex gap-8 mt-8 md:mt-0">
          <img src={boss} alt="Icon 1" className="w-30 h-28" />
          <img src={doll} alt="Icon 2" className="w-30 h-28" />
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-white shadow-md border py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Faster Job Offers', value: '+50%' },
            { label: 'More Interviews', value: '+40%' },
            { label: 'Higher Success Rate', value: '+35%' },
            { label: 'Support Available', value: '24/7' },
          ].map((metric, index) => (
            <div key={index}>
              <p className="text-2xl font-bold text-black">{metric.value}</p>
              <p className="text-black font-poppins font-medium text-xs">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <header className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold font-poppins text-black">
            Get Hired 36% Faster with Our Feature-Packed Resume Builder
          </h2>
          <p className="text-black font-sm font-poppins text-sm md:text-lg mt-1">
            Tools designed to help you land your dream job quickly and easily.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((service) => (
            <div
              className="flex flex-col items-center text-center border border-black bg-white shadow-md rounded-lg p-6"
              key={service.id}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-black font-poppins font-sm text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-8">
          <div className="flex gap-4 md:w-1/2 mb-8 md:mb-0 justify-center md:justify-start">
            <img src={ceo} alt="Icon 1" className="w-28 h-28" />
            <img src={doll} alt="Icon 2" className="w-28 h-28" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <header className="mb-4 mt-4">
              <h2 className="text-2xl md:text-3xl font-bold font-poppins text-black">About Us</h2>
            </header>
            <p className="text-black font-poppins text-sm font-sm text-justify md:text-lg">
              At Agentic-HR, we specialize in providing cutting-edge AI tools to make your job search seamless. Whether you
              need a professional resume, personalized interview guidance, or a standout cover letter, we've got you covered. 
              Our chatbot is also accessible directly from the chat page, connecting you to a Telegram bot for real-time 
              assistance. Agentic-HR is your trusted partner in building a successful career.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/resume" className="flex flex-col items-center text-center border border-black bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-medium font-poppins font-semibold text-black mb-2">Create a Resume</h3>
            <p className="text-black font-poppins font-sm text-sm">Use our AI-powered tools to create a professional resume that stands out.</p>
          </Link>
          <Link to="/cover-letter" className="flex flex-col items-center text-center border border-black bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-medium font-poppins font-semibold text-black mb-2">Create a Cover Letter</h3>
            <p className="text-black font-poppins font-sm text-sm">Craft a compelling cover letter tailored to your job application.</p>
          </Link>
          <Link to="/chat" className="flex flex-col items-center text-center border border-black bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-medium font-poppins font-semibold text-black mb-2">Chat with Our AI</h3>
            <p className="text-black font-poppins font-sm text-sm">Get real-time assistance and feedback from our AI chatbot.</p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
