"use client";

import { motion } from "motion/react";

const challengePoints = [
    {
        number: "01",
        title: "Aprender",
        description:
            "Dominar os fundamentos que transformam conhecimento em confiança para construir.",
    },
    {
        number: "02",
        title: "Construir",
        description:
            "Colocar o conhecimento em prática através de projetos que desafiam e desenvolvem.",
    },
    {
        number: "03",
        title: "Evoluir",
        description:
            "Transformar prática em experiência e experiência em uma carreira de verdade.",
    },
];

export function Challenge() {
    return (<section
        id="challenge"
        className="relative overflow-hidden bg-[var(--surface)]"
    > <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40"> <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        {/* Intro */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
        > <div className="mb-8 flex items-center gap-3"> <span className="h-px w-10 bg-[var(--accent)]" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                    O desafio
                </span>
            </div>

            <h2 className="max-w-xl font-[family-name:var(--font-space-grotesk)] text-5xl font-bold uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                Aprender é
                <br />
                apenas o
                <br />
                começo.
            </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col justify-end">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-16 max-w-2xl"
            >
                <p className="text-xl leading-relaxed text-[var(--foreground)] md:text-2xl">
                    O verdadeiro desafio não é apenas aprender a programar.
                    É transformar conhecimento em algo real.
                </p>

                <p className="mt-6 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                    Cada linha de código representa uma oportunidade de construir,
                    resolver problemas e evoluir. O próximo nível acontece quando
                    você deixa de apenas consumir conhecimento e começa a criar.
                </p>
            </motion.div>

            {/* Challenge points */}
            <div className="border-t border-white/10">
                {challengePoints.map((point, index) => (
                    <motion.div
                        key={point.number}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group grid gap-6 border-b border-white/10 py-8 md:grid-cols-[80px_1fr_1.5fr] md:items-start md:gap-8"
                    >
                        <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-[var(--accent)]">
                            {point.number}
                        </span>

                        <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold uppercase tracking-[-0.03em] transition-colors duration-300 group-hover:text-[var(--accent)] md:text-3xl">
                            {point.title}
                        </h3>

                        <p className="max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-base">
                            {point.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
        </div>

        {/* Decorative element */}
        <motion.div
            aria-hidden="true"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full border border-[var(--accent)]/10"
        />

        <motion.div
            aria-hidden="true"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full border border-[var(--accent)]/5"
        />
    </section>
    );
}
