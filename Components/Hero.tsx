import Image from "next/image";
import Link from "next/link";
import React from "react";
<Link
  href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600&display=swap"
  rel="stylesheet"
/>

const Hero = () => {
  return (
    <section className="bg-[#F2F0FF] py-10 px-6 h-[764px] justify-content items-center">
      <div className="h-auto mx-auto grid grid-cols-1 md:grid-cols-2 items-center p-52">
        <div className="absolute top-[120px] left-[110px]">
        <Image src="/Images/lamp.png" alt="shellimage" height={387} width={387} className="" />
        </div>
        <div className="pl-[195px] absolute top-[334px]">
          <p className="text-sm text-pink-600 text-[16px] font-latto">Best Furniture For Your Castle...</p>
          <h1 className=" font-bold text-[#000000] mt-2 text-[53px] font-josefin">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-sm text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo <br /> Lorem ipsum dolor sit amet.
          </p>
          <button className="mt-6 bg-pink-500 text-white py-2 px-4 rounded w-[163px] h-[50px] font-josefin">
            Shop Now
          </button>
        </div>
        <div className="relative left-[889px] top-[60px]">
          {/* Shell Image (Background Layer) */}
          <div className="absolute bottom-[24px] top-[-130px] z-0">
            <Image src="/Images/shell.png" alt="shellimage" height={629} width={629} />
          </div>
          {/* Shell Image (Background Layer) */}
          <div className="absolute bottom-[24px] top-[-170px] right-10 z-0">
            <Image src="/Images/shell.png" alt="shellimage" height={629} width={629}  />
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
