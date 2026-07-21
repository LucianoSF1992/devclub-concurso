"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const levels = [
    {
        number: "01",
        title: "Aprenda",
        description:
            "Construa uma base sólida, domine os fundamentos e transforme conhecimento em confiança.",
    },
    {
        number: "02",
        title: "Construa",
        description:
            "Tire suas ideias do papel e transforme conhecimento em projetos reais que demonstram o que você sabe fazer.",
    },
    {
        number: "03",
        title: "Evolua",
        description:
            "Enfrente desafios cada vez maiores, aprenda com seus erros e desenvolva a mentalidade de quem nunca para de crescer.",
    },
    {
        number: "04",
        title: "Transforme",
        description:
            "Converta sua evolução em oportunidades e construa o caminho para o próximo nível da sua carreira.",
    },
];

export function NextLevel() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const progressHeight = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "100%"],
    );

    const backgroundY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "20%"],
    );

    return (<section
        ref={sectionRef}
        id="next-level"
        className="relative min-h-[300vh] overflow-hidden bg-[var(--background)]"
    >
        {/* Background */}
        <motion.div
            aria-hidden="true"
            style={{
                y: backgroundY,
            }}
            className="pointer-events-none absolute inset-0"
        > <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/5 blur-[160px]" />

            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </motion.div>

        {/* Sticky storytelling container */}
        <div className="sticky top-0 flex min-h-screen items-center">
            <div className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10 lg:px-16">
                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                    {/* Left column */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="mb-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[var(--accent)]" />

                                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                                    O próximo nível
                                </span>
                            </div>

                            <h2 className="max-w-lg font-[family-name:var(--font-space-grotesk)] text-6xl font-bold uppercase leading-[0.82] tracking-[-0.07em] md:text-8xl lg:text-[clamp(5rem,8vw,9rem)]">
                                Não
                                <br />
                                pare
                                <br />
                                aqui.
                            </h2>
                        </div>

                        {/* Progress indicator */}
                        <div className="mt-12 hidden lg:flex lg:items-center lg:gap-5">
                            <div className="relative h-32 w-px overflow-hidden bg-white/10">
                                <motion.div
                                    style={{
                                        height: progressHeight,
                                    }}
                                    className="absolute left-0 top-0 w-full bg-[var(--accent)]"
                                />
                            </div>

                            <div>
                                <span className="block text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                                    Continue avançando
                                </span>

                                <span className="mt-2 block font-[family-name:var(--font-space-grotesk)] text-sm uppercase tracking-[0.15em] text-[var(--foreground)]">
                                    Seu próximo nível
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col justify-center">
                        {levels.map((level, index) => (
                            <motion.div
                                key={level.number}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    amount: 0.4,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group grid gap-5 border-t border-white/10 py-8 md:grid-cols-[80px_1fr] md:gap-8 md:py-10"
                            >
                                <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-[var(--accent)]">
                                    {level.number}
                                </span>

                                <div>
                                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold uppercase leading-none tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-3 group-hover:text-[var(--accent)] md:text-7xl lg:text-8xl">
                                        {level.title}
                                    </h3>

                                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
                                        {level.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
