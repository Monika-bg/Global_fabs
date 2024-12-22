import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './collection.css';
import upvcImage1 from "../../assets/images/upvc1.jpg";
import ventilator from "../../assets/images/ventilator.jpg";
import upvcImage3 from "../../assets/images/upvc3.jpg";
import upvcImage4 from "../../assets/images/upvc4.jpg";
import aluminumImage1 from "../../assets/images/aluminium1.jpg";
import aluminumImage2 from "../../assets/images/aluminium2.jpg";
import aluminumImage3 from "../../assets/images/aluminium3.jpg";
import aluminumImage4 from "../../assets/images/aluminium4.jpg";
import sleekMeshImage from "../../assets/images/sleek-mesh.jpg";
import slidingMeshImage from "../../assets/images/sliding-mesh.jpg";
import HeaderTop from "../Headertop";
import Footer from '../Footer';

const Designs = () => {
  const upvcImages = [upvcImage1, upvcImage3, upvcImage4, ventilator];
  const aluminumImages = [aluminumImage1, aluminumImage2, aluminumImage3, aluminumImage4];
  const mosquitoMeshImages = [sleekMeshImage, slidingMeshImage];

  return (
    <>
      <HeaderTop />
      <div className="gallery-container mt-11"></div>
      <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 px-4 md:px-8 py-6">
        {/* Explore Our Designs Section */}
        <section id="explore" className="mb-8 text-center py-8 max-w-screen-lg mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Discover Our Exquisite Designs</h2>
          <p className="text-sm md:text-lg text-gray-700 max-w-md md:max-w-2xl mx-auto">
            Explore a diverse range of windows and doors that blend aesthetic appeal with exceptional functionality.
          </p>
        </section>

        {/* Section Template */}
        {[{
            id: "upvc",
            title: "UPVC Windows and Doors",
            description: "Durable and low maintenance, UPVC windows and doors provide excellent insulation, soundproofing, and security.",
            images: upvcImages,
            items: ["Casement Doors", "Windows", "2 Track Sliding Doors", "Ventilator"],
          },
          {
            id: "aluminum",
            title: "Aluminum Windows and Doors",
            description: "Renowned for strength and modern appeal, aluminum windows and doors resist corrosion and come in styles perfect for contemporary designs.",
            images: aluminumImages,
            items: ["3 Track with Mosquito Mesh", "2 Track with Mosquito Mesh", "Sliding and Openable Doors", "Ventilators"],
          },
          {
            id: "mosquito-mesh",
            title: "Mosquito Mesh",
            description: "Bug-free environments with sleek or sliding mesh options to suit your needs.",
            images: mosquitoMeshImages,
            items: ["Sleek Mesh", "Sliding Mesh"],
          },
        ].map((section, index) => (
          <section key={index} id={section.id} className="mb-8 bg-white py-6 shadow-lg rounded-lg mx-auto w-full">
            <div className="p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center text-gray-900">{section.title}</h2>
              <p className="text-sm md:text-md mb-6 text-center text-gray-700 max-w-lg mx-auto">{section.description}</p>
              {/* Display images with overlay text */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 px-2 py-4 bg-gray-100 rounded-lg shadow-md">
                {section.images.map((image, idx) => (
                  <div key={idx} className="relative image-container overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <img
                      src={image}
                      alt={`${section.title} Product ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay Text */}
                    {section.items[idx] && (
                      <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-xl font-semibold py-2 px-4 rounded-md">
                        {section.items[idx]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Designs;
