import React from "react";
import { Flex, Box } from "@chakra-ui/react";

export default function Schedule() {
  const cardStyle = "border-2 h-96 rounded-3xl p-10 flex flex-col gap-2";
  return (
    <Box className="flex flex-col items-center h-full py-10">
      <div>SCHEDULE</div>
      <div>活動日程</div>
      <div className="w-4/5">日期</div>
    </Box>
  );
}
