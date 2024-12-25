import { useState, useEffect } from 'react';
import { IoChevronDown, IoLogoInstagram, IoChevronUp, IoMenu } from 'react-icons/io5';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import bg from "../../assets/images/bimg.jpg";
import logo from "../../assets/images/gflogo.jpg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const navItems = [
    { path: "/", title: "Home" },
    { path: "#intro", title: "About Us" },
    { path: "#collections", title: "Services" },
    { path: "#gallery", title: "Gallery" },
    { path: "#contact", title: "Contact" },
  ];

  const productItems = [
    { path: "/designs#upvc", title: "UPVC" },
    { path: "/designs#aluminium", title: "Aluminium" },
    { path: "/designs#mosquito-mesh", title: "Mosquito Mesh" },
  ];

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = path;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full h-screen relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center justify-between absolute top-5 z-50 w-full px-5 md:px-[150px]">
        {/* Brand Section (Logo and Text) */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <img
            src={logo}
            alt="Global Fabricators Logo"
            className="h-12 sm:h-16 mb-4 sm:mb-0 w-16"
          />
          <div className="text-white font-semibold text-[18px] sm:text-[28px]">Global Fabricators</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              href={item.path}
              key={item.title}
              className="text-white no-underline font-light transition duration-300 ease-in-out transform hover:text-orange-500 hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.path);
              }}
            >
              {item.title}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white no-underline font-light flex items-center transition duration-300 ease-in-out transform hover:text-orange-500 hover:scale-105"
            >
              Products <IoChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg w-60">
                {productItems.map((item) => (
                  <a
                    href={item.path}
                    key={item.title}
                    className="block px-4 py-2 text-black hover:bg-gray-200 hover:text-orange-500 transition duration-300 ease-in-out"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.path);
                    }}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Social Media Icons (Visible Only on Large Screens) */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="https://www.instagram.com/global_fabricators/" target="_blank" rel="noopener noreferrer">
            <IoLogoInstagram className="text-white text-2xl hover:text-orange-500" />
          </a>
          <a href="https://wa.me/7676886843" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-white text-2xl hover:text-orange-500" />
          </a>
          <a href="mailto:info@globalfabricators.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="text-white text-2xl hover:text-orange-500" />
          </a>
        </div>

        {/* Mobile Navigation Menu (for smaller screens) */}
        <div className="lg:hidden flex items-center justify-between w-full">
          <div className="flex items-center gap-4 sm:gap-6">
            {navItems.map((item) => (
              <a
                href={item.path}
                key={item.title}
                className="text-white no-underline font-light transition duration-300 ease-in-out transform hover:text-orange-500 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.path);
                }}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Icon (only visible on small screens) */}
          <button
            className="text-white lg:hidden block"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <IoMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-20"></div>

      {/* Main Content */}
      <div className="flex flex-col gap-2 items-center z-50">
        <div className="text-white lg:text-[60px] text-[40px] font-semibold text-center">
          Crafting Quality & Style
        </div>
        <p className="text-gray-300 text-[15px] text-center lg:max-w-[700px] max-w-[450px]">
          Build your home with the experts at Global Fabricators, featuring the finest UPVC, Aluminium windows and doors, and Mosquito Mesh.
        </p>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-5 w-full px-[150px] z-50 flex items-center justify-center">
        <IoChevronDown
          color="white"
          width="30px"
          height="30px"
          className="animate-bounce"
          aria-label="Scroll Down"
        />
      </div>
    </div>
  );
};

export default Header;
