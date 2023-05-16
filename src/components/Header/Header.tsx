import React, { useContext, useEffect } from "react";
// import Image from 'next/dist/client/image';
import { Button, Divider, Flex } from "@chakra-ui/react";
// import Mobile from "./HeaderMobile";
// import Desktop from "./HeaderDesktop";
import { useRouter } from "next/router";
import Desktop from "./HeaderDesktop";

export default function Header() {
  const router = useRouter();

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        px={{ base: "8rem" }}
        overflow="hidden"
        className="z-50 h-20 w-full bg-transparent shadow-top text-white"
      >
        <Desktop />
        {/* <Mobile goPage={goPage} ifAddressHasNFT={ifAddressHasNFT} /> */}
      </Flex>
    </>
  );
}
