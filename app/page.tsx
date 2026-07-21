import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Journey } from "@/components/sections/Journey";
import { NextLevel } from "@/components/sections/NextLevel";

export default function Home() {
  return (<main> <Header />

    <Hero />

    <NextLevel />

    <Journey />

    <FinalCTA />

    <Footer />
  </main>

  );
}
