import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <section
        id="next-level"
        className="flex min-h-screen items-center justify-center bg-[var(--surface)]"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
          Próximo nível em construção...
        </p>
      </section>
    </main>
  );
}