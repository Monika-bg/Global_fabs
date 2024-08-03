import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './collection.css'; // Ensure this file is imported
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

// Define the type for custom arrow props
interface ArrowProps {
  onClick?: () => void;
}

// Custom arrow component for next
const SampleNextArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next"
      onClick={onClick}
    >
      <button className="arrow-button"></button>
    </div>
  );
};

// Custom arrow component for previous
const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
    >
      <button className="arrow-button"></button>
    </div>
  );
};

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,       // Number of slides to show at once
  slidesToScroll: 1,     // Number of slides to scroll
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  centerMode: true,      // Enable center mode to show partial slides on the edges
  centerPadding: '0',    // No extra padding on the center
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

const Collections = () => {
  const collectionItems = [
    {
      title: "Sleek Mesh",
      image: sleekmesh,
    },
    {
      title: "Sliding Mesh",
      image: slidmesh,
    },
    {
      title: "Fixed Window",
      image: fixedwindow,
    },
    {
      title: "Office Partition",
      image: officepartition,
    },
    {
      title: "Openable Window",
      image: openablewindow,
    },
    {
      title: "Sliding Window",
      image: slidingdoor,
    },
    {
      title: "Sliding Door",
      image: slidingwindow,
    },
    {
      title: "Top Hung Window",
      image: tophungwindow,
    },
    {
      title: "Ventilator",
      image: ventilator,
    },
  ];

  return (
    <div id="collections" className="w-full lg:px-[150px] px-5 lg:py-10 py-8 flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center">
        <span className="text-[15px] text-[#425e85]"></span>
        <span className="font-semibold text-[30px] text-center">
          Products
        </span>
        <p className="mt-3 text-gray-500 text-center max-w-auto">
          Explore our diverse range of high-quality windows and doors, designed to enhance both style and functionality. From fixed and openable windows to sleek sliding doors and versatile office partitions, our products offer superior performance and modern design solutions for any space.
        </p>
      </div>
      
      <div className="w-full lg:px-auto px-5 pb-8 relative">
        <Slider {...sliderSettings}>
          {collectionItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center" // Flex container to center content and stack items vertically
              style={{ margin: '0 3cm' }} // Add margin on both sides of the slides
            >
              <div
                className="w-full h-[300px] bg-center bg-cover border-4 border-grey"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="slider background"></div>
              </div>
              <div className="mt-2 text-center text-black font-semibold text-[18px]">
                {item.title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collections;
