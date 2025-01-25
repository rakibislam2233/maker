import React from "react";
import Image from "next/image";
import { Testimonial } from "./Testimonials";
const TestimonialsCard = ({ testimonial }: {testimonial:Testimonial}) => {
  return (
    <div className="w-full flex flex-col md:flex-row  gap-5 bg-white">
      <Image src={testimonial?.image} width={430} height={200} alt="Image" className="w-full md:w-[476px] h-56 md:h-[318px]" />
      <div className="px-5 md:px-10 py-8 md:py-20 text-center md:text-left space-y-3">
        <h1 className="text-2xl font-bold  text-gray-700">
          {testimonial?.title}
        </h1>
        <p className="text-gray-700 text-lg">{testimonial?.description}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
