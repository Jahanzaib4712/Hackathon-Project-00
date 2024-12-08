// src/pages/index.tsx
import Image from "next/image";
import React from "react";

const OneMore: React.FC = () => {
  // Card data array
  const cardData = [
    { image: "/Images/delivery.png", title: "Fast Delivery" },
    { image: "/Images/cashback.png", title: "24/7 Support" },
    { image: "/Images/premium.png", title: "Best Quality" },
    { image: "/Images/24hour.png", title: "Easy Returns" },
  ];

  return (
    <div className="bg-white h-auto">
      {/* Upper Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          What Shopex Offer!
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-md max-w-xs text-center"
            >
              <div className="mb-4">
                <div className="w-[65px] h-[65px] mx-auto  rounded-full flex items-center justify-center text-lg text-orange-600 font-bold">
                  <Image
                    src={card.image}
                    alt={`${card.title} image`}
                    width={65}
                    height={65}
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida. consectetur adipiscing elit
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OneMore;

