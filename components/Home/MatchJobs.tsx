import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const MatchJobs = () => {
  return (
    <ComponentWrapper style="lg:py-20 py-12 bg-white-main">
      <div className="w-full flex flex-col items-center justify-start gap-12">
        <h2 className="text-black-main text-center sm:text-6xl text-[44px] font-bold lg:w-[70%]">
          Match more candidates and jobs{" "}
          <span className="bg-[url('/Assets/Process/Underline.png')] bg-bottom bg-no-repeat bg-contain">
            with AI.
          </span>
        </h2>
        <p className="text-gray-main text-center text-lg sm:text-xl font-medium lg:w-[50%]">
          Now with semantic-driven candidate searching and matching,
          organizations looking for talent can transform
        </p>
        <NextImage
          imageSrc="/Assets/AiJobs.png"
          containerStyle="w-full lg:h-[700px] md:h-[500px] sm:h-[400px] h-[300px]"
        />
      </div>
    </ComponentWrapper>
  );
};

export default MatchJobs;
