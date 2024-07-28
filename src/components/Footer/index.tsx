
import {  FaEnvelope,  FaWhatsapp, FaInstagram, } from 'react-icons/fa';
import logo from "../../assets/images/gflogo.jpg"; // Update with the correct path to your logo

const Footer = () => {
  return (
    <div className="w-full bg-[#333333] pt-[60px] lg:px-[150px] px-8 pb-[30px] mt-[60px]">
      <div className="w-full flex lg:flex-row flex-col lg:items-start justify-between lg:gap-0 gap-8">
        {/* Left Section */}
        <div className="flex flex-col gap-3 w-[4cm]">
          <span className="font-medium text-[#FFF] text-[20px] mb-2">Quick Links</span>
          <a href="/" className="text-[#FFF] font-medium text-[15px] mb-1">Home</a>
          <a href="#intro" className="text-[#FFF] font-medium text-[15px] mb-1">About Us</a>
          <a href="#collections" className="text-[#FFF] font-medium text-[15px] mb-1">Products</a>
          <a href="#gallery" className="text-[#FFF] font-medium text-[15px] mb-1">Gallery</a>
          <a href="#contact" className="text-[#FFF] font-medium text-[15px]">Contact</a>
        </div>

        {/* Center Section */}
        <div className="flex flex-col gap-5 flex-grow items-center max-w-[750px] mx-auto ml-[1cm]">
          <div className="flex items-center">
            <img src={logo} alt="Global Fabricators Logo" className="h-10 mr-3" />
            <span className="font-semibold text-[#FFF] text-[28px]">Global Fabricators</span>
          </div>
          <p className="mt-3 text-white text-center">
            Global Fabricators Pvt. Ltd., based in Bengaluru, is a premier manufacturer specializing in UPVC, PVC, and aluminum windows and doors. Our diverse product range is designed to meet the highest standards of quality and aesthetics.
          </p>
          <p className="text-[#FFF] font-medium text-[10px] mt-[1cm]">Copyright ©2024 | Powered by Global Fabricators</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5 w-[8cm] ml-[2cm]">
          <span className="font-medium text-[#FFF] text-[20px] mb-3 ml-[3cm]">Follow Us</span>
          <div className="flex items-center gap-5 ml-[2cm]">
            <a
              href="https://wa.me/7848048953"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center bg-green-600 rounded-full p-3"
            >
              <FaWhatsapp
                color="white"
                className="text-xl"
              />
            </a>
            <a
              href="https://www.instagram.com/global_fabricators"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center bg-pink-600 rounded-full p-3"
            >
              <FaInstagram
                color="white"
                className="text-xl"
              />
            </a>
            <a
              href="mailto:globalfabsblr@gmail.com"
              aria-label="Email"
              className="flex items-center justify-center bg-blue-500 rounded-full p-3"
            >
              <FaEnvelope
                color="white"
                className="text-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
