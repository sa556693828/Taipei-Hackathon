import React from "react";
import Section from "../Section/Section";
import ViewCard from "./Card";

export default function OverView() {
  const cardStyle = "border-2 h-96 rounded-3xl p-10 flex flex-col gap-2";
  return (
    <Section title="OVERVIEW" subTitle="總覽" id="OverView">
      <div className="w-4/5 flex justify-around gap-10">
        <ViewCard title="標題" content="?" color="blue" />
        <ViewCard title="標題" content="?" color="yellow" />
        <ViewCard title="標題" content="?" color="green" />
      </div>
    </Section>
  );
}
