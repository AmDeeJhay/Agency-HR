// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import siriGif from './path/to/siri.gif'; // Update with the correct path to the GIF

const Home = () => {
  // const [showModal, setShowModal] = useState(false);
  // const history = useHistory();

  // const handleGetStartedClick = () => {
  //   setShowModal(true);
  // };

 

  // const handleModalOptionClick = (option) => {
  //   if (option === 'Resume') {
  //     history.push('/Resume');
  //   } else if (option === 'Cover') {
  //     history.push('/Cover-Letter');
  //   } else if (option === 'prompt') {
  //     history.push('/Chat');
  //   }
  //   setShowModal(false);
  // };

  return (
    <div className="min-h-screen bg-white-900 text-white flex flex-col items-center justify-center px-4 mt-1 md:mt-0">
      {/* Header Section */}
      <header className="text-center mt-10 md:mt-0">
        <h1 className="header-text text-3xl md:text-1xl font-bold font-poppins text-black ">
          Welcome to Agency HR
        </h1>
        <p className="subtext text-lg md:text-xs font-poppins font-medium text-black mt-3 items-center">
          Revolutionizing the way you manage<br /> your human resources with cutting-edge technology.
        </p>
      </header>

      {/* Call to Action Section */}
      <div className="mt-5 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button
          className="cta-button bg-black hover:bg-white border border-black hover:text-black text-white font-poppins  px-6 py-3 rounded-3xl text-xs"
          // onClick={handleGetStartedClick}
        >
          Get Started
        </button>
        <button
          className="cta-button bg-transparent text-black border border-black hover:bg-white hover:text-black px-6 py-3 font-poppins rounded-3xl text-xs"
          
        >
          Learn More
        </button>
      </div>

      {/* Features Section */}
      <section className="my-16 md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="p-6 bg-white shadow-md border border-black rounded-md text-center">
          <h3 className="text-lg text-black font-bold font-poppins">AI-Powered Resume Creation</h3>
          <p className="text-black text-xs text-center mt-2 font-poppins font-medium">
            Create professional resumes in minutes<br /> using our AI-driven technology.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md border border-black rounded-md text-center">
          <h3 className="text-lg text-black font-bold font-poppins">Custom Cover Letters</h3>
          <p className="text-black text-xs text-center mt-2 font-poppins font-medium">
            Generate tailored cover letters that stand out to recruiters.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md border border-black rounded-md text-center">
          <h3 className="text-lg text-black font-bold font-poppins">Interactive Chat Support</h3>
          <p className="text-black text-xs text-center mt-2 font-poppins font-medium">
            Get assistance and advice for job applications directly from our bot.
          </p>
        </div>
      </section>

      {/* Modal */}
      {/* {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center flex">
            {/* <img src={siriGif} alt="AI Lady" className="w-1/2" /> */}
            {/* <div className="w-1/2 text-left">
              <h2 className="text-lg font-bold mb-4">Hi There!!</h2>
              <p className="mb-4">Welcome to Agency HR, what do you want me to help you do today?</p>
              <button
                className="bg-gray-200 text-black px-4 py-2 rounded-md mb-2"
                onClick={() => handleModalOptionClick('Resume')}
              >
                A Resume
              </button>
              <button
                className="bg-gray-200 text-black px-4 py-2 rounded-md mb-2"
                onClick={() => handleModalOptionClick('Cover-letter')}
              >
                A Cover Letter
              </button>
              <button
                className="bg-gray-200 text-black px-4 py-2 rounded-md"
                onClick={() => handleModalOptionClick('prompt')}
              >
                Generate a Prompt
              </button>
            </div> */}
          {/* </div>
        </div>
      )} */} 
    </div>
  );
};

export default Home;