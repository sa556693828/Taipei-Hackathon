import React from "react";
import { Divider } from "@chakra-ui/react";
import Logo from "@/assets/Logo.svg";
export default function Desktop() {
  const buttonStyle =
    "text-xs lg:w-16 xl:w-20 xl:text-md 2xl:w-32 2xl:text-xl flex items-center justify-center hover:opacity-80";

  return (
    <div className="w-full main hidden md:block">
      <header className="flex justify-between header">
        <div className="w-44">
          <img src={Logo.src} alt="logo" className="h-full w-full" />
        </div>
        <div className="flex flex-1 justify-center items-center gap-2 xl:gap-10 nav px-10">
          <a href="/#OverView" className={buttonStyle}>
            OVERVIEW
          </a>
          <a href="/#Prizes" className={buttonStyle}>
            PRIZES
          </a>
          <a href="/#Schedule" className={buttonStyle}>
            SCHEDULE
          </a>
          <a href="/#Judges" className={buttonStyle}>
            JUDGES
          </a>
          <a href="/#Partners" className={buttonStyle}>
            PARTNERS
          </a>
          <a href="/#FAQ" className={buttonStyle}>
            FAQ
          </a>
        </div>
        <div className="flex items-center w-44">
          <button className="border rounded-[56px] w-full h-5/6">報名</button>
        </div>
      </header>
      <Divider pt="3" />
    </div>
  );
}
