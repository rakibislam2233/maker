import React from "react";

const WhyMatchMaker = () => {
  return (
    <section
      id="why-match-maker"
      className="w-full bg-primary px-5 py-16 md:py-28"
    >
      <div className="w-full max-w-7xl mx-auto ">
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold leading-normal mb-10">
          Why Maker Match
        </h1>
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-10 md:gap-16">
          <div>
            <h1 className="text-3xl md:text-[40px] font-bold leading-normal">
              Designed for{" "}
              <span className="text-white">
                Long- <br /> Term Relationships
              </span>
            </h1>
          </div>
          <div>
            <p className="text-[#424857] font-medium text-lg md:text-[19px] leading-relaxed">
              We focus on matching users who are serious about building
              successful, lasting relationships.
            </p>
          </div>
          <div>
            <h1 className="text-3xl md:text-[40px] font-bold leading-normal">
              Powered by{" "}
              <span className="text-white">
                OpenAi & <br /> Relationship Science
              </span>
            </h1>
          </div>
          <div>
            <p className="text-[#424857] font-medium text-lg md:text-[20px] leading-relaxed">
              Combining dating science and AI we match you with people who truly
              align with your values and goals.
            </p>
          </div>
          <div>
            <h1 className="text-3xl md:text-[40px] font-bold leading-normal text-white">
              No Swiping
              <span className="text-black">
                , <br /> No Stress
              </span>
            </h1>
          </div>
          <div>
            <p className="text-[#424857] font-medium text-lg md:text-[20px] leading-relaxed">
              Say goodbye to the swipe culture. With MakerMatch, quality comes
              first.
            </p>
          </div>
          <div>
            <h1 className="text-3xl md:text-[40px] font-bold leading-normal">
              Built for{" "}
              <span className="text-white">
                Busy <br /> People
              </span>
            </h1>
          </div>
          <div>
            <p className="text-[#424857] font-medium text-lg md:text-[20px] leading-relaxed">
              With just 5 matches per week, you can focus on meaningful
              connections without the overwhelm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMatchMaker;
