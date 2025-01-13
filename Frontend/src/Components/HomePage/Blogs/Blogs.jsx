import React from "react";
import blog_pic1 from "./../../../assets/blog_pic1.webp";
import blog_pic2 from "./../../../assets/blog_pic2.webp";
import blog_pic3 from "./../../../assets/blog_pic3.webp";
import { motion } from "motion/react";

const BlogCards = [
  {
    id: 1,
    image: blog_pic1,
    tag: "Serum",
    comments: 1,
    title: "How Long It Takes To See Skin-Changing Results",
  },

  {
    id: 2,
    image: blog_pic2,
    tag: "Body",
    comments: 0,
    title: "How To Get Glass Skin Using Buff It Out",
  },
  {
    id: 3,
    image: blog_pic3,
    tag: "Care",
    comments: 2,
    title: "How To Keep Your Combination Skin Balanced",
  },
];

const Blogs = () => {
  return (
    <section>
      <div className="m-20">
        {/* Heading section */}
        <div className="mb-8">
          <h1 className="text-5xl font-light mb-5">From The Good Skin Blog</h1>
          <p className="text-gray-500 text-lg">
            Subscribe for latest news and blog updates from our editor.
          </p>
        </div>

        {/* Blogs Card */}
        <div className="flex gap-10">
          {BlogCards.map((item, index) => (
            <div key={index} className="w-1/3 overflow-hidden">
              <motion.img
                src={item.image}
                alt="BlogPic1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full mb-5"
              />
              <div className="flex gap-10 mb-5">
                <p className="text-gray-500">{item.tag}</p>
                <p className="text-gray-500">{item.comments} Comments</p>
              </div>

              <h3 className="text-2xl mb-5">{item.title}</h3>
              <button className="uppercase underline text-gray-700 font-medium text-sm">
                More Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
