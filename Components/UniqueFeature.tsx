import Image from "next/image";
import React from "react";

const UniqueProduct: React.FC = () => {
  return (
    <section className="bg-[#F1F0FF] py-8">
      <div className="p-4 md:p-[64px] flex flex-col md:flex-row md:justify-between">
        
        {/* Left Section (Product Image) */}
        <div className="relative flex justify-center md:justify-start md:left-[150px] mb-8 md:mb-0">
          {/* Shell Image (Background Layer) */}
          <div className="absolute bottom-[-40px] right-[-20px] z-0 md:right-[154px]">
            <Image src="/Images/shell3.png" alt="shellimage" height={550} width={500} />
          </div>

          {/* Sofa Image (Foreground Layer) */}
          <div className="relative w-full max-w-[509px] h-[350px] md:h-[550px] rounded-lg flex items-center justify-center z-10">
            <Image src="/Images/sofa24.png" alt="sofaimage" height={550} width={509} />
          </div>
        </div>

        {/* Right Section (Text Content) */}
        <div className="relative flex-1 flex flex-col justify-center items-start md:left-[184px]">
          <h3 className="text-[28px] md:text-[35px] font-bold text-[#151875] mb-4 pt-10">
            Unique Features Of Latest & <br /> Trending Products
          </h3>
          <ul className="text-gray-700 space-y-2 list-disc pl-5 text-[14px] md:text-[16px]">

            <li className="flex items-center">
              <div className="w-3 h-3 bg-[#F52B70] rounded-full mr-3"></div>
              All frames constructed with hardwood solids and laminates.
            </li>

            <li className="flex items-center">
              <div className="w-3 h-3 bg-[#2B2BF5] rounded-full mr-3"></div>
              Reinforced with double wood dowels, glue, screws, nails at corner blocks, and machine nails.
            </li>

            <li className="flex items-center">
              <div className="w-3 h-3 bg-[#2BF5CC] rounded-full mr-3"></div>
              Arms, backs, and seats are structurally reinforced.
            </li>

          </ul>
          <div className="mt-8 flex flex-col items-start md:items-center">
            <button className="bg-[#FB2E86] text-white py-2 px-6 rounded shadow-md hover:bg-[#b6396f] mb-4">
              Add To Cart
            </button>

            <div className="mt-2 text-sm text-gray-500">
              B&B Italian Sofa - $32.00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueProduct;
