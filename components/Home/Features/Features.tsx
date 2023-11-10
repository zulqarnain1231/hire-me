import React from "react";
import NextImage from "../../Shared/Image/NextImage";
import { BsCheckCircle } from "react-icons/bs";
import FeaturesTab from "./FeaturesTab";

const Features = () => {
  return (
    <section className="w-full px-5 md:px-0 lg:py-28 py-12 bg-white-main">
      <div className="w-full flex flex-col items-center justify-start gap-16">
        <h2 className="text-black-main text-center sm:text-6xl text-[44px] font-bold lg:w-[70%]">
          <span className="bg-[url('/Assets/Features/Circle.png')] bg-center bg-no-repeat bg-contain">
            Powerful
          </span>{" "}
          features to help build your career faster
        </h2>
        <FeaturesTab />

        <div className="w-full flex flex-col-reverse items-center justify-start lg:grid lg:grid-cols-2 xl:gap-10 gap-8 lg:pl-16 lg:pr-0 md:px-10 my-12">
          <aside className="w-full flex flex-col items-center lg:items-start justify-start xl:gap-12 gap-5">
            <h2 className="text-black-main lg:text-left text-center sm:text-6xl text-[44px] font-bold ">
              Hire.me is built for{" "}
              <span className="bg-[url('/Assets/Features/Circle.png')] bg-center bg-no-repeat bg-contain">
                recruiters
              </span>
            </h2>
            <div className="w-full flex items-start justify-start gap-3">
              <BsCheckCircle className="text-2xl text-brand-secondary flex-shrink-0" />
              <p className="text-base sm:text-lg text-gray-main font-medium lg:w-[70%]">
                <span className="text-black-main font-bold">
                  {" "}
                  Job page builder:{" "}
                </span>
                Stop worrying about formatting or design. Our
                application-builder lets you create the application journeys you
                envision.
              </p>
            </div>
            <div className="w-full flex items-start justify-start gap-3">
              <BsCheckCircle className="text-2xl text-brand-secondary flex-shrink-0" />
              <p className="text-base sm:text-lg text-gray-main font-medium lg:w-[70%]">
                <span className="text-black-main font-bold">
                  {" "}
                  Give back initiative:{" "}
                </span>
                Narrow down your applications and let the most passionate show
                off with pre-screening assignments.
              </p>
            </div>
            <button className="px-8 py-5 bg-brand-main rounded-xl flex items-center justify-center text-white-main sm:text-lg text-base font-medium hover:bg-brand-main/90 hover:duration-200">
              More Features
            </button>
          </aside>
          <aside className="w-full h-full">
            <NextImage
              imageSrc="/Assets/Features/Feature2.png"
              imageStyle="lg:object-cover object-contain"
              containerStyle="w-full lg:h-full h-[300px] sm:h-[400px]"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Features;
