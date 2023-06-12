import React from "react";
import { Flex, Box, useDisclosure } from "@chakra-ui/react";
import Header from "../Header/Header";
import bg from "@/assets/Slide_Title.svg";
import title from "@/assets/Title.png";
import Image from "next/image";
import InputModal from "../InputModal/InputModal";

//TODO: add animation

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      className="relative flex flex-col items-center overflow-hidden"
      color="white"
      bgImage={bg.src}
      bgRepeat="no-repeat"
      bgPos="top"
      bgSize="100%"
      id="Main"
    >
      <Header />
      <Image
        src={title.src}
        width="3000"
        height="3000"
        alt="title"
        className="w-10/12 2xl:w-10/12"
      />
      <div className="relative my-9 flex w-4/5 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-yellow p-6 pb-10 text-center  text-lg">
        <div className="text-base font-normal">
          程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
          day）、駭客節（hackfest）或程式設計節（codefest），
          {/* <br /> */}
          是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。
        </div>
        <button
          className="absolute -bottom-10 w-52 rounded-full border-8 border-bg bg-white p-3 text-lg font-semibold text-black transition-all hover:bg-gray-300"
          onClick={onOpen}
        >
          報名
        </button>
        <InputModal isOpen={isOpen} onClose={onClose} />
      </div>
    </Box>
  );
}
