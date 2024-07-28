
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaClock } from 'react-icons/fa';
import logo from "../../assets/images/gflogo.jpg"; // Update with the correct path to your logo

const Contact = () => {
  return (
    <div id="contact"className="w-full p-8 bg-[#ffffff] ">
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
            <div className="flex items-center">
              <FaPhone className="text-black text-2xl mr-4" />
              <a href="tel:7848048953" className="text-lg text-black">+91 78480 48953</a> {/* Phone */}
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-black text-2xl mr-4" />
              <a href="mailto:globalfabsblr@gmail.com" className="text-lg text-black">globalfabsblr@gmail.com</a> {/* Email */}
            </div>
            <div className="flex items-center">
              <FaWhatsapp className="text-black text-2xl mr-4" />
              <a href="https://wa.me/918048048953" className="text-lg text-black">Chat with us on WhatsApp</a> {/* WhatsApp */}
            </div>
            <div className="flex items-center">
              <FaInstagram className="text-black text-2xl mr-4" />
              <a href="https://www.instagram.com/global_fabricators" className="text-lg text-black">global_fabricators</a> {/* Instagram */}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-4 mt-[-3.5rem]">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-black text-2xl mr-4" />
                <p className="text-lg text-black">No.5 Arasappa Layout, Agara Main Road, Thathaguni, Bengaluru - 560109</p> {/* Address */}
              </div>
              <div className="flex items-center">
                <FaClock className="text-black text-2xl mr-4" />
                <p className="text-lg text-black">9 AM to 10 PM</p> {/* Timings */}
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
