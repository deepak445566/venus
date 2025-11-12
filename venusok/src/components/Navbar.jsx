import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const handleform=()=>{
  navigate("/form")
}
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="h-[13vh] w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-white shadow-sm relative z-20">
      {/* Logo */}
      <Link to="/" className="text-black text-2xl font-semibold big">
        Venus Geyser Service
      </Link>

      <div className="flex items-center gap-20">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-black text-xl font-medium big">
          <li>
            <Link
              className="hover:text-[#1447E6] transition-colors duration-200"
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#1447E6] transition-colors duration-200"
              to="/about"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#1447E6] transition-colors duration-200"
              to="/services"
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#1447E6] transition-colors duration-200"
              to="/blog"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#1447E6] transition-colors duration-200"
              to="/contact"
            >
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <button onClick={handleform}
          type="button"
          className="hidden md:inline-flex bg-[#1447E6] text-white text-md font-medium w-40 h-11 rounded-2xl items-center justify-center hover:bg-[#0f3ccf] transition-all"
        >
          Get Quote
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        className="inline-block md:hidden active:scale-90 transition-transform"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="black"
        >
          <path d="M3 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3zm0 7a1 1 0 100 2h24a1 1 0 100-2H3z" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[13vh] left-0 w-full bg-white p-6 md:hidden shadow-md transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-black">
          <li>
            <Link
              to="/"
              className="text-base hover:text-[#1447E6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-base hover:text-[#1447E6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-base hover:text-[#1447E6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-base hover:text-[#1447E6] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="bg-[#1447E6] text-white mt-6 text-base hover:bg-[#0f3ccf] active:scale-95 transition-all w-full h-11 rounded-full"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
