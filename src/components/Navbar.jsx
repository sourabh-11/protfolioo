
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">MyLogo</Link>
      </div>

      {/* Navigation Links with Icons */}
      <div className="flex space-x-6">
        {/* Home */}
        <Link
          to="/"
          className="flex items-center space-x-2 group"
        >
          <FaHome className="text-xl group-hover:text-green-400 transition duration-300" />
          <span className="group-hover:text-green-400 transition duration-300">
            Home
          </span>
        </Link>

        {/* About Us */}
        <Link
          to="/about"
          className="flex items-center space-x-2 group"
        >
          <FaInfoCircle className="text-xl group-hover:text-green-400 transition duration-300 " />
          <span className="group-hover:text-green-400 transition duration-300">
            About Us
          </span>
        </Link>

        {/* Projects */}
        <Link
          to="/projects"
          className="flex items-center space-x-2 group"
        >
          <FaProjectDiagram className="text-xl group-hover:text-green-400 transition duration-300 " />
          <span className="group-hover:text-green-400 transition duration-300">
            Projects
          </span>
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          className="flex items-center space-x-2 group"
        >
          <FaEnvelope className="text-xl group-hover:text-green-400 transition duration-300" />
          <span className="group-hover:text-green-400 transition duration-300">
            Contact
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
