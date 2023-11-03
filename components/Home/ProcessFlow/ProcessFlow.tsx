import NextImage from "@/components/Shared/Image/NextImage";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import ProcessCard from "./ProcessCard";

const ProcessFlow = () => {
  const steps = [
    {
      title: "Get Started",
      detail:
        "Clearly articulate what you want to achieve. It's essential to have a specific & measurable.",
      image: "/Assets/Process/GetStarted.png",
    },
    {
      title: "Build Mind Maps",
      detail:
        "In the center of your page, write down the main topic or concept and this will be the central.",
      image: "/Assets/Process/Maps.png",
    },
    {
      title: "Explore Goal",
      detail:
        "Create major branches radiating out from your main goal. These can represent different.",
      image: "/Assets/Process/Explore.png",
    },
  ];
  return (
    <ComponentWrapper style="bg-white-main lg:py-20 py-12">
      <div className="w-full flex flex-col items-center justify-start lg:gap-16 gap-12">
        <h2 className="text-black-main text-center sm:text-6xl text-[44px] font-bold">
          Process flow for our Hire.me
        </h2>
        <p className="text-gray-main text-center text-lg sm:text-xl font-medium lg:w-[60%]">
          In addition to personnel planning and time registration, Shiftbase
          offers many more functions that can save you a lot of time!
        </p>
        <div className="w-full grid lg:grid-cols-3 gap-8">
          {steps.map((item: any, index: number) => (
            <ProcessCard
              key={index}
              title={item.title}
              image={item.image}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default ProcessFlow;
