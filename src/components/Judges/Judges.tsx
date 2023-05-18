import React from "react";
import Section from "../Section/Section";
import ProfileCard from "./ProfileCard";
import pro1 from "@/assets/Judges/pro1.png";

export default function Judges() {
  const JudgesArray = [
    {
      name: "Cameron Williamson",
      company: "Protocol Labs",
      avatar: pro1.src,
      twitter: "https://twitter.com/protocollabs",
      discord: "https://discord.com/invite/protocol",
      telegram: "https://t.me/protocol_labs",
    },
    {
      name: "Cameron Williamson",
      company: "Protocol Labs",
      avatar: pro1.src,
      twitter: "https://twitter.com/protocollabs",
      discord: "https://discord.com/invite/protocol",
      telegram: "https://t.me/protocol_labs",
    },
    {
      name: "Cameron Williamson",
      company: "Protocol Labs",
      avatar: pro1.src,
      twitter: "https://twitter.com/protocollabs",
      discord: "https://discord.com/invite/protocol",
      telegram: "https://t.me/protocol_labs",
    },
    {
      name: "Cameron Williamson",
      company: "Protocol Labs",
      avatar: pro1.src,
      twitter: "https://twitter.com/protocollabs",
      discord: "https://discord.com/invite/protocol",
      telegram: "https://t.me/protocol_labs",
    },
    {
      name: "Cameron Williamson",
      company: "Protocol Labs",
      avatar: pro1.src,
      twitter: "https://twitter.com/protocollabs",
      discord: "https://discord.com/invite/protocol",
      telegram: "https://t.me/protocol_labs",
    },
  ];
  return (
    <Section title="JUDGES" subTitle="裁判群" id="Judges">
      <div className="grid w-4/5 grid-cols-1 gap-5 lg:grid-cols-4">
        {JudgesArray.map((item, idx) => (
          <ProfileCard
            avatar={item.avatar}
            name={item.name}
            company={item.company}
            twitter={item.twitter}
            discord={item.discord}
            telegram={item.telegram}
            key={idx}
          />
        ))}
      </div>
    </Section>
  );
}
