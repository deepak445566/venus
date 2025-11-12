import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-[15vh] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20  bg-black/40  ">
      {/* Logo */}
      <a href="https://prebuiltui.com" className="text-white big text-2xl">
        <h1>Venus Geyser Service</h1>
      </a>
<div className="flex items-center gap-20">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-10 text-white big text-xl font-medium">
        <li>
          <a className="hover:text-[#1447E6] transition-colors duration-200" href="#">
            HOME
          </a>
        </li>
        <li>
          <a className="hover:text-[#1447E6] transition-colors duration-200" href="#">
            ABOUT
          </a>
        </li>
        <li>
          <a className="hover:text-[#1447E6] transition-colors duration-200" href="#">
        SERVICES
          </a>
        </li>
        <li>
          <a className="hover:text-[#1447E6] transition-colors duration-200" href="#">
           BLOG
          </a>
        </li>
        <li>
          <a className="hover:text-[#1447E6] transition-colors duration-200" href="#">
         CONTACT
          </a>
        </li>
      </ul>

      {/* Desktop Button */}
      <button
        type="button"
        className="hidden md:inline-flex bg-[#1447E6] text-white text-md font-medium w-40 h-11 rounded-2xl mont items-center justify-center"
      >
        Get started
      </button>
</div>
      {/* Mobile Menu Button */}
      <button
        aria-label="menu-btn"
        type="button"
        className="inline-block md:hidden active:scale-90 transition-transform"
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-[70px] left-0 w-full  p-6 md:hidden transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4">
          <li>
            <a href="#" className="text-sm hover:text-gray-500/80 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-500/80 transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-500/80 transition-colors">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-gray-500/80 transition-colors">
              Pricing
            </a>
          </li>
        </ul>

        <button
          type="button"
          className=" text-gray-600 border border-gray-300 mt-6 text-sm hover:bg-gray-50 active:scale-95 transition-all w-40 h-11 rounded-full"
        >
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;