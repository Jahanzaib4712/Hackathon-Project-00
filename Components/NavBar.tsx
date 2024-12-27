// import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-4 py-3 flex flex-col md:flex-row justify-evenly items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-purple-700 text-[34px]">Hekto</div>

      {/* Navigation Links */}
      <ul className="flex px-4 py-4  md:space-x-3 items-center justify-center  text-sm space-y-2  mt-4 md:mt-0 ">
        <Link href="/">
        <li className="text-[16px] mt-2">Home</li>
        </Link>
        <Link href="/AboutUs">
        <li className="text-[16px]">Pages</li>
        </Link>
        <li className="text-[16px]">Products</li>
        <Link href="/BlogPage">
        <li className="text-[16px]">Blog</li>
        </Link>
        <Link href="/Shop">
        <li className="text-[16px]">Shop</li>
        </Link>
        <Link href="/MyAccount">
        <li className="text-[16px]">Contact</li>
        </Link>
      </ul>

      {/* Search Bar */}
      <div className="mt-4 md:mt-0 flex w-full md:w-auto justify-center">
        <div className="flex items-center bg-white border-2 border-[#E7E6EF]">
          <input
            type="text"
            className="px-4 py-2 h-[40px] w-full md:w-[317px]"
            placeholder="Search here..."
          />
          <button className="bg-[#FB2E86] hover:bg-pink-600 text-white px-4 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
