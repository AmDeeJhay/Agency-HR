// Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between px-4 py-2">
      <div className="text-lg font-bold">Agency HR</div>
      <ul className="flex space-x-4">
        <li><a to="/Resume" className="hover:text-gray-300">Create Resume</a></li>
        <li><a to="/Cover-Letter" className="hover:text-gray-300">Cover Letter</a></li>
        <li><a to="/Chat" className="hover:text-gray-300">Chat</a></li>
      </ul>
      <div className="flex items-center space-x-2">
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-2 py-1 rounded-md text-black"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
