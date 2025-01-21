import Benefits from "@/components/Benefits/Benefits";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Navbar from "@/components/Navbar/Navbar";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyMatchMaker from "@/components/WhyMatchMaker/WhyMatchMaker";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyMatchMaker />
      <Benefits />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
