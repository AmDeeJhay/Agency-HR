const Footer = () => {
    return (
      <footer className="bg-black text-white font-poppins font-sm text-sm py-2 z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold font-poppins">Agency HR</h2>
            <p className="text-sm font-poppins">© 2024 Agency HR. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
            <a href="/contact" className="hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;