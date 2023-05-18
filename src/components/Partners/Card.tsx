import Image from "next/image";
import React from "react";

export default function PartnersCard(props: { avatar: string; name?: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[48px] bg-[#23252D] p-10">
      <div className="flex h-32 w-full items-center">
        <Image src={props.avatar} width="200" height="200" alt="avatar" />
      </div>
      <div className="mt-5 text-lg font-bold">{props.name}</div>
    </div>
  );
}
