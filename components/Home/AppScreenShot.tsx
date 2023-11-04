import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const AppScreenShot = () => {
  return (
    <ComponentWrapper style="bg-white-off lg:py-20 py-12">
      <div className="w-full flex items-center justify-center md:-mt-36 z-10">
        <NextImage
          imageStyle="sm:object-contain object-fill"
          imageSrc="/Assets/Hero/OverLap.png"
          containerStyle="w-full md:h-[500px] sm:h-[400px] h-[270px]"
        />
      </div>
    </ComponentWrapper>
  );
};

export default AppScreenShot;
