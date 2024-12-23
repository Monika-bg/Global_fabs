import logo from "../../assets/images/gflogo.jpg";
import { Link } from "react-router-dom"; // Import your logo image

const Intro = () => {
  return (
    <div
      id="intro"
      className="w-full px-5 lg:px-[150px] py-8 lg:py-20 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16"
    >
      <div className="flex flex-col items-center lg:items-start">
        <span className="font-semibold text-[20px] max-w-[350px] text-center lg:text-left lg:ml-8">
          Global Fabricators
        </span>
        <span className="text-[15px] text-[#425e85] mt-2 lg:mt-4 mr-6 text-center lg:text-left">
          UPVC, Aluminium windows and doors, and Mosquito Mesh
        </span>

        <img
          src={logo}
          alt="Global Fabricators Logo"
          className="w-32 h-32 mt-3 lg:mt-5"
        />
      </div>
      <div className="flex flex-col gap-2 text-center lg:text-left">
        <p className="text-gray-600 leading-7 max-w-[500px] mx-auto lg:mx-0">
          With over a decade of expertise, GLOBAL FABRICATORS is a leading name in the manufacturing of premium UPVC and Aluminum windows and doors and Mosquito Mesh. Based in Bengaluru, we specialize in delivering top-notch solutions that blend style with durability. Our state-of-the-art facilities and skilled team ensure exceptional design, fabrication, and installation services for every project. At Global Fabricators, we are committed to enhancing your space with our innovative and high-quality products.
        </p>
        <Link to="/gal">
        <button className="text-white rounded-full bg-[#333] font-medium outline-none px-5 py-3 w-fit mt-5 mx-auto lg:mx-0 hover:bg-orange-500 transition-colors duration-300">
          View Gallery
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
