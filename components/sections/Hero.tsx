"use client";

import { ArrowDownRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { type MouseEvent } from "react";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { GridBackground } from "@/components/ui/GridBackground";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  const glowX = useTransform(smoothX, [-500, 500], [-100, 100]);
  const glowY = useTransform(smoothY, [-500, 500], [-100, 100]);

  const contentX = useTransform(smoothX, [-500, 500], [-8, 8]);
  const contentY = useTransform(smoothY, [-500, 500], [-8, 8]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)]"
    >
      <GridBackground />

      {/* Interactive glow */}
      <motion.div
        aria-hidden="true"
        style={{
          x: glowX,
          y: glowY,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[140px]"
      />

      <motion.div
        style={{
          x: contentX,
          y: contentY,
        }}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 md:px-10 lg:px-16"
      >
        <div className="grid min-h-[calc(100vh-8rem)] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[var(--accent)]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                O próximo nível começa aqui
              </span>
            </motion.div>

            {/* Main heading */}
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

            {/* Description */}
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

            {/* CTA */}
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
              <MagneticButton href="#next-level">
                Descobrir
              </MagneticButton>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="hidden lg:flex lg:flex-col lg:items-center lg:gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] [writing-mode:vertical-rl]">
              Scroll to explore
            </span>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDownRight
                size={22}
                strokeWidth={1}
                className="text-[var(--accent)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}