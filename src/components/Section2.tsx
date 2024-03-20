import React from "react";
import bgImage from '../assets/s2-bg.png'; 
import logo1 from '../assets/icon1.png';
import logo2 from '../assets/icon2.png'; 
import logo3 from '../assets/icon3.png'; 

const Section2 = () => {

  return (
    <section style={{ backgroundImage: `url(${bgImage})` }} className="bg-gray-200 bg-cover bg-center py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">
            READY FOR A CHRISTMAS HOLIDAY THROUGH ISTANBUL AND TRABZON?
          </h2>
          <div className="flex justify-center space-x-4 mt-8">
            {/* Add logos with text */}
            <div className="flex items-center flex-col">
              <img src={logo1} alt="Logo 1" className="h-12 mb-2" />
              <p className="text-sm font-bold">ISTANBUL</p>
            </div>
            <div className="flex items-center flex-col">
              <img src={logo2} alt="Logo 2" className="h-12 mb-2" />
              <p className="text-sm font-bold">RIZE</p>
            </div>
            <div className="flex items-center flex-col">
              <img src={logo3} alt="Logo 3" className="h-12 mb-2" />
              <p className="text-sm font-bold">TRABZON</p>
            </div>
          </div>
          <p className="text-lg mt-4">
            A holiday journey through <span className="font-bold text-orange-500">Istanbul</span> and <span className="font-bold text-orange-500">Trabzon</span>, a city of enchanting landscapes and rich traditions. Our <span className="font-bold text-orange-500">Trabzon Package</span> is the ultimate gift for an unforgettable <span className="font-bold text-orange-500">Christmas!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section2;
