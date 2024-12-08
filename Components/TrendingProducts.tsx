import React from "react";

const trendingProducts = [
  { id: 1, title: "Cantilever chair", price: 26.0, originalPrice: 42.0, imgSrc: "/images/number1.png" },
  { id: 2, title: "Cantilever chair", price: 26.0, originalPrice: 42.0, imgSrc: "/images/number2.png" },
  { id: 3, title: "Cantilever chair", price: 26.0, originalPrice: 42.0, imgSrc: "/images/number3.png" },
  { id: 4, title: "Cantilever chair", price: 26.0, originalPrice: 42.0, imgSrc: "/images/number4.png" },
];

const verticalProducts = [
  { id: 1, title: "Executive Seat chair", price: 32.0, imgSrc: "/images/image18.png" },
  { id: 2, title: "Executive Seat chair", price: 32.0, imgSrc: "/images/image19.png" },
  { id: 3, title: "Executive Seat chair", price: 32.0, imgSrc: "/images/image20.png" },
];

const TrendingProducts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-64">
      {/* Trending Products Section */}
      <section>
        <h1 className="text-center text-[42px] font-bold text-blue-900 mb-8">Trending Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md flex flex-col items-center"
              style={{ width: "270px", height: "350px" }}
            >
              <img src={product.imgSrc} alt={product.title} className="h-[70%] w-[90%] object-cover bg-[#F5F6F8] p-7" />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h2>
              <div className="flex items-center gap-2 mt-2 text-[14px]">
                <p className="text-[#151875] font-bold">${product.price.toFixed(2)}</p>
                <p className="text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discount Banners Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="bg-pink-50 p-6 h-[270px] w-[420px] rounded-md items-center flex">
          <div >
            <h2 className="text-2xl font-bold text-blue-900">23% off in all products</h2>
            <button className="text-pink-500 underline font-semibold mt-2">Shop Now</button>
          </div>
          <img src="/images/discount1.png" alt="Discount" className="h-16 object-contain" />
        </div>
        <div className= "flex bg-blue-50 p-6 h-[270px] w-[420px] rounded-md items-center ">
          <div>
            <h2 className="text-2xl font-bold text-blue-900">23% off in all products</h2>
            <button className="text-blue-500 underline font-semibold mt-2">View Collection</button>
          </div>
          <img src="/images/discount2.png" alt="Discount" className="h-16 object-contain" />
        </div>
      

      {/* Vertical Products Section */}
        
        <div className="bg-white p-6 rounded-md shadow-md flex ">
          <ul className="space-y-4">
            {verticalProducts.map((product) => (
              <li key={product.id} className="flex items-center gap-4">
                <img src={product.imgSrc} alt={product.title} className="h-[90px] p-2 w-[90px] object-cover bg-[#F5F6F8] rounded-md" />
                <div>
                  <h3 className="text-[#151875] font-semibold text-[16px]">{product.title}</h3>
                  <p className="text-[#151875] font-bold text-[12px]">${product.price.toFixed(2)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </section>
        
    </div>
    
  );
};

export default TrendingProducts;
