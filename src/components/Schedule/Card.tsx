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
      <div className="flex items-center">
        <div className="flex flex-col w-2/3">
          <div
            className={`flex flex-col gap-3 border-l-8 border-${props.color} pl-4 py-2 mb-5`}
          >
            <div className="text-5xl">{props.name}</div>
            <div className="text-2xl">5 月 14 日 ---- 5 月 24 日</div>
          </div>
          <div className="text-lg font-normal">{props.content}</div>
        </div>
        <div className="w-1/3 flex justify-end">
          <button className="bg-white text-black rounded-full w-2/5 p-4 text-lg font-semibold hover:bg-white/80 transition-all">
            詳情
          </button>
        </div>
      </div>
      <Divider py="3" />
    </div>
  );
}
