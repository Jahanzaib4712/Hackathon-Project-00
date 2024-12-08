import Image from "next/image";
import React from "react";

const UniqueProduct: React.FC = () => {
  return (
    <section className="bg-[#F1F0FF] h-[579px]">
      <div className="p-[64px] flex  md:flex-nowrap ">
        <div className="flex relative justify-between p-[84px] left-[294px] ">
          {/* Product Image */}
          {/* Shell Image (Background Layer) */}
          <div className="absolute bottom-[24px] top-[-40px] right-[154px] z-0">
            <Image src="/Images/shell3.png" alt="shellimage" height={550} width={500} />
          </div>

          {/* Sofa Image (Foreground Layer) */}
          <div className="relative w-full h-80 rounded-lg flex items-center justify-center z-10">
            <Image src="/Images/sofa24.png" alt="sofaimage" height={550} width={509} />
          </div>
        </div>


        <div className=" relative flex-1 items-center justify-center left-[184px]">
          <h3 className="text-[35px] font-bold text-[#151875] mb-4 pt-10">
            Unique Features Of Latest & <br /> Trending Products
          </h3>
          <ul className="text-gray-700 space-y-2 list-disc pl-5 text-[16px]">


            <div className="w-3 h-3 bg-[#F52B70] rounded-full flex relative right-6 top-[27px]">
            </div>
            <div className="flex">All frames constructed with hardwood solids and laminates.</div>

            <div className="w-3 h-3 bg-[#2B2BF5] rounded-full flex relative right-6 top-[27px]">
            </div>
            <div className="flex">Reinforced with double wood dowels, glue, screws, nails at corner <br />
              blocks, and machine nails.</div>


            <div className="w-3 h-3 bg-[#2BF5CC] rounded-full flex relative right-6 top-[27px]">
            </div>
            <div className="flex">Arms, backs, and seats are structurally reinforced.</div>

          </ul>
          <div>
          <div className="mt-8 flex">
            <button className="bg-[#FB2E86] text-white py-2 px-6 rounded shadow-md hover:bg-[#b6396f]">
              Add To Cart
            </button>

          </div>
          <div className="mt-2 text-sm text-gray-500 flex">
              B&B Italian Sofa - $32.00
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueProduct;
