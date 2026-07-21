import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Challenge } from "@/components/sections/Challenge";
import { NextLevel } from "@/components/sections/NextLevel";
import { AboutDevClub } from "@/components/sections/AboutDevClub";
import { Journey } from "@/components/sections/Journey";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (<main> <Header />

    <Hero />

    <Challenge />

    <NextLevel />

    <AboutDevClub />

    <Journey />

    <FinalCTA />

    <Footer />
  </main>
  );
}
