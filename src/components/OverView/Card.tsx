import React from "react";

//border-green
//border-blue
//border-yellow
//shadow-green
//shadow-blue
//shadow-yellow

export default function ViewCard(props: {
  color: string;
  title: string;
  content: string;
}) {
  return (
    <div
      className={`border-2 h-full rounded-3xl p-10 flex flex-col gap-2 border-${props.color} w-full shadow-${props.color}`}
    >
      <div className="text-4xl mb-16">{props.title}</div>
      <div className="flex-1 py-4">
        {props.content}
        程式設計馬拉松（英語：hackathon，又譯為駭客松），又稱駭客日（hack
        day）、駭客節（hackfest）或程式設計節（codefest），是一個流傳於駭客（hacker）當中的新詞彙。程式設計馬拉松是一種活動。在該活動當中，電腦程式設計師以及其他與軟體發展相關的人員，如圖形設計師、介面設計師與專案經理，相聚在一起，以緊密合作的形式去進行某項軟體專案。
      </div>
      <button className="bg-white text-black rounded-full w-2/3 h-16 text-lg font-semibold hover:bg-white/80 transition-all">
        BUTTON
      </button>
    </div>
  );
}
