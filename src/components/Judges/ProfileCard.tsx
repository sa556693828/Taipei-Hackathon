import React from "react";
import SvgIcon from "@/components/SvgIcon/SvgIcon";

export default function ProfileCard(props: {
  avatar: string;
  name?: string;
  company?: string;
  twitter?: string;
  discord?: string;
  telegram?: string;
}) {
  return (
    <div className="rounded-[48px] flex flex-col items-center justify-center pt-10 bg-[#23252D]">
      <img src={props.avatar} width="120" />
      <div className="mt-5 text-lg text-center">
        {props.name}
        <div className="font-medium">{props.company}</div>
      </div>
      <div className="py-10 flex justify-between w-2/3">
        <div className="bg-black p-3 rounded-full hover:bg-white/20 transition-all cursor-pointer">
          <SvgIcon width={25} height={25} iconName="icon-twitter" />
        </div>
        <div className="bg-black p-3 rounded-full">
          <SvgIcon width={25} height={25} iconName="icon-discord" />
        </div>
        <div className="bg-black p-3 rounded-full">
          <SvgIcon width={25} height={25} iconName="icon-telegram" />
        </div>
      </div>
    </div>
  );
}
