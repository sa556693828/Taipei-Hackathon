import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Header from "../Header/Header";
import bg from "../../assets/Slide_Title.jpg";

//TODO: add animation

export default function Main() {
  const router = useRouter();
  const goPage = (page: any) => {
    router.push(page);
  };

  return (
    <Box
      className="min-h-[100vh] relative text-center overflow-hidden"
      color="white"
      bgImage={bg.src}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Header />
    </Box>
  );
}
