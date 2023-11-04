import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import NextImage from "@/components/Shared/Image/NextImage";

const Reviews = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start gap-16 lg:py-20 py-12 bg-white-main">
      <ComponentWrapper>
        <div className="w-full flex items-center justify-start">
          <h2 className="w-[80%] text-black-main font-bold sm:text-7xl text-5xl sm:leading-[83px]">
            4,000+ companies trusted Hire.me
          </h2>
        </div>
      </ComponentWrapper>
      <div className="w-full grid lg:grid-cols-2 md:pl-10 pl-5">
        <div className="w-full flex flex-col items-start justify-start sm:gap-8 gap-6 sm:p-8 p-6 shadow-review bg-white-main rounded-xl">
          <NextImage
            containerStyle="w-[185px] h-[32px]"
            imageSrc="/Assets/Reviews/Mobilen.png"
          />
          <p className="text-gray-main text-base sm:text-lg font-medium">
            We have been using Hire.me for more than five years now and are very
            satisfied. We are especially pleased with the excellent service.
            This makes it a very pleasant company to work with.
          </p>
          <div className="w-full flex sm:flex-row flex-col justify-start sm:justify-between items-start gap-6 sm:items-center">
            <div className="flex items-center justify-start gap-3">
              <NextImage
                imageSrc="/Assets/Reviews/Customer1.png"
                containerStyle="h-[64px] w-[64px]"
              />
              <div className="flex flex-col items-start justify-center gap-2">
                <p className="text-black-main text-xl sm:text-2xl font-medium">
                  Brooklyn Simmons
                </p>
                <p className="text-gray-main text-base sm:text-lg font-medium">
                  CEO, mobiel.nl
                </p>
              </div>
            </div>
            <NextImage
              imageSrc="/Assets/Reviews/Stars.png"
              containerStyle="h-[24px] w-[120px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
