"use client";

import { motion } from "motion/react";

const steps = [
    {
        number: "01",
        title: "Aprenda",
        description:
            "Construa uma base sólida e desenvolva o conhecimento necessário para entender como a tecnologia realmente funciona.",
    },
    {
        number: "02",
        title: "Construa",
        description:
            "Transforme conhecimento em prática criando projetos, resolvendo problemas e enfrentando desafios reais.",
    },
    {
        number: "03",
        title: "Evolua",
        description:
            "Aprenda com seus erros, refine suas habilidades e continue avançando todos os dias.",
    },
    {
        number: "04",
        title: "Transforme",
        description:
            "Use tudo o que você construiu para transformar conhecimento em oportunidades e novas possibilidades.",
    },
];

export function Journey() {
    return (<section
        id="journey"
        className="relative overflow-hidden bg-[var(--background)]"
    > <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
            {/* Header */}
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
                className="max-w-4xl"
            > <div className="mb-8 flex items-center gap-3"> <span className="h-px w-10 bg-[var(--accent)]" />

                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                        Sua jornada
                    </span>
                </div>

                <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold uppercase leading-[0.85] tracking-[-0.06em] md:text-7xl lg:text-9xl">
                    O próximo nível
                    <br />
                    <span className="text-[var(--accent)]">é construído.</span>
                </h2>

                <p className="mt-10 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                    Não existe um único caminho para evoluir. Existe o próximo passo.
                    E cada passo que você dá transforma quem você é e o que você é
                    capaz de construir.
                </p>
            </motion.div>

            {/* Journey steps */}
            <div className="mt-24 border-t border-white/10 md:mt-32">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[100px_1fr_1fr] md:items-start md:py-14 lg:grid-cols-[140px_1fr_1fr]"
                    >
                        <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-[var(--accent)]">
                            {step.number}
                        </span>

                        <h3 className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold uppercase leading-none tracking-[-0.06em] transition-transform duration-500 group-hover:translate-x-3 group-hover:text-[var(--accent)] md:text-6xl lg:text-7xl">
                            {step.title}
                        </h3>

                        <p className="max-w-lg text-sm leading-relaxed text-[var(--muted)] md:text-base">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Final statement */}
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{
                    once: true,
                    amount: 0.4,
                }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="flex justify-center py-24 md:py-32"
            >
                <p className="max-w-5xl text-center font-[family-name:var(--font-space-grotesk)] text-4xl font-bold uppercase leading-[0.9] tracking-[-0.06em] md:text-6xl lg:text-8xl">
                    A sua evolução
                    <br />
                    <span className="text-[var(--accent)]">começa agora.</span>
                </p>
            </motion.div>
        </div>
    </section>
    );
}
