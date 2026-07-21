"use client";

import { ArrowDownRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { type MouseEvent } from "react";

import { GridBackground } from "@/components/ui/GridBackground";
import { InteractiveGlow } from "@/components/ui/InteractiveGlow";
import { MagneticButton } from "@/components/ui/MagneticButton";

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

  const contentX = useTransform(smoothX, [-500, 500], [-8, 8]);
  const contentY = useTransform(smoothY, [-500, 500], [-8, 8]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);

  }

  return (<section
    id="hero"
    onMouseMove={handleMouseMove}
    className="relative flex min-h-screen items-center overflow-hidden bg-[var(--background)]"
  > <GridBackground />

    ```
    < InteractiveGlow />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      <div className="absolute left-[8%] top-[22%] h-px w-20 bg-white/10" />

      <div className="absolute bottom-[18%] right-[8%] h-px w-20 bg-white/10" />

      <div className="absolute right-[12%] top-[28%] h-1 w-1 rounded-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent)]" />

      <div className="absolute bottom-[24%] left-[18%] h-1 w-1 rounded-full bg-white/20" />
    </div>

    <motion.div
      style={{
        x: contentX,
        y: contentY,
      }}
      className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 md:px-10 lg:px-16"
    >
      <div className="grid min-h-[calc(100vh-8rem)] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-8 flex items-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-px bg-[var(--accent)]"
            />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
              O próximo nível começa aqui
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: "100%" }}
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

              <motion.span
                initial={{ opacity: 0.5 }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="inline-block text-[var(--accent)]"
              >
                aprenda.
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.55,
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
              delay: 0.7,
              ease: "easeOut",
            }}
            className="mt-10"
          >
            <MagneticButton href="#next-level">
              Descobrir
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.1,
            ease: "easeOut",
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

    ```
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 1.3,
      }}
      className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-white/20 md:left-10 md:right-10 lg:left-16 lg:right-16"
    >
      <span>DevClub / 2026</span>

      <span className="hidden sm:block">
        Build. Learn. Evolve.
      </span>
    </motion.div>
  </section>

  );
}

