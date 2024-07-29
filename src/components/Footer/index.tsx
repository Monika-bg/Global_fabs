import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import logo from "../../assets/images/gflogo.jpg"; // Update with the correct path to your logo

const Footer = () => {
  return (
    
    <div className="w-full bg-[#333333] pt-[60px] px-8 pb-[30px] mt-[60px]">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-start justify-between gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-3 w-full lg:w-auto">
          <span className="font-medium text-[#FFF] text-[20px] mb-2">Quick Links</span>
          <a
            href="/"
            className="text-[#FFF] font-medium text-[15px] mb-1 transition duration-300 ease-in-out hover:text-orange-500 hover:underline"
          >
            Home
          </a>
          <a
            href="#intro"
            className="text-[#FFF] font-medium text-[15px] mb-1 transition duration-300 ease-in-out hover:text-orange-500 hover:underline"
          >
            About Us
          </a>
          <a
            href="#collections"
            className="text-[#FFF] font-medium text-[15px] mb-1 transition duration-300 ease-in-out hover:text-orange-500 hover:underline"
          >
            Products
          </a>
          <a
            href="#gallery"
            className="text-[#FFF] font-medium text-[15px] mb-1 transition duration-300 ease-in-out hover:text-orange-500 hover:underline"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-[#FFF] font-medium text-[15px] transition duration-300 ease-in-out hover:text-orange-500 hover:underline"
          >
            Contact
          </a>
        </div>

        {/* Center Section */}
        <div className="flex flex-col gap-5 flex-grow items-center lg:items-start max-w-full lg:max-w-[750px]">
          <div className="flex items-center">
            <img src={logo} alt="Global Fabricators Logo" className="h-10 mr-3" />
            <span className="font-semibold text-[#FFF] text-[28px]">Global Fabricators</span>
          </div>
          <p className="mt-3 text-white text-center lg:text-left">
            Global Fabricators Pvt. Ltd., based in Bengaluru, is a premier manufacturer specializing in UPVC, PVC, and aluminum windows and doors. Our diverse product range is designed to meet the highest standards of quality and aesthetics.
          </p>
          <p className="text-[#FFF] font-medium text-[10px] mt-[1cm] text-center lg:text-left">Copyright ©2024 | Powered by Global Fabricators</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5 w-full lg:w-auto items-center lg:items-start">
          <span className="font-medium text-[#FFF] text-[20px] mb-3">Follow Us</span>
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/7848048953"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center bg-green-600 rounded-full p-3 transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105"
            >
              <FaWhatsapp color="white" className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/global_fabricators"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center bg-pink-600 rounded-full p-3 transition duration-300 ease-in-out transform hover:bg-pink-700 hover:scale-105"
            >
              <FaInstagram color="white" className="text-xl" />
            </a>
            <a
              href="mailto:globalfabsblr@gmail.com"
              aria-label="Email"
              className="flex items-center justify-center bg-blue-500 rounded-full p-3 transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
            >
              <FaEnvelope color="white" className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
