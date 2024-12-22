import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      id="Banner"
      className="relative w-full px-5 lg:px-20 xl:px-[150px] py-8 lg:py-12 h-[500px] lg:h-[700px] flex flex-col lg:flex-row items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

      {/* Banner Content */}
      <div className="relative z-10 w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 lg:px-8">
        <span className="text-orange-400 text-sm tracking-wide uppercase mb-2">
          Our Mission
        </span>
        <h1 className="text-white text-3xl lg:text-5xl font-bold leading-snug mb-4">
          We Care About Top Quality
        </h1>
        <p className="text-gray-200 text-sm lg:text-base max-w-lg leading-relaxed mb-6">
          At Global Fabricators, we take pride in offering a diverse range of
          premium products that elevate the beauty and functionality of any
          space. From energy-efficient UPVC windows and doors to sleek aluminum
          alternatives, every piece is crafted with precision and care.
        </p>
        <Link to="/designs">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg text-sm lg:text-base font-medium shadow-lg hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-300">
            Explore Our Designs
          </button>
        </Link>
      </div>

      {/* Empty Right Space for Mobile */}
      <div className="hidden lg:block lg:w-1/2"></div>
    </div>
  );
};

export default Banner;
