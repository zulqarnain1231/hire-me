import React from "react";
import NextImage from "../Shared/Image/NextImage";
import { CiSearch } from "react-icons/ci";
import { BiFilterAlt } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { BsCheckCircle } from "react-icons/bs";

const Features = () => {
  const features = [
    {
      name: "Deal Tracking",
      detail:
        "Deals are often organized into a sales or business development pipeline.",
      icon: (
        <CiSearch className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-brand-secondary",
    },
    {
      name: "Pipeline Management",
      detail:
        "Once a lead is qualified, sales representatives make initial contact.",
      icon: (
        <BiFilterAlt className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-[#F7C31D]",
    },
    {
      name: "Interview Scheduling",
      detail:
        "Consider various interview formats, such as in-person, phone, video.",
      icon: (
        <FiCalendar className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-[#39C0C8]",
    },
    {
      name: "Email Tracking",
      detail:
        "In some cases, email tracking can also provide information about that.",
      icon: (
        <TfiEmail className="text-white-main sm:h-[44px] h-[34px] w-[34px] sm:w-[44px]" />
      ),
      background: "bg-[#FF7049]",
    },
  ];
  return (
    <section className="w-full px-5 md:px-0 lg:py-20 py-12 bg-white-main">
      <div className="w-full flex flex-col items-center justify-start gap-16">
        <h2 className="text-black-main text-center sm:text-6xl text-[44px] font-bold lg:w-[70%]">
          <span className="bg-[url('/Assets/Features/Circle.png')] bg-center bg-no-repeat bg-contain">
            Powerful
          </span>{" "}
          features to help build your career faster
        </h2>
        <div className="w-full grid lg:grid-cols-2 xl:gap-10 gap-8 lg:pr-10 lg:pl-0 md:pl-10">
          <aside className="w-full h-full">
            <NextImage
              imageSrc="/Assets/Features/Feature1.png"
              imageStyle="lg:object-fill object-contain"
              containerStyle="w-full lg:h-full h-[300px] sm:h-[400px]"
            />
          </aside>
          <aside className="w-full flex flex-col items-start justify-start xl:gap-8 gap-5">
            {features.map((item: any, index: number) => (
              <div
                key={index}
                className="w-full flex flex-col sm:flex-row items-center justify-start gap-5"
              >
                <span
                  className={`sm:h-[106px] h-[70px] sm:w-[106px] w-[70px] flex-shrink-0 flex items-center justify-center ${item.background} rounded-full`}
                >
                  {item.icon}
                </span>
                <div className="flex flex-col sm:items-start items-center justify-start gap-3">
                  <h2 className="text-black-main text-[28px] sm:text-[32px] text-center sm:text-left font-medium">
                    {item.name}
                  </h2>
                  <p className="text-gray-main text-base sm:text-lg text-center sm:text-left font-medium sm:w-[90%]">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </aside>
        </div>

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
            <button className="px-8 py-5 bg-brand-main rounded-xl flex items-center justify-center text-white-main sm:text-lg text-base font-medium">
              More Features
            </button>
          </aside>
          <aside className="w-full h-full">
            <NextImage
              imageSrc="/Assets/Features/Feature2.png"
              imageStyle="lg:object-fill object-contain"
              containerStyle="w-full lg:h-full h-[300px] sm:h-[400px]"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Features;
