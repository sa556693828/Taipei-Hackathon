import React from "react";
import inch from "@/assets/Prizes/1inch.png";

export default function PrizesCard(props: {
  color: string;
  title: string;
  content: string;
}) {
  return (
    <div
      className={`border-2 rounded-full w-full p-4 flex gap-2 border-${props.color} items-center`}
    >
      <img src={inch.src} width="64" />
      <div className="flex flex-col">
        <div className="text-lg">{props.title}</div>
        <div className="text-md font-normal">{props.content}</div>
      </div>
    </div>
  );
}
