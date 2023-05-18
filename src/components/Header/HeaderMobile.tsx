import React, { useState } from "react";
import {
  Flex,
  DrawerOverlay,
  DrawerContent,
  Drawer,
  useDisclosure,
  Button,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";

export default function Mobile(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { goPage } = props;
  const [hover, setHover] = useState(false);

  return (
    <>
      <Flex
        display={{ base: "flex", lg: "none" }}
        className="w-full flex-col items-center"
      >
        <div className="flex w-full items-center justify-between">
          <div className="cursor-pointer pl-3" onClick={() => goPage("/")}>
            <Image src={Logo.src} alt="logo" width="150" height="100" />
          </div>
          <Button
            className="bg-transparent"
            onClick={() => {
              setHover(true);
              onOpen();
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <HamburgerIcon w={6} h={6} />
          </Button>
        </div>
        <Divider pt="3" w="90%" />
      </Flex>

      <Drawer isOpen={isOpen} size="xs" placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="flex items-center gap-4 bg-bg">
          {/* <div
            className="strokeMobileNavbar flex h-11 w-full items-center justify-center"
            data-stroke="Story"
          >
            Story
          </div>
          <div
            className="strokeMobileNavbar flex h-11 w-full items-center justify-center"
            data-stroke="About"
          >
            About
          </div>
          <div
            className="strokeMobileNavbar flex h-11 w-full items-center justify-center"
            data-stroke="Seals"
          >
            Seals
          </div>
          <div
            className="strokeMobileNavbar flex h-11 w-full items-center justify-center"
            data-stroke="ShowRoom"
          >
            ShowRoom
          </div> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
