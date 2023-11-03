import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/",
    },
    {
      name: "Pages",
      route: "/",
    },
    {
      name: "Contact",
      route: "/",
    },
  ];
  return (
    <ComponentWrapper style="bg-transparent h-[80px]">
      <div className="w-full h-full flex items-center justify-between">
        <Link href={"/"} className="relative h-[20px] w-[95px]">
          <Image
            className="w-full h-full object-fill"
            src={"/Assets/Logo.png"}
            alt=""
            fill
          />
        </Link>
        <div className="h-full md:flex hidden items-center justify-center gap-6">
          {menu.map((item: any, index: number) => (
            <Link
              key={index}
              href={item.route}
              className="text-white-main text-lg font-medium flex items-center justify-center gap-2"
            >
              {item.name}
              {item.name === "Pages" && (
                <FiChevronDown className="text-2xl text-white-main" />
              )}
            </Link>
          ))}
        </div>
        <button className="md:inline-block hidden py-3 px-6 bg-transparent rounded-[30px] border-[1.5px] border-white-main text-lg text-white-main font-medium">
          Start free trial
        </button>
        <button className="md:hidden flex">
          <BiMenuAltRight className="text-white-main text-3xl" />
        </button>
      </div>
    </ComponentWrapper>
  );
};

export default Navbar;
