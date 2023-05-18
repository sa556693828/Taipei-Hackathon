import React from "react";

export default function Section(props: {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  id?: string;
}) {
  return (
    <div className="flex h-full flex-col items-center py-10" id={props.id}>
      <div className="text-2xl font-bold leading-[56px]">{props.title}</div>
      <div className="mb-14 text-4xl font-extrabold leading-[64px]">
        {props.subTitle}
      </div>
      {props.children}
    </div>
  );
}
