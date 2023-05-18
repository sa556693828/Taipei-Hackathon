import React from "react";

export default function Section(prop: {
  children: React.ReactNode;
  title: string;
  subTitle: string;
}) {
  return (
    <div className="flex flex-col items-center h-full py-10">
      <div className="text-2xl font-bold leading-[56px]">{prop.title}</div>
      <div className="text-5xl font-extrabold leading-[64px] mb-14">
        {prop.subTitle}
      </div>
      {prop.children}
    </div>
  );
}
