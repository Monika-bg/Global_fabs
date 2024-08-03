import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './collection.css';
import Slider from 'react-slick';
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <>
      <HeaderTop />
      <div className="bg-gray-100 px-8 py-6">
        {/* Explore Our Designs Section */}
        <section id="explore" className="mb-12 text-center text-gray-800 py-12 max-w-screen-lg mx-auto">
          <h2 className="text-5xl font-bold mb-8 leading-tight text-gray-900">
            Discover Our Exquisite Designs
          </h2>
          <p className="text-lg text-gray-600">
            Explore a diverse range of windows and doors that combine aesthetic beauty with exceptional functionality. From contemporary to classic, find the perfect design for your needs.
          </p>
        </section>

        {/* UPVC Section */}
        <section id="upvc" className="mb-12 bg-gray-200 py-8 shadow-lg rounded-lg mx-auto w-full">
          <div className="p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">UPVC Windows and Doors</h2>
            <p className="text-md mb-8 text-center text-gray-700">
              Known for durability and low maintenance, UPVC windows and doors provide excellent insulation, soundproofing, and security. Available in various styles and finishes for all types of buildings.
            </p>
            <div className="slider-container mb-8 px-4 py-4 bg-gray-300 rounded-lg shadow-md">
              <Slider {...sliderSettings}>
                {upvcImages.map((image, index) => (
                  <div key={index} className="slider-item">
                    <img 
                      src={image} 
                      alt={`UPVC Product ${index + 1}`} 
                      className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="additional-images grid grid-cols-3 gap-6 px-4 py-4 bg-gray-100 rounded-lg shadow-md">
              {["Casement Doors", "Windows", "2 Track Sliding Doors", "2.5 Track Sliding Window", "3 Track Sliding Window", "Ventilator", "Openable Window", "Fixed Window", "Partitions"].map((item, index) => (
                <div key={index} className="image-item bg-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                  <h3 className="text-xl font-medium mb-2 text-gray-800">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aluminum Section */}
        <section id="aluminum" className="mb-12 bg-gray-200 py-8 shadow-lg rounded-lg mx-auto w-full">
          <div className="p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">Aluminum Windows and Doors</h2>
            <p className="text-md mb-8 text-center text-gray-700">
              Renowned for strength, durability, and modern appeal, aluminum windows and doors are resistant to corrosion and come in a variety of styles and finishes, perfect for contemporary designs.
            </p>
            <div className="slider-container mb-8 px-4 py-4 bg-gray-300 rounded-lg shadow-md">
              <Slider {...sliderSettings}>
                {aluminumImages.map((image, index) => (
                  <div key={index} className="slider-item">
                    <img 
                      src={image} 
                      alt={`Aluminum Product ${index + 1}`} 
                      className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="additional-images grid grid-cols-2 gap-6 px-4 py-4 bg-gray-100 rounded-lg shadow-md">
              {["3 Track (Mosquito Mesh)", "2 Track", "Partitions", "Sliding and Openable Doors", "Ventilators"].map((item, index) => (
                <div key={index} className="image-item bg-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                  <h3 className="text-xl font-medium mb-2 text-gray-800">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mosquito Mesh Section */}
        <section id="mosquito-mesh" className="mb-12 bg-gray-200 py-8 shadow-lg rounded-lg mx-auto w-full">
          <div className="p-8 rounded-lg">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">Mosquito Mesh</h2>
            <p className="text-md mb-8 text-center text-gray-700">
              Our mosquito mesh solutions ensure a bug-free environment while allowing fresh air to flow through. Choose from sleek mesh and sliding mesh options to suit your needs.
            </p>
            <div className="additional-images grid grid-cols-2 gap-6 px-4 py-4 bg-gray-300 rounded-lg shadow-md">
              {mosquitoMeshImages.map((image, index) => (
                <div key={index} className="image-item bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center">
                   <img 
            src={image} 
             
            className="w-[400px] h-[400px] object-cover mb-2 rounded-lg" // Fixed dimensions for consistent sizing
          />
                  <h3 className="text-xl font-medium text-center text-gray-800">
                    {index === 0 ? 'Sleek Mesh' : 'Sliding Mesh'}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Designs;
