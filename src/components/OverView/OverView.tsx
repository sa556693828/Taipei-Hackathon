import React from "react";
import Section from "../Section/Section";
import ViewCard from "./Card";

export default function OverView() {
  return (
    <Section title="OVERVIEW" subTitle="總覽" id="OverView">
      <div className="px-5 lg:px-0 lg:w-4/5 grid grid-cols-1 lg:grid-cols-3 justify-around gap-5">
        <ViewCard title="標題" content="?" color="blue" />
        <ViewCard title="標題" content="?" color="yellow" />
        <ViewCard title="標題" content="?" color="green" />
      </div>
    </Section>
  );
}
