import React from "react";
import Section from "../Section/Section";
import PrizesCard from "./Card";

export default function Prizes() {
  return (
    <Section title="PRIZES" subTitle="總獎金 $850,000">
      <div className="w-4/5 flex gap-5">
        <PrizesCard title="1inch Network" content="$20,000" color="blue" />
        <PrizesCard title="1inch Network" content="$20,000" color="yellow" />
        <PrizesCard title="1inch Network" content="$20,000" color="green" />
      </div>
    </Section>
  );
}
