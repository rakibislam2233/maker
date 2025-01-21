import React from "react";
import benefit1 from "@/assets/benefits/benefits-1.png";
import benefit2 from "@/assets/benefits/benefits-2.png";
import benefit3 from "@/assets/benefits/benefits-3.png";
import Image from "next/image";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: benefit1,
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: benefit2,
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: benefit3,
    },
  ];

  return (
    <section id="benefits" className="w-full bg-white px-5 py-16 md:py-28">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">BENEFITS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="w-full flex flex-col gap-3">
              <div className="bg-[#9DDEFF] p-5 rounded-md">
                <Image
                  src={benefit.image.src}
                  alt={benefit.name}
                  width={250}
                  height={250}
                  className="w-full h-[250px] max-w-[250px] mx-auto mb-6"
                />
              </div>
             <div className="p-2 space-y-1">
             <h3 className="text-xl font-semibold">{benefit.name}</h3>
             <p className=" text-gray-600">{benefit.description}</p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
