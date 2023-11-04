import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import NextImage from "../Image/NextImage";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const Footer = () => {
  const columnsData = [
    {
      title: "Functions",
      menu: [
        "Personnel planning",
        "Time registration",
        "Leave registration",
        "Leave registration",
        "Report",
      ],
    },

    {
      title: "Industries",
      menu: [
        "All industries",
        "Catering industry",
        "Retail",
        "Recreation",
        "Production",
        "Transportation",
        "Care and welfare",
      ],
    },
    {
      title: "Product",
      menu: [
        "To register",
        "Login",
        "Prices",
        "Demonstration",
        "Help center",
        "API documentation",
        "Partners",
      ],
    },
    {
      title: "Company",
      menu: [
        "Contact",
        "About us",
        "ISO certification",
        "Resources",
        "Dictionary",
        "Vacancies",
        "Blog",
      ],
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex flex-col border-t border-t-white-main/10">
      <ComponentWrapper style="bg-black-main py-12">
        <div className="w-full grid grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr,1fr] lg:gap-4 gap-6">
          {/* first column */}
          <div className="w-full flex flex-col items-start justify-start gap-6 lg:col-auto col-span-2">
            <Link href={"/"}>
              <NextImage
                imageSrc="/Assets/Logo.png"
                containerStyle="h-[20px] w-[90px]"
              />
            </Link>
            <p className="text-sm sm:text-base text-white-main/60 font-medium">
              Groeneweg 2A2718 AA Zoetermeer Netherlands
            </p>
            <div className="w-full flex flex-col items-start justify-start">
              <p className="text-sm sm:text-base text-white-main/60 font-medium">
                info@shiftbase.com
              </p>
              <p className="text-sm sm:text-base text-white-main/60 font-medium">
                NL: +31 79 808 0107
              </p>
              <p className="text-sm sm:text-base text-white-main/60 font-medium">
                BE: +32 2 588 57 37
              </p>
            </div>
            <div className="w-full flex items-center justify-start gap-3">
              <span className="w-[28px] h-[28px] flex items-center justify-center cursor-pointer rounded-full bg-white-main/60 hover:scale-105 hover:duration-200">
                <FaYoutube className="text-base text-black-main" />
              </span>
              <span className="w-[28px] h-[28px] flex items-center justify-center cursor-pointer rounded-full bg-white-main/60 hover:scale-105 hover:duration-200">
                <FaLinkedinIn className="text-base text-black-main" />
              </span>
              <span className="w-[28px] h-[28px] flex items-center justify-center cursor-pointer rounded-full bg-white-main/60 hover:scale-105 hover:duration-200">
                <FaFacebookF className="text-base text-black-main" />
              </span>
            </div>
          </div>
          {/* other columns */}
          {columnsData.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full flex flex-col items-start justify-start gap-6"
            >
              <p className="text-lg sm:text-xl font-medium text-white-main">
                {item.title}
              </p>
              <div className="w-full flex flex-col items-start justify-start gap-3">
                {item.menu.map((el: any, index: number) => (
                  <Link
                    key={index}
                    href={"/"}
                    className="text-sm sm:text-base font-normal text-white-main/60"
                  >
                    {el}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ComponentWrapper>
      <ComponentWrapper style="bg-[#1E1E1E] py-3">
        <div className="w-full h-full flex lg:flex-row flex-col lg:justify-center justify-start lg:items-center items-start gap-6">
          <div className="h-[40px] sm:w-[170px] w-full flex  sm:justify-center justify-between items-center gap-3 rounded bg-white-main px-3">
            <p className="text-black-main text-sm sm:text-base font-medium">
              Nederlands
            </p>
            <FiChevronDown className="text-xl text-black-main" />
          </div>
          <p className="text-sm sm:text-base font-medium text-white-main/60">
            © {year} copyright by Hire.me - All rights reserved.
          </p>
          <p className="text-sm sm:text-base font-medium text-white-main/60">
            Terms and Conditons
          </p>
        </div>
      </ComponentWrapper>
    </footer>
  );
};

export default Footer;
