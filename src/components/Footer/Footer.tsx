import React from "react";
import { useRouter } from "next/router";
import FooterMobile from "./Mobile";
import DesktopFooter from "./Desktop";

export default function Footer() {
  const router = useRouter();
  const goPage = (page: string) => {
    router.push(page);
  };
  return (
    <>
      <DesktopFooter goPage={goPage} />
      <FooterMobile goPage={goPage} />
    </>
  );
}
