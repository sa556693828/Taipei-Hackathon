import React from "react";
import Section from "../Section/Section";
import PartnersCard from "./Card";
import parLogo from "@/assets/Partners/parLogo.png";

export default function Partners() {
  const partnersArray = [
    {
      avatar: parLogo.src,
    },
    {
      avatar: parLogo.src,
    },
    {
      avatar: parLogo.src,
    },
    {
      avatar: parLogo.src,
    },
    {
      avatar: parLogo.src,
    },
  ];
  return (
    <Section title="PARTNERS" subTitle="贊助夥伴">
      <div className="w-4/5 flex flex-col items-center gap-5">
        <PartnersCard avatar={parLogo.src} name="主辦單位" />
        <div className="flex gap-5">
          <PartnersCard avatar={parLogo.src} name="執行單位" />
          <PartnersCard avatar={parLogo.src} name="執行單位" />
        </div>
        <div className="grid grid-cols-4 gap-5">
          {partnersArray.map((item, idx) => (
            <PartnersCard avatar={item.avatar} key={idx} name="合作夥伴" />
          ))}
        </div>
      </div>
    </Section>
  );
}
