"use client";

import { motion } from "motion/react";

const steps = [
    {
        number: "01",
        title: "Fundamentos",
        description:
            "Tudo começa com uma base sólida. Entenda os conceitos, desenvolva seu raciocínio e aprenda a enxergar problemas como um desenvolvedor.",
    },
    {
        number: "02",
        title: "Projetos",
        description:
            "Conhecimento ganha valor quando vira prática. Crie projetos, experimente novas ideias e transforme teoria em algo real.",
    },
    {
        number: "03",
        title: "Desafios",
        description:
            "É quando as coisas ficam difíceis que você realmente evolui. Encare problemas, erre, corrija e descubra novas formas de construir.",
    },
    {
        number: "04",
        title: "Próximo nível",
        description:
            "A evolução não termina em um projeto. Cada desafio superado prepara você para o próximo passo da sua jornada.",
    },
];

export function Journey() {
    return (<section
        id="journey"
        className="relative overflow-hidden bg-[var(--background)]"
    >
        {/* Background details */} <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
        > <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.04]" />

            ```
            <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent)]/[0.03] blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-32 md:px-10 md:py-40 lg:px-16 lg:py-48">
            {/* Header */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
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
                            A jornada
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
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3rem,7vw,7rem)] font-bold uppercase leading-[0.85] tracking-[-0.07em]">
                        Evoluir é uma
                        <br />
                        <span className="text-[var(--accent)]">jornada.</span>
                    </h2>

                    <p className="mt-10 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                        Não existe atalho para se tornar um grande desenvolvedor.
                        Existe consistência, curiosidade e a disposição para continuar
                        avançando.
                    </p>
                </motion.div>
            </div>

            {/* Journey timeline */}
            <div className="relative mt-32 md:mt-40">
                {/* Progress line */}
                <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-[23px] top-0 w-px bg-white/10 md:left-[50%] md:-translate-x-1/2"
                />

                <motion.div
                    aria-hidden="true"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[23px] top-0 w-px bg-[var(--accent)] md:left-[50%] md:-translate-x-1/2"
                />

                <div className="space-y-20 md:space-y-0">
                    {steps.map((step, index) => (
                        <motion.article
                            key={step.number}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`relative grid md:min-h-[320px] md:grid-cols-2 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Content */}
                            <div
                                className={`pl-16 md:flex md:items-center md:pl-0 ${index % 2 === 0
                                        ? "md:pr-24"
                                        : "md:col-start-2 md:pl-24"
                                    }`}
                            >
                                <div>
                                    <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-[var(--accent)]">
                                        {step.number}
                                    </span>

                                    <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold uppercase tracking-[-0.05em] md:text-6xl">
                                        {step.title}
                                    </h3>

                                    <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--muted)] md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Timeline marker */}
                            <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15 + 0.2,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_var(--background),0_0_20px_var(--accent)]"
                                />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Closing statement */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                }}
                className="mt-32 border-t border-white/10 pt-10 md:mt-40 md:flex md:items-center md:justify-between"
            >
                <p className="max-w-2xl font-[family-name:var(--font-space-grotesk)] text-2xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
                    Cada linha de código é um passo.
                    <br />
                    <span className="text-[var(--muted)]">
                        Continue escrevendo a sua história.
                    </span>
                </p>

                <span className="mt-8 block text-xs uppercase tracking-[0.3em] text-[var(--muted)] md:mt-0">
                    Keep moving forward.
                </span>
            </motion.div>
        </div>
    </section>


    );
}
