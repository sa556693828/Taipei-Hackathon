import React from "react";
import { Divider } from "@chakra-ui/react";
import Input from "../Input/Input";

export default function InputFormat(props: any) {
  const { index, info } = props;
  return (
    <>
      {index === 0 ? (
        <></>
      ) : (
        <div className="py-5">
          <Divider />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <Input label="組隊名稱" />
        <div className="flex w-full gap-4">
          <Input label="組員姓名" />
          <Input label="組員TG" />
          <Input label="組員EMAIL" />
        </div>
      </div>
    </>
  );
}
