const Landing = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Create Your Professional Resume Effortlessly
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Build a resume that stands out with our easy-to-use templates and get
            closer to your dream job.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white font-medium py-2 px-6 rounded hover:bg-gray-800 transition">
              Learn More
            </button>
            {/* <button className="bg-white border border-black text-black font-medium py-2 px-6 rounded hover:bg-gray-100 transition">
              Learn More
            </button> */}
          </div>
        </div>

        {/* Right Content
        <div className="relative mt-8 md:mt-0">
          {/* Background Layers */}
          {/* <div className="absolute -top-8 -left-8 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full filter blur-lg z-0"></div>
          <div className="absolute top-4 left-4 w-60 h-60 md:w-88 md:h-88 bg-gradient-to-tr from-white to-gray-100 rounded-full shadow-lg z-10"></div> */}
        {/* </div> */} 
      </section>

      {/* Metrics Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-black">+50%</p>
            <p className="text-gray-600 text-sm">Faster Job Offers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-black">+40%</p>
            <p className="text-gray-600 text-sm">More Interviews</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-black">+35%</p>
            <p className="text-gray-600 text-sm">Higher Success Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-black">24/7</p>
            <p className="text-gray-600 text-sm">Support Available</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
            Get hired 36% faster with our feature-packed and easy-to-use resume builder app
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-left">
              <p className="text-pink-500 text-2xl mb-4">🎯</p>
              <h3 className="text-lg font-bold text-black mb-2">Powerful resume builder</h3>
              <p className="text-gray-600 text-sm">
                Use our potent creation tools and expert guidance to create the perfect resume for your next job application.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-left">
              <p className="text-purple-500 text-2xl mb-4">📄</p>
              <h3 className="text-lg font-bold text-black mb-2">Professional templates</h3>
              <p className="text-gray-600 text-sm">
                Choose from 25+ applicant tracking systems (ATS)-friendly modern and professional templates.
              </p> 
            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-left">
              <p className="text-pink-500 text-2xl mb-4">🎨</p>
              <h3 className="text-lg font-bold text-black mb-2">Customize fonts and colors</h3>
              <p className="text-gray-600 text-sm">
                Select custom fonts and colors on any resume template.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-left">
              <p className="text-pink-500 text-2xl mb-4">📚</p>
              <h3 className="text-lg font-bold text-black mb-2">Free resume examples</h3>
              <p className="text-gray-600 text-sm">
                Use our more than 500 resume examples and templates to see what a great resume looks like in your field.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-left">
              <p className="text-purple-500 text-2xl mb-4">🖥️</p>
              <h3 className="text-lg font-bold text-black mb-2">ATS-friendly templates</h3>
              <p className="text-gray-600 text-sm">
                Sail through applicant tracking systems with resume templates that appeal to both machines and humans.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-left">
              <p className="text-pink-500 text-2xl mb-4">💡</p>
              <h3 className="text-lg font-bold text-black mb-2">Expert tips and guidance</h3>
              <p className="text-gray-600 text-sm">
                Get help every step of the way as you build your resume with expert tips and suggested phrases.
              </p>
            </div>
          </div>
          {/* <div className="mt-10">
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white py-3 px-8 rounded-lg font-medium shadow-md hover:shadow-lg transition">
              Get Started Now
            </button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Landing;
