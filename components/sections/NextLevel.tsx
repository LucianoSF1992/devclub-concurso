"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const pillars = [
    {
        number: "01",
        title: "Aprenda",
        description:
            "Domine os fundamentos que realmente importam e desenvolva uma base sólida para evoluir com confiança.",
    },
    {
        number: "02",
        title: "Construa",
        description:
            "Transforme conhecimento em prática através de projetos que desafiam você a pensar, criar e resolver problemas reais.",
    },
    {
        number: "03",
        title: "Evolua",
        description:
            "Continue avançando, refine suas habilidades e construa a versão profissional que você quer se tornar.",
    },
];

export function NextLevel() {
    return (<section
        id="next-level"
        className="relative overflow-hidden bg-[var(--surface)]"
    >
        {/* Ambient background */} <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
        > <div className="absolute left-1/2 top-0 h-px w-full max-w-[1440px] -translate-x-1/2 bg-white/10" />

            ```
            <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/5 blur-[140px]" />

            <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-white/[0.02] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40 lg:px-16 lg:py-48">
            {/* Section header */}
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="flex items-center gap-3">
                        <span className="h-px w-10 bg-[var(--accent)]" />

                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                            O próximo nível
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 1,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <h2 className="max-w-5xl font-[family-name:var(--font-space-grotesk)] text-[clamp(3.5rem,8vw,8rem)] font-bold uppercase leading-[0.85] tracking-[-0.07em]">
                        Não basta
                        <br />
                        <span className="text-[var(--accent)]">aprender.</span>
                    </h2>

                    <p className="mt-10 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                        O verdadeiro próximo nível acontece quando você transforma
                        conhecimento em experiência, ideias em projetos e desafios em
                        evolução.
                    </p>
                </motion.div>
            </div>

            {/* Pillars */}
            <div className="mt-32 border-t border-white/10">
                {pillars.map((pillar, index) => (
                    <motion.article
                        key={pillar.number}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[100px_1fr_auto] md:items-center md:gap-12 md:py-14"
                    >
                        <span className="font-[family-name:var(--font-space-grotesk)] text-sm text-[var(--muted)]">
                            {pillar.number}
                        </span>

                        <div className="grid gap-4 md:grid-cols-2 md:items-center">
                            <h3 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold uppercase tracking-[-0.05em] transition-colors duration-300 group-hover:text-[var(--accent)] md:text-6xl">
                                {pillar.title}
                            </h3>

                            <p className="max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-base">
                                {pillar.description}
                            </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black">
                            <ArrowUpRight
                                size={20}
                                strokeWidth={1.5}
                                className="transition-transform duration-500 group-hover:rotate-45"
                            />
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Closing statement */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                }}
                className="mt-32 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
            >
                <p className="max-w-3xl font-[family-name:var(--font-space-grotesk)] text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl">
                    O conhecimento abre a porta.
                    <br />
                    <span className="text-[var(--muted)]">
                        O que você constrói define até onde pode chegar.
                    </span>
                </p>

                <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    01 — 03
                </span>
            </motion.div>
        </div>
    </section>


    );
}
