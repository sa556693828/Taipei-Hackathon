import React from "react";
import SvgIcon from "@/components/SvgIcon/SvgIcon";
import Image from "next/image";

export default function ProfileCard(props: {
  avatar: string;
  name?: string;
  company?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[48px] bg-[#23252D] pt-10">
      <Image src={props.avatar} alt="avatar" width="120" height="120" />
      <div className="mt-5 text-center text-lg">
        {props.name}
        <div className="font-medium">{props.company}</div>
      </div>
      <div className="flex w-2/3 justify-center gap-6 py-10 lg:justify-between lg:gap-0">
        <div className="cursor-pointer rounded-full bg-black p-3 transition-all hover:bg-white/20">
          <SvgIcon width={20} height={20} iconName="icon-twitter" />
        </div>
        <div className="rounded-full bg-black p-3">
          <SvgIcon width={20} height={20} iconName="icon-discord" />
        </div>
        <div className="rounded-full bg-black p-3">
          <SvgIcon width={20} height={20} iconName="icon-telegram" />
        </div>
      </div>
    </div>
  );
}
