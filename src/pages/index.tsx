import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Judges from "@/components/Judges/Judges";
import Main from "@/components/Main/Main";
import OverView from "@/components/OverView/OverView";
import Partners from "@/components/Partners/Partners";
import Prizes from "@/components/Prizes/Prizes";
import Schedule from "@/components/Schedule/Schedule";

export default function Home() {
  return (
    <>
      <Main />
      {/* <OverView /> */}
      {/* <Prizes /> */}
      <Schedule />
      {/* <Judges /> */}
      <Partners />
      <FAQ />
      <Footer />
    </>
  );
}
