"use client";
import React from "react";
// import HoursSupport1 from "./24-hours-support-1.svg";
// import akarIconsChevronDown from "./akar-icons-chevron-down.svg";
// import bxBxPhoneCall from "./bx-bx-phone-call.svg";
// import cashback1 from "./cashback-1.svg";
// import fluentCart24Regular from "./fluent-cart-24-regular.svg";
// import freeDelivery1 from "./free-delivery-1.svg";
// import image from "./image.png";
// import maskGroup2 from "./mask-group-2.png";
// import maskGroup from "./mask-group.png";
// import premiumQuality1 from "./premium-quality-1.svg";
// import rectangle56 from "./rectangle-56.svg";
// import uilEnvelopeAlt from "./uil-envelope-alt.svg";
// import uilHeartAlt from "./uil-heart-alt.svg";

const  AboutUs = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      
        
          
      <main className="w-full max-w-screen-xl mx-auto">
        <section className="relative bg-[url('/rectangle-115.svg')] bg-cover h-[286px] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-[#101750]">About Us</h1>
          <nav className="flex space-x-4 mt-4">
            <span className="text-black">Home</span>
            <span className="text-black">Pages</span>
            <span className="text-pink">About Us</span>
          </nav>
        </section>
        <section className="flex items-center justify-between mt-20 px-10">
          <div className="relative w-[570px] h-[409px]">
            <div className="absolute inset-0 bg-[#2b3cab] rounded-md"></div>
            <img
              alt=".."
              className="absolute top-0 left-[15px] w-[555px] h-[390px]"
            />
          </div>
          <div className="w-[550px]">
            <h2 className="text-4xl font-bold text-text">
              Know About Our Ecommerce Business, History
            </h2>
            <p className="mt-4 text-base font-semibold text-sub-text-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <button className="mt-6 bg-pink text-white text-lg font-semibold py-2 px-6 rounded">
              Contact us
            </button>
          </div>
        </section>
        <section className="mt-20 text-center">
          <h2 className="text-4xl font-bold">Our Features</h2>
          <div className="grid grid-cols-4 gap-10 mt-10">
            {[
              {Image: "/Images/delivery.png",  title: "Free Delivery" },
              {Image: "/Images/cashback.png", title: "100% Cash Back" },
              {Image: "/Images/premium.png", title: "Quality Product"  },
              {Image: "/Images/24hour.png",title: "24/7 Support" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-md flex flex-col items-center"
              >
                <img
                  src={feature.Image}
                  alt={feature.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-base text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-20 text-center">
          <h2 className="text-4xl font-bold">Our Client Say!</h2>
          <div className="mt-10">
            <div className="flex justify-center space-x-6">
              <img
                // src= "/images"
                alt="Client 1"
                className="w-16 h-16 rounded-full"
              />
              <img
                // src={image}
                alt="Client 2"
                className="w-16 h-16 rounded-full"
              />
              <img
                // src={maskGroup2}
                alt="Client 3"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <p className="mt-6 text-base text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
              ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a
              enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
              aliquam lacus volutpat praesent.
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-6 h-1 bg-pink rounded"></div>
              <div className="w-4 h-1 bg-gray-300 rounded"></div>
              <div className="w-4 h-1 bg-gray-300 rounded"></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default AboutUs;