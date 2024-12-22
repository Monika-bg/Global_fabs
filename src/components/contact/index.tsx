import { FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import logo from "../../assets/images/gflogo.jpg"; // Update with the correct path to your logo

interface ContactItemProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for icon component
  text: string;
  href?: string; // href is optional
  label: string;
  colors: string;
}

const ContactItem = ({ Icon, text, href, label, colors }: ContactItemProps) => (
  <div className="flex items-center relative group">
    <div
      className={`p-3 rounded-full shadow-lg bg-gradient-to-r ${colors} transition-transform transform group-hover:scale-110`}
    >
      <Icon className="text-white text-2xl" />
    </div>
    {href ? (
      <a href={href} className="text-lg text-black ml-4 break-words">{text}</a>
    ) : (
      <p className="text-lg text-black ml-4 break-words">{text}</p>
    )}
    <div className="absolute left-0 -top-5 ml-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {label}
    </div>
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="w-full p-4 md:p-8 bg-[#ffffff]">
      <div className="max-w-screen-lg mx-auto bg-[#f9d6a0] shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-12">
          <img src={logo} alt="Global Fabricators Logo" className="h-16 sm:h-20 mb-4 sm:mb-0 sm:mr-6 w-20" />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-4xl font-bold text-black">Global Fabricators</h1>
            <p className="text-lg text-black mt-2">Contact Us</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <ContactItem
              Icon={FaPhone}
              text="+91 78480 48953"
              href="tel:7848048953"
              label="Phone"
              colors="from-blue-400 to-blue-600"
            />
            <ContactItem
              Icon={FaEnvelope}
              text="globalfabsblr@gmail.com"
              href="mailto:globalfabsblr@gmail.com"
              label="Email"
              colors="from-blue-400 to-blue-600"
            />
            <ContactItem
              Icon={FaWhatsapp}
              text="Chat with us on WhatsApp"
              href="https://wa.me/918048048953"
              label="WhatsApp"
              colors="from-green-400 to-green-600"
            />
            <ContactItem
              Icon={FaInstagram}
              text="global_fabricators"
              href="https://www.instagram.com/global_fabricators"
              label="Instagram"
              colors="from-purple-400 to-pink-600"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <ContactItem
              Icon={FaMapMarkerAlt}
              text="No.5 Arasappa Layout, Agara Main Road, Thathaguni, Bengaluru - 560062"
              label="Location"
              colors="from-yellow-400 to-yellow-600"
            />
            <ContactItem
              Icon={FaClock}
              text="9 AM to 8 PM"
              label="Timings"
              colors="from-gray-400 to-gray-600"
            />
            {/* Map */}
            <div className="w-full h-[300px] sm:h-[400px]">
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
