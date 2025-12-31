import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
const WhyChooseSection = dynamic(
  () => import("../components/WhyChooseSection"),
  {
    ssr: true, // still server-rendered but code-split
  }
);

const MarketingHome = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
    </>
  );
};

export default MarketingHome;
