import AppScreenShot from "@/components/Home/AppScreenShot";
import Features from "@/components/Home/Features";
import FreeTrial from "@/components/Home/FreeTrial";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import MatchJobs from "@/components/Home/MatchJobs";
import Partners from "@/components/Home/Partners";
import ProcessFlow from "@/components/Home/ProcessFlow/ProcessFlow";
import NextImage from "@/components/Shared/Image/NextImage";
import Navbar from "@/components/Shared/Navigations/Navbar";
import Notification from "@/components/Shared/Navigations/Notification";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full bg-white-main">
      <Notification />
      <section className="w-full md:h-[calc(100dvh-64px)] bg-brand-main bg-[url('/Assets/Hero/HeroBg.png')] bg-contain bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </section>
      <AppScreenShot />
      <ProcessFlow />
      <HowItWorks />
      <MatchJobs />
      <Features />
      <Partners />
      <FreeTrial />
    </main>
  );
}
