import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './collection.css';
import Slider from 'react-slick';
import fixedwindow from "../../assets/images/fixedwindow.jpg";
import officepartition from "../../assets/images/officepartition.jpg";
import openablewindow from "../../assets/images/openablewindow.jpg";
import slidingdoor from "../../assets/images/slidingdoor.jpg";
import slidingwindow from "../../assets/images/slidingwindow.jpg";
import tophungwindow from "../../assets/images/tophungwindow.jpg";
import ventilator from "../../assets/images/ventilator.jpg";
import sleekmesh from '../../assets/images/sleek-mesh.jpg';
import slidmesh from '../../assets/images/sliding-mesh.jpg';

// Custom Arrow Components
const SampleNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <button className="arrow-button">›</button>
  </div>
);

const SamplePrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <button className="arrow-button">‹</button>
  </div>
);

// Slider Settings
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: "0",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
};

const Collections = () => {
  const collectionItems = [
    { title: "Sleek Mesh", image: sleekmesh },
    { title: "Sliding Mesh", image: slidmesh },
    { title: "Fixed Window", image: fixedwindow },
    { title: "Office Partition", image: officepartition },
    { title: "Openable Window", image: openablewindow },
    { title: "Sliding Window", image: slidingwindow },
    { title: "Sliding Door", image: slidingdoor },
    { title: "Top Hung Window", image: tophungwindow },
    { title: "Ventilator", image: ventilator },
  ];

  return (
    <div id="collections" className="w-full px-5 lg:px-[100px] py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800">
          Products
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore our diverse range of high-quality windows and doors, designed
          to enhance both style and functionality. From fixed windows to sleek
          sliding doors, find modern solutions tailored for any space.
        </p>
      </div>

      {/* Slider */}
      <Slider {...sliderSettings}>
        {collectionItems.map((item, index) => (
          <div key={index} className="px-3">
            <div className="relative flex flex-col items-center">
              <div
                className="w-full h-[250px] md:h-[300px] bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <h3 className="mt-4 text-lg font-medium text-gray-700">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Collections;
