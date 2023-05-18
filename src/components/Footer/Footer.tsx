import React from "react";
import Logo from "@/assets/Logo.svg";
import { useRouter } from "next/router";

export default function Footer() {
  const buttonStyle =
    "flex items-center justify-center hover:opacity-80 font-medium";
  const router = useRouter();
  const goPage = (page: string) => {
    router.push(page);
  };
  return (
    <footer className="flex items-center bg-[#ffffff]/20 px-32 py-4">
      <div className="w-44 cursor-pointer" onClick={() => goPage("/")}>
        <img src={Logo.src} alt="logo" className="h-full w-full" />
      </div>
      <div className="flex flex-1 justify-start items-center gap-10 pl-10 text-base">
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
      <div className="font-medium text-white/60">© 2023 TAIPEIHACKATHON.</div>
    </footer>
  );
}
