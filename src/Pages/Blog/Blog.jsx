import React from "react";
import { blogs } from "../../Data/data";
import HeroBanner from "../../Shared/HeroBanner";
import bgImage from "../../assets/BlogBanner.jpg";

const BlogList = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <HeroBanner bgImage={bgImage} title="LATEST BLOG" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-5">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">
                {blog.date} • {blog.category}
              </p>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <p className="text-sm text-gray-400">By {blog.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
