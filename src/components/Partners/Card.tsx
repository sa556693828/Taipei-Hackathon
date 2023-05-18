import React from "react";

export default function PartnersCard(props: { avatar: string; name?: string }) {
  return (
    <div className="rounded-[48px] flex flex-col items-center justify-center p-10 bg-[#23252D]">
      <div className="w-full h-32 flex items-center">
        <img src={props.avatar} width="200" />
      </div>
      <div className="mt-5 text-lg font-bold">{props.name}</div>
    </div>
  );
}
