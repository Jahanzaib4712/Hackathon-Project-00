import Image from "next/image";
import React from "react";

const blogPosts = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/images/frame1.png",
  },
  {
    id: 2,
    author: "Surfuxion",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/images/frame2.png",
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/images/frame3.png",
  },
];

const LeatestBlog: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-3xl font-bold text-blue-900 mb-8">Latest Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-md  space-y-32 "
            style={{ width: "370px", height: "493px" }}
          >
            <img src={post.imgSrc} alt={post.title} className="relative h-[255px] w-full object-cover rounded-md" />
            <div className="mt-4 relative top-[-114px] p-4">
              <div className=" ml-4 text-sm text-gray-500 flex items-center gap-2 font-josefin">
                <span>{post.author}</span>
                <div className="relative bottom-[1px]">
                <Image src="/Images/calendar.png" alt="penimage" width={11.33} height={11.33} />
              </div>
                <span>{post.date}</span>
              </div>
              <div className="relative bottom-[14px]">
                <Image src="/Images/pen.png" alt="penimage" width={11.33} height={11.33} />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mt-2 hover:text-[#FB2E86] ">{post.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              <button className="text-blue-500 underline mt-4 hover:text-[#FB2E86]">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeatestBlog;
