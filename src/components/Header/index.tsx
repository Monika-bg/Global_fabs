import { useState, useEffect } from "react";
import { IoChevronDown, IoChevronUp, IoMenu, IoClose } from "react-icons/io5";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import bg from "../../assets/images/bimg.jpg";
import logo from "../../assets/images/gflogo.jpg";

interface NavItem {
  path: string;
  title: string;
}

const Header = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [showScrollToTop, setShowScrollToTop] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { path: "/", title: "Home" },
    { path: "#intro", title: "About Us" },
    { path: "#collections", title: "Services" },
    { path: "#gallery", title: "Gallery" },
    { path: "#contact", title: "Contact" },
  ];

  const productItems: NavItem[] = [
    { path: "/designs#upvc", title: "UPVC" },
    { path: "/designs#aluminium", title: "Aluminium" },
    { path: "/designs#mosquito-mesh", title: "Mosquito Mesh" },
  ];

  const handleNavigation = (path: string): void => {
    if (path.startsWith("#")) {
      const element = document.querySelector<HTMLElement>(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = path;
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full h-screen relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-60">
        <div className="flex items-center justify-between px-4 md:px-10 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Global Fabricators Logo"
              className="h-12 sm:h-16 w-auto"
            />
            <span className="text-white font-bold text-lg sm:text-2xl ml-3">
              Global Fabricators
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="text-white hover:text-orange-500 transition"
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
                className="text-white hover:text-orange-500 flex items-center transition"
              >
                Products <IoChevronDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-white text-black shadow-lg mt-2 rounded-md">
                  {productItems.map((item) => (
                    <a
                      key={item.title}
                      href={item.path}
                      className="block px-4 py-2 hover:bg-gray-200"
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-90 p-5">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="block text-white py-2"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.path);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="text-center z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Crafting Quality & Style
        </h1>
        <p className="text-gray-300 mt-3 max-w-md mx-auto">
          Build your home with Global Fabricators, featuring premium UPVC,
          Aluminum windows, doors, and mosquito mesh.
        </p>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-4 right-4 flex space-x-3 hidden lg:flex">
        <a
          href="https://wa.me/7848048953"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-green-500 text-3xl" />
        </a>
        <a
          href="https://www.instagram.com/global_fabricators"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="text-blue-500 text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default Header;
