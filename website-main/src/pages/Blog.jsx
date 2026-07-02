import React from "react";


function  blogData = [
  {
    id: 3,
    title: "Data Cleaning Techniques Every Analyst Should Know",
    author: "Chinmayee Khanna",
    imageUrl: "/blog11.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/data-cleaning-techniques-every-analyst-should-know-0a9ab0adbb50",
  },
  {
    id: 2,
    title: "What Happens When Systems Fail-And Humans Take Over",
    author: "Ashita Saxena",
    imageUrl: "/blog10.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/what-happens-when-systems-fail-and-humans-take-over-8120ed4c2ae5",
  },
  {
    id: 1,
    title: "Exploring the Metaverse: Your Guide to the Virtual Universe",
    author: "Shreya Singh",
    imageUrl: "/blog9.jpeg",
    readMoreUrl: "https://medium.com/@ieee.wiemuj/exploring-the-metaverse-your-guide-to-the-virtual-universe-5dace13f5716",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-purple-200">
        Our Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogData.map((blog) => (
          <a
            key={blog.id}
            href={blog.readMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-950/40 border border-pink-500/50 rounded-2xl overflow-hidden hover:border-pink-400 transition-all duration-300 cursor-pointer block"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-lg font-semibold text-white leading-snug">
                {blog.title}
              </h2>
              <p className="text-pink-400 text-sm">By {blog.author}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
