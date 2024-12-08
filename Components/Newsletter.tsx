import React from 'react';

const Newsletter = () => {
  return (
    <div className="h-[462px] w-full bg-[url('/Images/rectangle.png')] bg-cover bg-center mt-6 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-[35px] font-josefin Sans ">
          Get Latest Update By Subscribe <br />
          Our Newsletter
        </div>
        <div>
          <button className="bg-[#FB2E86] w-[173px] h-[49px] text-white ">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
