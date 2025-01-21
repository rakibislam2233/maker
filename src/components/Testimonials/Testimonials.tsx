"use client";
import React from "react";
import image from "@/assets/testimonials/image.jpg";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsCard from "./TestimonialsCard";
import { StaticImageData } from "next/image";

// Type for a single testimonial
export type Testimonial = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
};

// Props for Custom Arrow Components
type ArrowProps = {
  onClick?: () => void;
};

// Custom Arrow Components
const CustomPrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute left-0 md:-left-14 top-1/2 transform -translate-y-1/2 bg-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10"
    onClick={onClick}
  >
    <span className="text-white text-lg">‹</span>
  </div>
);

const CustomNextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div
    className="absolute right-0 md:-right-14 top-1/2 transform -translate-y-1/2 bg-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer z-10"
    onClick={onClick}
  >
    <span className="text-white text-lg">›</span>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: image, // Replace with your image
      title: "Lorem Ipsum & Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      image: image, // Replace with your image
      title: "Dolor Sit & Amet Consectetur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      image: image, // Replace with your image
      title: "Eiusmod Tempor & Incididunt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: () => (
      <div className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100"></div>
    ),
    dotsClass: "slick-dots custom-dots",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section id="testimonials" className="w-full bg-pink-500 px-5 py-16 md:py-28 text-white">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center  mb-12">
          TESTIMONIALS
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <TestimonialsCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
