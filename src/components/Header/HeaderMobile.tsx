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
import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";

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

      <Drawer
        isOpen={isOpen}
        size="xs"
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent className="flex items-center gap-4 bg-bg">
          <Flex
            display={{ base: "flex", lg: "none" }}
            className="w-full flex-col items-center px-2 py-3"
          >
            <div className="flex w-full items-center justify-between">
              <div className="cursor-pointer pl-3" onClick={() => goPage("/")}>
                <Image src={Logo.src} alt="logo" width="150" height="100" />
              </div>
              <Button
                className="bg-transparent"
                onClick={() => {
                  setHover(true);
                  onClose();
                }}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
              >
                <SmallCloseIcon w={6} h={6} />
              </Button>
            </div>
            <Divider pt="3" w="93%" />
          </Flex>
          <Link
            href="/#OverView"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6 text-2xl font-black">
              總覽
              <div className="pl-4 text-xl font-bold">OVERVIEW</div>
            </div>
          </Link>
          <Link
            href="/#Prizes"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6 text-2xl font-black">
              總獎金
              <div className="pl-4 text-xl font-bold">PRIZES</div>
            </div>
          </Link>
          <Link
            href="/#Schedule"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6 text-2xl font-black">
              活動日程
              <div className="pl-4 text-xl font-bold">SCHEDULE</div>
            </div>
          </Link>
          <Link
            href="/#Judges"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6 text-2xl font-black">
              裁判群
              <div className="pl-4 text-xl font-bold">JUDGES</div>
            </div>
          </Link>
          <Link
            href="/#Partners"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6 text-2xl font-black">
              贊助夥伴
              <div className="pl-4 text-xl font-bold">PARTNERS</div>
            </div>
          </Link>
          <Link
            href="/#FAQ"
            passHref
            className="w-full"
            onClick={() => onClose()}
          >
            <div className="flex h-12 items-center pl-6 text-2xl font-black">
              相關問題
              <div className="pl-4 text-xl font-bold">FAQ</div>
            </div>
          </Link>
        </DrawerContent>
      </Drawer>
    </>
  );
}
