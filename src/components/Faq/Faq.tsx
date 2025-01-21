'use client'
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "How does MakerMatch work?",
      answer:
        "Our AI matches you with compatible users based on your answers to a few thoughtful questions. No swiping—just meaningful matches delivered to you weekly.",
    },
    {
      question: "Who is MakerMatch for?",
      answer:
        "MakerMatch is perfect for people who are ready to build meaningful, long-term relationships and value quality connections.",
    },
    {
      question: "How often will I get matches?",
      answer:
        "You’ll receive 5 curated matches every week, giving you time to explore and connect with each one.",
    },
    {
      question: "What makes MakerMatch different?",
      answer:
        "We prioritize compatibility and values over superficial swiping. Our focus is on long-term success.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#EBF7FD] px-5 py-16 md:py-28">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Frequently Asked <span className="text-secondary">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="px-4 py-5 bg-white transition rounded-xl "
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="size-10 rounded-full bg-secondary flex justify-center items-center text-white ">
                  {activeIndex === index ? <FaAngleUp className="size-5"/> : <FaAngleDown className="size-5"/>}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
