"use client";

import { ArrowDownRight, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { GridBackground } from "@/components/ui/GridBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)]"
    >
      <GridBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 md:px-10 lg:px-16">
        <div className="grid min-h-[calc(100vh-8rem)] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[var(--accent)]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                O próximo nível começa aqui
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl font-[family-name:var(--font-space-grotesk)] text-[clamp(4rem,12vw,11rem)] font-bold uppercase leading-[0.8] tracking-[-0.08em]"
            >
              Não apenas
              <br />
              <span className="text-[var(--accent)]">aprenda.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-10 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
            >
              Você não está apenas aprendendo a programar.
              <br />
              Você está construindo o seu próximo nível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: "easeOut",
              }}
              className="mt-10"
            >
              <a
                href="#next-level"
                className="group inline-flex items-center gap-4 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-transform duration-300 hover:scale-105"
              >
                Descobrir

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowRight size={15} />
                </span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden lg:flex lg:flex-col lg:items-center lg:gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] [writing-mode:vertical-rl]">
              Scroll to explore
            </span>

            <ArrowDownRight
              size={22}
              strokeWidth={1}
              className="text-[var(--accent)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}