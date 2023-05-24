import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import Logo from "@/assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";
export default function Desktop(props: any) {
  const { goPage } = props;
  const buttonStyle =
    "text-xs lg:w-16 xl:w-20 xl:text-md 2xl:w-32 2xl:text-xl flex items-center justify-center hover:opacity-80";

  return (
    <Box className="main w-full" display={{ base: "none", lg: "block" }}>
      <header className="header flex justify-between">
        <div className="w-44 cursor-pointer" onClick={() => goPage("/")}>
          <Image src={Logo.src} alt="logo" width="300" height="100" />
        </div>
        <div className="nav flex flex-1 items-center justify-center gap-2 px-10 xl:gap-10">
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
        <div className="flex w-44 items-center">
          <button className="h-5/6 w-full rounded-[56px] border">報名</button>
        </div>
      </header>
      <Divider pt="3" />
    </Box>
  );
}
