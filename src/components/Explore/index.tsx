import { Link } from "react-router-dom";
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpeg";
import four from "../../assets/images/four.jpg";
import five from "../../assets/images/five.jpg";
import six from "../../assets/images/six.jpeg";
import './Explore.css';

const Explore = () => {
  return (
    <div id="gallery" className="w-full px-5 lg:px-[150px] py-8 lg:py-10 flex flex-col items-center gap-8 mx-auto">
      <div className="text-center">
        <span className="font-semibold text-[24px] lg:text-[30px] text-[#000000]">
          Our Latest Projects
        </span>
        <p className="mt-3 text-gray-500 text-[14px] lg:text-[16px] max-w-4xl mx-auto">
          At Global Fabricators, we take pride in delivering exceptional craftsmanship and innovative solutions for every project. From bespoke windows and doors to tailored office partitions, we strive to exceed expectations with seamless results that enhance your spaces.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
        {[one, two, three, four, five, six].map((img, index) => (
          <div key={index} className="w-full h-[200px] sm:h-[300px]">
            <img src={img} alt={`Project ${index + 1}`} className="w-full h-full object-cover rounded-md shadow-md" />
          </div>
        ))}
      </div>
      <Link to="/gal">
        <button className="button-custom mt-5">
          Click here to view
        </button>
      </Link>
    </div>
  );
};

export default Explore;
