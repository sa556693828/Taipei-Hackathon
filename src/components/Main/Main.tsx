import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Header from "../Header/Header";
import bg from "@/assets/Slide_Title.jpg";
import title from "@/assets/Title.png";

//TODO: add animation

export default function Main() {
  return (
    <Box
      className="min-h-[100vh] relative overflow-hidden flex flex-col items-center"
      color="white"
      bgImage={bg.src}
      bgRepeat="no-repeat"
      bgPos="top"
      bgSize="100%"
    >
      <Header />
      <img src={title.src} className="w-9/12 2xl:w-10/12" />
      <div className="w-4/5 h-36 justify-center flex flex-col text-center items-center border-2 rounded-3xl gap-2 text-lg p-10 border-yellow">
        <div className="max-w-6xl">
          程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
          day）、駭客節（hackfest）或程式設計節（codefest）
        </div>
        <div className="max-w-6xl">
          是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。
        </div>
      </div>
    </Box>
  );
}
