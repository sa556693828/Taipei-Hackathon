import React from "react";
import Logo from "@/assets/Logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

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
        <Image src={Logo.src} alt="logo" width="300" height="100" />
      </div>
      {/* <div className="flex justify-start items-center gap-10 pl-10 text-base">
        <Link href="/#OverView" passHref>
          <div className={buttonStyle}>OVERVIEW</div>
        </Link>
        <Link href="/#Prizes" passHref>
          <div className={buttonStyle}>PRIZES</div>
        </Link>
        <Link href="/#Schedule" passHref>
          <div className={buttonStyle}>SCHEDULE</div>
        </Link>
        <Link href="/#Judges" passHref>
          <div className={buttonStyle}>JUDGES</div>
        </Link>
        <Link href="/#Partners" passHref>
          <div className={buttonStyle}>PARTNERS</div>
        </Link>
        <Link href="/#FAQ" passHref>
          <div className={buttonStyle}>FAQ</div>
        </Link>
      </div> */}
      <div className="font-medium text-white/60 flex justify-end">
        © 2023 TAIPEIHACKATHON.
      </div>
    </footer>
  );
}
