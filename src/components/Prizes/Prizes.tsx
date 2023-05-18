import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Section from "../Section/Section";

export default function Prizes() {
  const cardStyle = "border-2 h-96 rounded-3xl p-10 flex flex-col gap-2";
  return (
    <Section title="PRIZES" subTitle="總獎金 $850,000">
      <div className="w-4/5">
        <div className={`${cardStyle} border-blue`}>
          標題 內容
          <button className="bg-white text-black rounded-3xl">BUTTON</button>
        </div>
      </div>
    </Section>
  );
}
