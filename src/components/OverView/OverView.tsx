import React from "react";
import { Flex, Box } from "@chakra-ui/react";

export default function OverView() {
  const cardStyle = "border-2 h-96 rounded-3xl p-10 flex flex-col gap-2";
  return (
    <Box className="flex flex-col items-center h-full py-10">
      <div>OVERVIEW</div>
      <div>總覽</div>
      <div className="w-4/5 flex">
        <div className={`${cardStyle} border-blue`}>
          標題 內容
          <button className="bg-white text-black rounded-3xl">BUTTON</button>
        </div>
        <div className={`${cardStyle} border-yellow`}>
          標題 內容
          <button className="bg-white text-black rounded-3xl">BUTTON</button>
        </div>
        <div className={`${cardStyle} border-green`}>
          標題 內容
          <button className="bg-white text-black rounded-3xl">BUTTON</button>
        </div>
      </div>
    </Box>
  );
}
