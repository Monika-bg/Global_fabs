
import one from "../../assets/images/one.jpg";
import two from "../../assets/images/two.jpg";
import three from "../../assets/images/three.jpeg";
import four from "../../assets/images/four.jpg";
import five from "../../assets/images/five.jpg";
import six from "../../assets/images/six.jpeg";

const Explore = () => {
  return (
    <div id="gallery" className="w-full lg:px-[150px] px-5 lg:py-10 py-8 flex flex-col items-center justify-center mx-auto gap-5">
      <div className="flex flex-col items-center">
        <span className="text-[15px] text-[#425e85]"></span>
        <span className="font-semibold text-[30px] text-center">
          Our Latest Projects
        </span>
        <p className="mt-3 text-gray-500 text-center max-w-auto">
          At Global Fabricators, we take pride in delivering exceptional craftsmanship and innovative solutions for every project. Our commitment to quality and customer satisfaction is reflected in our work, which ranges from bespoke windows and doors to tailored office partitions. We strive to exceed expectations with each project, ensuring that every client enjoys a seamless experience and results that enhance their spaces.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full h-[800px] m-8">
        <div className="w-[400px] h-[350px]">
          <img src={one} alt="Project 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[400px] h-[350px]">
          <img src={two} alt="Project 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-[400px] h-[350px]">
          <img src={three} alt="Project 3" className="w-full h-full object-cover" />
        </div>
        <div className="w-[400px] h-[350px]">
          <img src={four} alt="Project 4" className="w-full h-full object-cover" />
        </div>
        <div className="w-[400px] h-[350px]">
          <img src={five} alt="Project 5" className="w-full h-full object-cover" />
        </div>
        <div className="w-[400px] h-[350px]">
          <img src={six} alt="Project 6" className="w-full h-full object-cover" />
        </div>
		<button className="text-white lg:mx-0 mx-auto rounded-full bg-black font-medium px-5 py-3 w-fit mt-5 z-50">
   Click here to view
</button>

      </div>
    </div>
  );
};

export default Explore;
