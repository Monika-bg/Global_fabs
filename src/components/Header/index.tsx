import { useState, useEffect } from 'react';
import { IoChevronDown, IoLogoInstagram, IoChevronUp } from 'react-icons/io5';
import { IoLogoGoogle } from 'react-icons/io';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import bg from "../../assets/images/bimg.jpg";
import logo from "../../assets/images/gflogo.jpg";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const navItems = [
    { path: "/", title: "Home" },
    { path: "#intro", title: "About Us" },
    { path: "#collections", title: "Our Products" },
    { path: "#gallery", title: "Gallery" },
    { path: "#contact", title: "Contact" },
  ];

  const serviceItems = [
    { path: "/designs#upvc", title: "UPVC" },
    { path: "/designs#pvc", title: "PVC" },
    { path: "/designs#aluminium", title: "Aluminium" },
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
      if (window.scrollY > 300) { // Adjust the scroll position as needed
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
      <div className="flex items-center justify-between absolute top-5 z-50 w-full md:px-[150px] px-5">
        <div className="flex items-center">
          <img src={logo} alt="Global Fabricators Logo" className="h-10 mr-3" />
          <div className="text-white font-semibold text-[30px]">Global Fabricators</div>
        </div>
        <div className="items-center lg:flex hidden gap-5">
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
              Our Services <IoChevronDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg">
                {serviceItems.map((item) => (
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
        <div className="flex items-center gap-5">
          <a
            href="https://wa.me/7848048953"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center text-white text-3xl transition duration-300 ease-in-out transform hover:text-orange-500 hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/global_fabricators"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center text-white text-3xl transition duration-300 ease-in-out transform hover:text-orange-500 hover:scale-110"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="mailto:globalfabsblr@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center text-white text-3xl transition duration-300 ease-in-out transform hover:text-orange-500 hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google"
            className="flex items-center justify-center text-white text-3xl transition duration-300 ease-in-out transform hover:text-orange-500 hover:scale-110"
          >
            <IoLogoGoogle />
          </a>
          <div
            className="fixed bottom-4 left-4 bg-orange-500 rounded-full flex flex-col items-center justify-center cursor-pointer animate-bounce z-60"
            style={{ width: '80px', height: '80px' }}
            onClick={() => window.location.href = "tel:7848048953"}
          >
            <FaPhone className="text-black text-xl font-bold mb-1" />
            <span className="text-black text-sm font-semibold">Call Us</span>
          </div>
          {showScrollToTop && (
        <div
          className="fixed bottom-4 right-4 bg-black text-orange-500 rounded-full flex items-center justify-center cursor-pointer  z-60"
          style={{ width: '60px', height: '60px' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <IoChevronUp className="text-3xl" />
        </div>
      )}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-20"></div>
      <div className="flex flex-col gap-2 items-center z-50">
        <div className="text-white lg:text-[60px] text-[40px] font-semibold text-center">
          Crafting Quality & Style
        </div>
        <p className="text-gray-300 text-[15px] text-center lg:max-w-[700px] max-w-[450px]">
          Build your home with the experts at Global Fabricators, featuring the finest UPVC, PVC, and aluminum windows and doors.
        </p>
      </div>
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
