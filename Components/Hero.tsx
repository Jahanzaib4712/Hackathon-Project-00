import Image from "next/image";
// import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F2F0FF] py-10 px-6 h-[90vh] flex justify-center items-center">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-6 md:p-20 relative">
        <div className="relative flex justify-center items-center md:justify-start md:ml-[10%] bottom-[300px]">
          <div className="absolute top-[-130px] left-[110px] md:left-0 z-10">
            <Image src="/Images/lamp.png" alt="lampimage" height={387} width={387} />
          </div>
          <div className=" absolute bottom-[400px] md:pl-[195px]  md:top-[30%] md:left-[15%] text-center md:text-left z-20">
            <p className="text-sm text-pink-600 text-[16px] font-latto">Best Furniture For Your Castle...</p>
            <h1 className="font-bold text-[#000000] mt-2 text-[30px] md:text-[53px] font-josefin mr-[-282px]">
              New Furniture Collection  Trends in 2020
            </h1>
            <p className="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo <br /> Lorem ipsum dolor sit amet.
            </p>
            <button className="mt-6 bg-pink-500 text-white py-2 px-4 rounded w-[163px] h-[50px] font-josefin">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center w-full h-[100%] z-0">
          {/* Shell Image (Background Layer) */}
          <div className="absolute top-[-130px] left-[10%] z-0 md:left-[15%]">
            <Image src="/Images/shell.png" alt="shellimage" height={629} width={629} />
          </div>
          <div className="absolute top-[-170px] right-0 z-0 md:right-10">
            <Image src="/Images/shell.png" alt="shellimage" height={629} width={629} />
          </div>

          {/* Sofa Image (Foreground Layer) */}
          <div className="relative w-full h-80 rounded-lg flex items-center justify-center z-10">
            <Image src="/Images/sofa1.png" alt="sofaimage" height={629} width={629} />
          </div>

          {/* Discount Tag */}
          <span className="absolute top-4 right-4 bg-blue-500 text-white text-sm px-2 py-1 rounded-full z-20">
            50% off
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
