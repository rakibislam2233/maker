import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const HeroSection = () => {
  const spotsLeft = 1472; // Number of spots left

  // Convert the spotsLeft number into an array of digits
  const spotsArray = spotsLeft.toString().split("");
  return (
    <section className="w-full h-full px-5 py-28 md:py-36">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-normal">
            Find Your <br /> Perfect{" "}
            <span className="text-secondary">Match</span>
          </h1>
          <p className="text-[16px]  mt-3">
            Our AI-powered matchmaking service connects you with compatible
            partners based on what truly matters your values, goals, and
            personality. Ready to meet your match?
          </p>
        </div>
        <div className="w-full flex flex-col text-center justify-center">
          <h1 className="text-xl font-semibold text-[#696B6F] mb-4">
            We’re Launching Next Month
          </h1>
          <div className="w-full max-w-full border p-10 rounded-xl shadow-md bg-white mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            {spotsArray.map((digit, index) => (
              <div
                key={index}
                    className="size-14 flex items-center justify-center border rounded-md bg-[#F4F4F4]"
              >
                <span className="text-xl font-bold text-[#696B6F]">{digit}</span>
              </div>
            ))}
            <span className="text-lg text-[#696B6F] ml-2">spots left</span>
          </div>
          <hr className="my-9" />
          <h3 className="text-xl font-semibold text-[#696B6F] mb-4">
            Claim Your Spot For Free
          </h3>
          <div className="flex justify-between items-center gap-1 rounded-full bg-[#F2F3F6] p-1">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full py-2 px-5 rounded-l-full outline-none bg-transparent text-[#696B6F]"
            />
            <button className="bg-[#00A2F3] text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-1">
              Submit
              <GoArrowUpRight className="size-6"/>
            </button>
          </div>
        </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
