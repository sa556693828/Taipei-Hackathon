import React from "react";

export default function Section(props: {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  id?: string;
}) {
  return (
    <div className="flex flex-col items-center h-full py-10" id={props.id}>
      <div className="text-2xl font-bold leading-[56px]">{props.title}</div>
      <div className="text-5xl font-extrabold leading-[64px] mb-14">
        {props.subTitle}
      </div>
      {props.children}
    </div>
  );
}
