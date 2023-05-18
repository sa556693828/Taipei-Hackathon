import Image from "next/image";
import React from "react";

export default function PartnersCard(props: { avatar: string; name?: string }) {
  return (
    <div className="rounded-[48px] flex flex-col items-center justify-center p-10 bg-[#23252D]">
      <div className="w-full h-32 flex items-center">
        <Image src={props.avatar} width="200" height="200" alt="avatar" />
      </div>
      <div className="mt-5 text-lg font-bold">{props.name}</div>
    </div>
  );
}
