import React from 'react';
import upvcImage1 from "../../assets/images/upvc1.jpg";
import upvcImage2 from "../../assets/images/upvc2.jpg";
import upvcImage3 from "../../assets/images/upvc3.jpg";
import upvcImage4 from "../../assets/images/upvc4.jpg";
import aluminumImage1 from "../../assets/images/aluminium1.jpg";
import aluminumImage2 from "../../assets/images/aluminium2.jpg";
import aluminumImage3 from "../../assets/images/aluminium3.jpg";
import aluminumImage4 from "../../assets/images/aluminium4.jpg";

const Designs = () => {
  return (
    <div id="Designs" className="p-8">
      {/* UPVC Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">UPVC Windows and Doors</h2>
        <p className="text-lg mb-6">
          UPVC (Unplasticized Polyvinyl Chloride) is known for its durability and low maintenance. It offers excellent insulation, soundproofing, and security. UPVC windows and doors are available in various styles and finishes, suitable for both residential and commercial buildings.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src={upvcImage1} alt="UPVC Product 1" className="w-full h-auto" />
          <img src={upvcImage2} alt="UPVC Product 2" className="w-full h-auto" />
          <img src={upvcImage3} alt="UPVC Product 3" className="w-full h-auto" />
          <img src={upvcImage4} alt="UPVC Product 4" className="w-full h-auto" />
        </div>
      </section>

      {/* Aluminum Doors and Windows Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Aluminum Doors and Windows</h2>
        <p className="text-lg mb-6">
          Aluminum doors and windows are known for their strength, durability, and aesthetic appeal. They are resistant to corrosion and are available in various styles and finishes, making them ideal for modern architectural designs.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src={aluminumImage1} alt="Aluminum Product 1" className="w-full h-auto" />
          <img src={aluminumImage2} alt="Aluminum Product 2" className="w-full h-auto" />
          <img src={aluminumImage3} alt="Aluminum Product 3" className="w-full h-auto" />
          <img src={aluminumImage4} alt="Aluminum Product 4" className="w-full h-auto" />
        </div>
      </section>
    </div>
  );
};

export default Designs;
