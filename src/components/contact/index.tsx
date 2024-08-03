import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaClock } from 'react-icons/fa';
import logo from "../../assets/images/gflogo.jpg"; // Update with the correct path to your logo

const Contact = () => {
  return (
    <div id="contact" className="w-full p-8 bg-[#ffffff]">
      <div className="max-w-screen-lg mx-auto bg-[#f9d6a0] shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex items-start mb-12"> {/* Increased margin-bottom */}
          <img src={logo} alt="Global Fabricators Logo" className="h-24 mr-6" /> {/* Larger logo */}
          <div>
            <h1 className="text-4xl font-bold text-black">Global Fabricators</h1> {/* Heading */}
            <p className="text-lg text-black mt-2">Contact Us</p> {/* Contact Us */}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6 mt-8"> {/* Added margin-top */}
            <div className="flex items-center relative group">
              <div className="p-3 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 transition-transform transform group-hover:scale-110">
                <FaPhone className="text-white text-2xl" />
              </div>
              <a href="tel:7848048953" className="text-lg text-black ml-4">+91 78480 48953</a> {/* Phone */}
              <div className="absolute left-0 -top-5 ml-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Phone
              </div>
            </div>
            <div className="flex items-center relative group">
              <div className="p-3 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 transition-transform transform group-hover:scale-110">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <a href="mailto:globalfabsblr@gmail.com" className="text-lg text-black ml-4">globalfabsblr@gmail.com</a> {/* Email */}
              <div className="absolute left-0 -top-5 ml-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </div>
            </div>
            <div className="flex items-center relative group">
              <div className="p-3 rounded-full shadow-lg bg-gradient-to-r from-green-400 to-green-600 transition-transform transform group-hover:scale-110">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <a href="https://wa.me/918048048953" className="text-lg text-black ml-4">Chat with us on WhatsApp</a> {/* WhatsApp */}
              <div className="absolute left-0 -top-5 ml-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                WhatsApp
              </div>
            </div>
            <div className="flex items-center relative group">
              <div className="p-3 rounded-full shadow-lg bg-gradient-to-r from-purple-400 to-pink-600 transition-transform transform group-hover:scale-110">
                <FaInstagram className="text-white text-2xl" />
              </div>
              <a href="https://www.instagram.com/global_fabricators" className="text-lg text-black ml-4">global_fabricators</a> {/* Instagram */}
              <div className="absolute left-0 -top-5 ml-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Instagram
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 mt-[-3.5rem]">
              <div className="flex items-center relative group">
                <div className="p-3 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-600 transition-transform transform group-hover:scale-110">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <p className="text-lg text-black ml-4">No.5 Arasappa Layout, Agara Main Road, Thathaguni, Bengaluru - 560062</p> {/* Address */}
                <div className="absolute left-0 -top-5 ml-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Location
                </div>
              </div>
              <div className="flex items-center relative group">
                <div className="p-3 rounded-full shadow-lg bg-gradient-to-r from-gray-400 to-gray-600 transition-transform transform group-hover:scale-110">
                  <FaClock className="text-white text-2xl" />
                </div>
                <p className="text-lg text-black ml-4">9 AM to 8 PM</p> {/* Timings */}
                <div className="absolute left-0 -top-5 ml-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Timings
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-[400px]">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=No.5%20Arasappa%20Layout,%20Agara%20Main%20Road,%20Thathaguni,%20Bengaluru%20-%20560109+(Global%20Fabricators)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
