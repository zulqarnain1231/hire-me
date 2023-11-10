import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";

const Hero = () => {
  return (
    <ComponentWrapper style="lg:h-[calc(100dvh-[144px])]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 lg:mt-20 mt-8 pb-8 z-50">
        <h1 className="text-white-main font-bold text-center sm:text-7xl text-5xl xl:w-[70%] z-50">
          Focus on your career, not your accounting.
        </h1>
        <p className="text-white-main text-center sm:text-2xl text-xl font-medium xl:w-[55%] lg:w-[70%] z-50">
          Start your hunt for the best, life-changing career opportunities with
          Hire.me in your selected areas and get hired.
        </p>
        <div className="w-full flex sm:flex-row flex-col items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-[#3773FF] px-8 py-5 z-50 sm:w-[400px] w-full focus:outline-none text-white-main text-base sm:text-lg font-medium placeholder:text-white-main rounded-xl"
          />
          <button className="bg-white-main z-50 px-8 py-5 sm:w-auto w-full rounded-xl text-base sm:text-lg font-medium text-brand-main">
            Get Started
          </button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
