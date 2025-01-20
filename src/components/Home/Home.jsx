import { Link } from "react-router-dom";

const Home = () => {
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
      <Link
          to="/landing"
          className="cta-button bg-black hover:bg-white border border-black hover:text-black text-white font-poppins px-6 py-3 rounded-3xl text-xs"
        >
          Get Started
        </Link>
        <Link
          to="/landing#faq"
          className="cta-button bg-transparent text-black border border-black hover:bg-white hover:text-black px-6 py-3 font-poppins rounded-3xl text-xs"
        >
          Learn More
        </Link>
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
    </div>
  );
};

export default Home;