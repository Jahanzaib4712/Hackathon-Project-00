import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-evenly items-center p-[168px]">
      <div className="text-xl font-bold text-purple-700 text-[34px] ">Hekto</div>
      <ul className="flex space-x-6 text-sm">
        <li className=" text-[16px]">Home</li>
        <li className=" text-[16px]">Pages</li>
        <li className=" text-[16px]">Products</li>
        <li className=" text-[16px]">Blog</li>
        <li className=" text-[16px]">Shop</li>
        <li className=" text-[16px]">Contact</li>
      </ul>
      <div className='flex items-center'>
            <input type="text" id="inputtext" placeholder='What are you looking for?' className=' p-[24px] h-[40px] w-[317px] bg-gray-200' />
            <div className='absolute '>
            <Image src="" height={41} width={51} alt='' className='relative left-[280px] bg-[#FB2E86]'/>
            </div>
            </div>
    </nav>
  );
};

export default Navbar;