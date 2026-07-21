"use client";

import { motion } from "motion/react";

const pillars = [
    {
        number: "01",
        title: "Tecnologia",
        description:
            "Aprenda as tecnologias e os fundamentos necessários para transformar ideias em soluções reais.",
    },
    {
        number: "02",
        title: "Comunidade",
        description:
            "Faça parte de uma comunidade que compartilha conhecimento, experiências e desafios.",
    },
    {
        number: "03",
        title: "Projetos",
        description:
            "Coloque o conhecimento em prática construindo projetos que aproximam você dos desafios do mercado.",
    },
    {
        number: "04",
        title: "Carreira",
        description:
            "Transforme sua evolução técnica em novas possibilidades e construa o próximo capítulo da sua carreira.",
    },
];

export function AboutDevClub() {
    return (<section
        id="about"
        className="relative overflow-hidden bg-[var(--surface)]"
    >
        {/* Decorative grid */} <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-50"
        > <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100px_100px]" /> </div>

        <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
            {/* Section heading */}
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="mb-8 flex items-center gap-3">
                        <span className="h-px w-10 bg-[var(--accent)]" />

                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                            Sobre o DevClub
                        </span>
                    </div>

                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold uppercase leading-[0.88] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                        Não é apenas
                        <br />
                        sobre código.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-end"
                >
                    <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
                        É sobre criar possibilidades. Desenvolver habilidades.
                        Construir projetos. Encontrar pessoas que compartilham os mesmos
                        objetivos. E transformar conhecimento em uma nova direção para a
                        sua carreira.
                    </p>
                </motion.div>
            </div>

            {/* Pillars */}
            <div className="mt-24 border-t border-white/10 md:mt-32">
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={pillar.number}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[80px_1fr_1.5fr] md:items-start md:py-12 lg:grid-cols-[100px_1fr_1fr]"
                    >
                        {/* Number */}
                        <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-[var(--accent)]">
                            {pillar.number}
                        </span>

                        {/* Title */}
                        <h3 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold uppercase leading-none tracking-[-0.05em] transition-transform duration-500 group-hover:translate-x-3 group-hover:text-[var(--accent)] md:text-5xl lg:text-6xl">
                            {pillar.title}
                        </h3>

                        {/* Description */}
                        <p className="max-w-lg text-sm leading-relaxed text-[var(--muted)] md:text-base">
                            {pillar.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Closing statement */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
                transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-24 md:mt-32"
            >
                <p className="max-w-5xl font-[family-name:var(--font-space-grotesk)] text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl"
                >
                    O próximo nível começa quando você decide{" "}
                    <span className="text-[var(--accent)]">ir além.</span>
                </p>
            </motion.div>
        </div>
    </section>
    );
}
