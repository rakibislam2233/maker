import React from "react";
import benefit1 from "@/assets/benefits/benefits-1.png";
import benefit2 from "@/assets/benefits/benefits-2.png";
import benefit3 from "@/assets/benefits/benefits-3.png";
import Image from "next/image";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      name: "Quality Over Quantity",
      description:
        "Our AI matches you with people who align with your values, goals, and lifestyle—no endless swiping required.",
      image: benefit1,
    },
    {
      id: 2,
      name: "Less Swiping,  More Connecting",
      description:
        "Get five curated matches each week, so you can focus on building meaningful connections without the overwhelm.",
      image: benefit2,
    },
    {
      id: 3,
      name: "Designed for Real Relationships",
      description:
        "We prioritize compatibility to help you find someone who’s truly in it for the long haul.",
      image: benefit3,
    },
  ];

  return (
    <section id="benefits" className="w-full bg-white px-5 py-16 md:py-28">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl xl:text-7xl font-bold leading-normal">
          BENEFITS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[57px]">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="w-full flex flex-col gap-3">
              <div className="bg-[#9DDEFF]  p-5 rounded-md">
                <Image
                  src={benefit.image.src}
                  alt={benefit.name}
                  width={315}
                  height={265}
                  className="w-full h-[265px] max-w-[315px] mx-auto mb-6"
                />
              </div>
              <div className="p-2 space-y-2">
                <h3 className="text-xl md:text-[26px] font-semibold">{benefit.name}</h3>
                <p className="text-lg md:text-[19px] text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;