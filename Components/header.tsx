import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-[#7E33E0] text-white py-2 px-4 text-sm flex justify-content items-center pl-[400px] space-x-8 w-[1920px] h-[44px]" >


      <div className="flex ">
        <div className="flex space-x-3 p-3">
        <Image src="/Images/mail.png" alt="mailimage" height={6} width={12} className="flex  space-x-3" />
        </div> 
        <div className="flex items-center justify-content">
        mhhasanul@gmail.com
        </div>
        </div>
        <div className="flex ">
        <div className="flex space-x-3 p-3">
        <Image src="/Images/phone.png" alt="mailimage" height={6} width={12} className="flex  space-x-3" />
        </div> 
        <div className="flex items-center justify-content">
        (12345)67890
        </div>
        </div>
        <div className="flex">
      <div className="pl-[500px] flex items-center justify-center ">
        English
        <div className="flex space-x-1 p-3">
        <Image src="/Images/arrow.png" alt="mailimage" height={3} width={12} className="flex" />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        USD
        <div className="flex space-x-1 p-3">
        <Image src="/Images/arrow.png" alt="mailimage" height={3} width={12} className="flex" />
        </div>
      </div>
      <div className="flex items-center ">
        Login
        <div className="flex p-3 space-x-1">
        <Image src="/Images/user.png" alt="mailimage" height={3} width={12} className="flex"/>
        </div>
      </div>
      <div className="flex items-center ">
        Wishlist
        <div className="flex p-3 space-x-1">
        <Image src="/Images/heart.png" alt="mailimage" height={3} width={12} className="flex"/>
        </div>
      </div>
      <div className="flex items-center">
        <Image src="/Images/cart.png" alt="mailimage" height={24} width={24} />
      </div>
      </div>


    </div>
  );
};

export default Header;