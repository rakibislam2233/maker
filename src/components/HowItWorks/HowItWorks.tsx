import Image from "next/image";
import step1 from "@/assets/how-work/step1.png";
import step2 from "@/assets/how-work/step2.png";
import step3 from "@/assets/how-work/step3.png";

const HowItWorks = () => {
  return (
    <div className="w-full bg-[#EBF7FD] px-5 py-16 md:py-32">
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold leading-normal">
          How It <span className="text-secondary">Works</span>
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-10 mt-10">
          {/* Step 1 */}
          <div className="order-1 md:order-1 space-y-2">
            <h1 className="text-primary text-2xl font-semibold uppercase">
              Step 1
            </h1>
            <h1>
              Set your filters and answer 5x short questions about yourself and
              what you’re looking for
            </h1>
          </div>
          <Image
            src={step1}
            alt="step1"
            width={350}
            height={300}
            className="order-2 md:order-2 mx-auto"
          />
          {/* Step 2 */}
          <div className="order-3 md:order-4 space-y-2">
            <h1 className="text-secondary text-2xl font-semibold uppercase">
              Step 2
            </h1>
            <h1>
              AI matches your answers to all users in our network to find your
              perfect matches. We send you 5x matches every Sunday (along with
              date ideas based on your mutual interests, location, and
              availability)
            </h1>
          </div>
          <Image
            src={step2}
            alt="step2"
            width={350}
            height={300}
            className="order-4 md:order-3 mx-auto"
          />
          {/* Step 3 */}
          <div className="order-5 md:order-5 space-y-2">
            <h1 className="text-primary text-2xl font-semibold uppercase">
              Step 3
            </h1>
            <h1>
              Get matched with your perfect matches, chat, and set up a date
            </h1>
          </div>
          <Image
            src={step3}
            alt="step3"
            width={350}
            height={300}
            className="order-6 md:order-6 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
