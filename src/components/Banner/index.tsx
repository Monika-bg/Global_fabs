import React from 'react';
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div id="Banner" className="relative w-full lg:px-[150px] px-5 md:py-10 py-8 h-[700px]">
      {/* Banner Content */}
      <div className="w-full h-full bg-center bg-cover flex items-center rounded-lg" style={{ backgroundImage: `url(${banner})` }}>
        <div className="w-full bg-[#000000c2] lg:w-1/2 lg:px-0 px-10 h-full flex items-center justify-center rounded-tl-lg rounded-bl-lg">
          <div className="flex flex-col items-center text-center">
            <span className="text-white text-[15px] w-full">Our Mission</span>
            <div className="font-semibold text-[50px] text-white">
              We Care About Top Quality
            </div>
            <p className="mt-3 text-gray-200 max-w-[500px] leading-7">
              At Global Fabricators, we take pride in offering a diverse range of premium products that elevate the beauty and functionality of any space. From our energy-efficient UPVC windows and doors to the sleek and stylish aluminium alternatives, each piece is crafted with precision and care.
            </p>
            <a href="#Designs">
              <button className="text-[#333] rounded-full bg-white font-medium px-5 py-3 w-fit mt-5 z-50">
                Explore Our Designs
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
