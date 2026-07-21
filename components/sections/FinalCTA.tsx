"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function FinalCTA() {
    return (<section
        id="final-cta"
        className="relative overflow-hidden bg-[var(--accent)] text-black"
    >
        {/* Decorative typography */} <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-[family-name:var(--font-space-grotesk)] text-[30rem] font-bold leading-none tracking-[-0.12em] text-black/[0.04] lg:block"
        >
            → </div>

        <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
            <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                {/* Main content */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
                        O próximo passo é seu
                    </span>

                    <h2 className="mt-8 max-w-5xl font-[family-name:var(--font-space-grotesk)] text-6xl font-bold uppercase leading-[0.8] tracking-[-0.08em] md:text-8xl lg:text-[10rem]">
                        Pronto para
                        <br />
                        o próximo
                        <br />
                        nível?
                    </h2>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <p className="max-w-md text-base leading-relaxed text-black/70 md:text-lg">
                        O conhecimento abre portas. A prática cria oportunidades. A
                        decisão de começar está nas suas mãos.
                    </p>

                    <a
                        href="#contact"
                        className="group mt-8 inline-flex items-center gap-5 rounded-full bg-black px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-transform duration-300 hover:scale-105"
                    >
                        Quero começar

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-black transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight size={16} />
                        </span>
                    </a>
                </motion.div>
            </div>
        </div>
    </section>
    );
}
