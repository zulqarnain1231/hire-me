import Navbar from "@/components/Shared/Navigations/Navbar";
import Notification from "@/components/Shared/Navigations/Notification";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Notification />
      <section className="w-full lg:h-[calc(100dvh-64px)] bg-brand-main">
        <Navbar />
      </section>
    </main>
  );
}
