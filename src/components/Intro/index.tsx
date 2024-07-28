import React from 'react';
import logo from "../../assets/images/gflogo.jpg"; // Import your logo image

const Intro = () => {
  return (
    <div id="intro" className="w-full lg:px-[150px] px-5 lg:py-20 py-8 flex lg:flex-row flex-col items-start justify-center gap-16">
      <div className="flex flex-col items-center lg:items-start">
        <span className="font-semibold text-[30px] max-w-[350px] text-center lg:text-left">
          Global Fabricators
        </span>
        <span className="text-[15px] text-[#425e85]">UPVC , PVC & Aluminium windows and doors</span>
        <img 
          src={logo} 
          alt="Global Fabricators Logo" 
          className="w-32 h-32 mt-3" 
          style={{ marginLeft: '4.75rem' }} // Move logo 4 cm to the right
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-gray-600 leading-7 max-w-[500px]">
          With over a decade of expertise, GLOBAL FABRICATORS is a leading name in the manufacturing of premium UPVC and aluminum windows and doors. Based in Bengaluru, we specialize in delivering top-notch solutions that blend style with durability. Our state-of-the-art facilities and skilled team ensure exceptional design, fabrication, and installation services for every project. At Global Fabricators, we are committed to enhancing your space with our innovative and high-quality products.
        </p>
        {/* <button className="text-white rounded-full bg-[#333] font-medium outline-none px-5 py-3 w-fit mt-5 z-50">
          Explore Our Designs
        </button> */}
      </div>
    </div>
  );
};

export default Intro;
