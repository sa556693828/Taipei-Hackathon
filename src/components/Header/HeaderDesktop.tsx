import React from "react";
import { Center, Flex, Image, Box, Divider } from "@chakra-ui/react";
import Logo from "../../assets/Logo.svg";

export default function Desktop(props: any) {
  const { goPage } = props;

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div className="w-44">
          <img src={Logo.src} alt="logo" className="h-full w-full" />
        </div>
        <div className="flex flex-1 justify-center items-center gap-10">
          <a>OVERVIEW</a>
          <a>PRIZES</a>
          <a>SCHEDULE</a>
          <a>JUDGES</a>
          <a>PARTNERS</a>
          <a>FAQ</a>
        </div>
        <div className="flex items-center w-44">
          <button className="border rounded-[56px] w-full h-5/6">報名</button>
        </div>
      </div>
      <Divider pt="3" />
    </div>
  );
}
