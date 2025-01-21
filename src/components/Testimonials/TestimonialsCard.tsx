import React from "react";
import Image from "next/image";

interface ITestimonial {
  id: number;
  image: string;
  title: string;
  description: string;
}
const TestimonialsCard = ({ testimonial }: {testimonial:ITestimonial}) => {
  return (
    <div className="w-full flex  gap-5 bg-white">
      <Image src={testimonial?.image} width={430} height={200} alt="Image" />
      <div className="px-10 py-20 text-center md:text-left space-y-3">
        <h1 className="text-2xl font-bold  text-gray-700">
          {testimonial?.title}
        </h1>
        <p className="text-gray-700 text-lg">{testimonial?.description}</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
