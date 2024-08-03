import React, { useState } from 'react';
import { IoChevronDown, IoLogoInstagram } from 'react-icons/io5';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import logo from "../../assets/images/gflogo.jpg";

const HeaderTop: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { path: "/", title: "Home" },
    { path: "#intro", title: "About Us" },
    { path: "#collections", title: "Services" },
    { path: "#gallery", title: "Gallery" },
    { path: "#contact", title: "Contact" },
  ];

  const serviceItems = [
    { path: "/designs#upvc", title: "UPVC" },
    { path: "/designs#pvc", title: "Aluminium" },
    { path: "/designs#aluminium", title: "Mosquito Mesh" },
  ];

  const handleNavigation = (path: string) => {
    if (path.startsWith("/")) {
      window.location.href = path;
    } else {
      window.location.href = "/";
      setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between absolute top-0 z-50 w-full">
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
            Products <IoChevronDown className="ml-1" />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg w-60">
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
          className="flex items-center justify-center"
        >
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaWhatsapp className="text-white text-2xl" />
          </div>
        </a>
        <a
          href="https://www.instagram.com/global_fabricators"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex items-center justify-center"
        >
          <div className="bg-gradient-to-r from-purple-400 to-pink-600 p-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
            <IoLogoInstagram className="text-white text-2xl" />
          </div>
        </a>
        <a
          href="mailto:globalfabsblr@gmail.com"
          aria-label="Email"
          className="flex items-center justify-center"
        >
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-2 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
            <FaEnvelope className="text-white text-2xl" />
          </div>
        </a>
        <div
          className="fixed bottom-4 left-4 bg-orange-500 rounded-full flex flex-col items-center justify-center cursor-pointer animate-bounce z-60"
          style={{ width: '80px', height: '80px' }}
          onClick={() => window.location.href = "tel:7848048953"}
        >
          <FaPhone className="text-black text-xl font-bold mb-1" />
          <span className="text-black text-sm font-semibold">Call Us</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
