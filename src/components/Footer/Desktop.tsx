import React from "react";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function DesktopFooter(props: any) {
  const { goPage } = props;
  const buttonStyle =
    "flex w-10 items-center justify-center font-medium hover:opacity-80 xl:w-14";

  return (
    <footer className="hidden items-center bg-[#ffffff]/20 px-32 py-4 lg:flex">
      <div className="cursor-pointer" onClick={() => goPage("/")}>
        <Image src={Logo.src} alt="logo" width="300" height="100" />
      </div>
      <div className="flex flex-1 items-center justify-start gap-10 pl-10 text-sm xl:text-base">
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
      </div>
      <div className="flex justify-end font-medium text-white/60">
        © 2023 TAIPEIHACKATHON.
      </div>
    </footer>
  );
}
