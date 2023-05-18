import React from "react";
import Section from "../Section/Section";

export default function FAQ() {
  return (
    <Section title="FAQ" subTitle="相關問題" id="FAQ">
      <div className="mt-6 flex w-full flex-col items-center gap-10 px-5 text-lg font-normal lg:w-2/5 lg:px-0">
        程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
        day）、駭客節（hackfest）或程式設計節（codefest），是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。
        <button className="w-full rounded-full bg-white p-4 text-lg font-semibold text-black transition-all hover:bg-white/80 lg:w-52">
          詳情
        </button>
      </div>
    </Section>
  );
}
