import { Divider } from "@chakra-ui/react";
import React from "react";
//border-green
//border-blue
//border-yellow
export default function TaskCard(props: {
  name: string;
  content: string;
  color: string;
}) {
  return (
    <div className="mb-6">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex w-full flex-col lg:w-2/3">
          <div
            className={`flex flex-col gap-3 border-l-8 border-${props.color} mb-5 py-2 pl-4`}
          >
            <div className="text-5xl">{props.name}</div>
            <div className="text-2xl">5 月 14 日 ---- 5 月 24 日</div>
          </div>
          <div className="text-lg font-normal">{props.content}</div>
        </div>
        <div className="mt-4 flex w-full justify-end lg:mt-0 lg:w-1/3">
          <button className="w-full rounded-full bg-white p-4 text-lg font-semibold text-black transition-all hover:bg-white/80 lg:w-52">
            詳情
          </button>
        </div>
      </div>
      <Divider py="3" />
    </div>
  );
}
