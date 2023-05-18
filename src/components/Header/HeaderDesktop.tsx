import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import Logo from "@/assets/Logo.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
export default function Desktop(props: any) {
  const { goPage } = props;
  const buttonStyle =
    "text-xs lg:w-16 xl:w-20 xl:text-md 2xl:w-32 2xl:text-xl flex items-center justify-center hover:opacity-80";

  return (
    <Box className="w-full main" display={{ base: "none", lg: "block" }}>
      <header className="flex justify-between header">
        <div className="w-44 cursor-pointer" onClick={() => goPage("/")}>
          <Image src={Logo.src} alt="logo" width="300" height="100" />
        </div>
        <div className="flex flex-1 justify-center items-center gap-2 xl:gap-10 nav px-10">
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
        <div className="flex items-center w-44">
          <button className="border rounded-[56px] w-full h-5/6">報名</button>
        </div>
      </header>
      <Divider pt="3" />
    </Box>
  );
}
