import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
    <div id="Banner" className="relative w-full lg:px-[150px] px-5 md:py-10 py-8 h-[700px]">
      {/* Banner Content */}
      <div
        className="w-full h-full bg-center bg-cover flex items-center rounded-lg"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-full bg-black bg-opacity-75 lg:w-1/2 lg:px-0 px-10 h-full flex items-center justify-center rounded-tl-lg rounded-bl-lg">
          <div className="flex flex-col items-center text-center">
            <span className="text-white text-sm w-full">Our Mission</span>
            <div className="font-semibold text-4xl text-white">
              We Care About Top Quality
            </div>
            <p className="mt-3 text-gray-200 max-w-lg leading-7 text-center">
              At Global Fabricators, we take pride in offering a diverse range of premium products that elevate the beauty and functionality of any space. From our energy-efficient UPVC windows and doors to the sleek and stylish aluminium alternatives, each piece is crafted with precision and care.
            </p>
            <Link to="/designs">
              <button className="text-black bg-white -500 border-2 border-white-500 rounded-lg px-5 py-3 mt-5 font-medium transition-colors duration-300 ease-in-out hover:bg-gray-700 hover:text-gray-100 hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                Explore Our Designs
              </button>
            </Link>
          </div>
        </div>
        
      </div>
      
    </div>
    
    </>
  );
};

export default Banner;
