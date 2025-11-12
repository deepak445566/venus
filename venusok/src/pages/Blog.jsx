import React from "react";

const Blog = () => {
  const posts = [
    {
      img: "/images/main1.jpg",
      title:
        "Crafting Captivating Headlines: Your awesome post title goes here",
      date: "October 31, 2024",
      desc: "Engaging Introductions: Capturing Your Audience’s Interest. The initial impression your blog post makes is crucial, and that’s where your introduction matters most.",
    },
    {
      img: "/images/main2.webp",
      title:
        "The Art of Drawing Readers In: Your attractive post title goes here",
      date: "October 31, 2024",
      desc: "Engaging Introductions: Capturing Your Audience’s Interest. The initial impression your blog post makes is crucial, and that’s where your introduction matters most.",
    },
    {
      img: "/images/main5.jpg",
      title:
        "Mastering the First Impression: Your intriguing post title goes here",
      date: "October 31, 2024",
      desc: "Engaging Introductions: Capturing Your Audience’s Interest. The initial impression your blog post makes is crucial, and that’s where your introduction matters most.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#001845] mb-10">
        Latest Blog Posts
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-[#001845] mb-2 hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{post.date}</p>
              <p className="text-gray-600 flex-grow">{post.desc}</p>

              <a
                href="#"
                className="text-blue-600 font-medium mt-4 hover:underline"
              >
                Read More »
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
