import React from "react";
import Section from "../Section/Section";
import PrizesCard from "./Card";

export default function Prizes() {
  return (
    <Section title="PRIZES" subTitle="總獎金 $850,000" id="Prizes">
      <div className="grid w-full grid-cols-1 gap-5 px-4 md:grid-cols-3">
        <PrizesCard title="1inch Network" content="$20,000" color="blue" />
        <PrizesCard title="1inch Network" content="$20,000" color="yellow" />
        <PrizesCard title="1inch Network" content="$20,000" color="green" />
      </div>
    </Section>
  );
}
