import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './collection.css'; // Ensure this file is imported
import Slider from 'react-slick';
import upvcImage1 from "../../assets/images/upvc1.jpg";
import upvcImage2 from "../../assets/images/upvc2.jpg";
import upvcImage3 from "../../assets/images/upvc3.jpg";
import upvcImage4 from "../../assets/images/upvc4.jpg";
import aluminumImage1 from "../../assets/images/aluminium1.jpg";
import aluminumImage2 from "../../assets/images/aluminium2.jpg";
import aluminumImage3 from "../../assets/images/aluminium3.jpg";
import aluminumImage4 from "../../assets/images/aluminium4.jpg";
import HeaderTop from "../Headertop";
import Footer from '../Footer';


// Define the type for custom arrow props
interface ArrowProps {
  onClick?: () => void;
}

// Custom arrow component for next
const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <button className="arrow-button"></button>
    </div>
  );
};

// Custom arrow component for previous
const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <button className="arrow-button"></button>
    </div>
  );
};

// Slider settings
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
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  centerMode: true,
  centerPadding: '0',
};

const Designs = () => {
  const upvcImages = [upvcImage1, upvcImage2, upvcImage3, upvcImage4];
  const aluminumImages = [aluminumImage1, aluminumImage2, aluminumImage3, aluminumImage4];

  return (
    <>
      <HeaderTop />
      <div className="p-8">
        {/* Explore Our Designs Section */}
        <section id="explore" className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">
            Explore Our Wide Range of Designs
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Discover our collection of high-quality windows and doors designed to meet diverse aesthetic and functional needs. From sleek modern styles to classic designs, we have the perfect solution for your space.
          </p>
        </section>

        {/* UPVC Section */}
        <section id="upvc" className="mb-12 bg-gray-100 py-8">
          <div className="text-container text-center">
            <h2 className="text-3xl font-bold mb-4">UPVC Windows and Doors</h2>
            <p className="text-lg mb-6">
              UPVC (Unplasticized Polyvinyl Chloride) is known for its durability and low maintenance. It offers excellent insulation, soundproofing, and security. UPVC windows and doors are available in various styles and finishes, suitable for both residential and commercial buildings.
            </p>
          </div>
          <div className="slider-container mb-8">
            <Slider {...sliderSettings}>
              {upvcImages.map((image, index) => (
                <div key={index} className="slider-item">
                  <img src={image} alt={`UPVC Product ${index + 1}`} className="slider-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="additional-images">
            <h3 className="text-2xl font-bold mb-4 text-center">UPVC Designs</h3>
            <div className="image-grid">
              {upvcImages.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image} alt={`UPVC Design ${index + 1}`} className="additional-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PVC Section */}
        <section id="pvc" className="mb-12 bg-gray-100 py-8">
          <div className="text-container text-center">
            <h2 className="text-3xl font-bold mb-4">PVC Windows and Doors</h2>
            <p className="text-lg mb-6">
              PVC (Polyvinyl Chloride) is a versatile material known for its strength and longevity. It offers great insulation and is highly resistant to weathering, making it an excellent choice for windows and doors in various climates.
            </p>
          </div>
          <div className="slider-container mb-8">
            <Slider {...sliderSettings}>
              {upvcImages.map((image, index) => (
                <div key={index} className="slider-item">
                  <img src={image} alt={`PVC Product ${index + 1}`} className="slider-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="additional-images">
            <h3 className="text-2xl font-bold mb-4 text-center">PVC Designs</h3>
            <div className="image-grid">
              {upvcImages.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image} alt={`PVC Design ${index + 1}`} className="additional-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aluminum Section */}
        <section id="aluminium" className="mb-12 bg-gray-100 py-8">
          <div className="text-container text-center">
            <h2 className="text-3xl font-bold mb-4">Aluminum Doors and Windows</h2>
            <p className="text-lg mb-6">
              Aluminum doors and windows are known for their strength, durability, and aesthetic appeal. They are resistant to corrosion and are available in various styles and finishes, making them ideal for modern architectural designs.
            </p>
          </div>
          <div className="slider-container mb-8">
            <Slider {...sliderSettings}>
              {aluminumImages.map((image, index) => (
                <div key={index} className="slider-item">
                  <img src={image} alt={`Aluminum Product ${index + 1}`} className="slider-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="additional-images">
            <h3 className="text-2xl font-bold mb-4 text-center">Aluminum Designs</h3>
            <div className="image-grid">
              {aluminumImages.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image} alt={`Aluminum Design ${index + 1}`} className="additional-image" />
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
