import React, { useState } from "react";
import faq_pic from "./../../assets/faq_pic.webp";

const FAQ = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused items in their original packaging.",
    },
    {
      question: "What Are Your Products Made",
      answer:
        'We want you to be completely satisfied with your purchase. If for any reason you are not, you can return any item in its original condition within 30 days of receipt for a full refund or exchange. Please ensure that the products have all original tags and packaging. To initiate a return, visit our "Returns" page and follow the instructions provided. Remember to keep your receipt as proof of purchase. Some exclusions may apply, so be sure to check our detailed return policy for more information.',
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, we will send you a tracking number via email.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused items in their original packaging.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused items in their original packaging.",
    },
  ];

  // State to manage the open FAQ
  const [openIndex, setOpenIndex] = useState(0);

  // Toggle FAQ function
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Close if already open, else open
  };
  return (
    <section className="relative border-b border-gray-800">
      {/* Heading section */}
      <div className="m-20">
        <div className="mb-8">
          <p className="text-[#7e7e84] font-semibold uppercase mb-4">
            Angel Skin
          </p>
          <h1 className="text-4xl">Best Seller Skin</h1>
        </div>

        {/* Main Content */}
        <div className="flex">
          {/* Image section */}
          <div className="justify-start w-1/2">
            <img src={faq_pic} alt="" />
          </div>

          {/* Questions section */}
          <div className="w-1/2 px-10">
            {faqs.map((faq, index) => (
              <div key={index} className="shadow p-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Question */}
                  <h3 className="text-3xl font-light">{faq.question}</h3>
                  {/* Toggle Icon */}
                  <button className="text-xl font-bold text-gray-600">
                    {openIndex === index ? "-" : "+"}
                  </button>
                </div>
                {/* Answer */}
                {openIndex === index && (
                  <p className=" text-gray-600 my-5">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
