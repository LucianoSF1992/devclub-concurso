"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function FinalCTA() {
    return (<section
        id="final-cta"
        className="relative overflow-hidden bg-[var(--surface)]"
    >
        {/* Background */} <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
        > <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/[0.06] blur-[160px]" />

            ```
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1440px] flex-col justify-between px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
            {/* Top label */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                }}
                className="flex items-center gap-3"
            >
                <span className="h-px w-10 bg-[var(--accent)]" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                    Agora é com você
                </span>
            </motion.div>

            {/* Main content */}
            <div className="my-24">
                <motion.h2
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-6xl font-[family-name:var(--font-space-grotesk)] text-[clamp(4rem,11vw,11rem)] font-bold uppercase leading-[0.8] tracking-[-0.08em]"
                >
                    Seu próximo
                    <br />
                    <span className="text-[var(--accent)]">nível começa.</span>
                    <br />
                    Agora.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="mt-10 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
                >
                    O primeiro passo é decidir que você está pronto para ir além.
                    Continue aprendendo, continue construindo e nunca pare de evoluir.
                </motion.p>

                <motion.a
                    href="#hero"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.35,
                    }}
                    whileHover={{
                        scale: 1.03,
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    className="group mt-10 inline-flex items-center gap-5 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(200,255,0,0.2)]"
                >
                    Começar agora

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                    </span>
                </motion.a>
            </div>

            {/* Bottom statement */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay: 0.3,
                }}
                className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between"
            >
                <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                    DevClub / Next Level
                </span>

                <span className="text-xs uppercase tracking-[0.3em] text-white/30">
                    Build. Learn. Evolve.
                </span>
            </motion.div>
        </div>
    </section>


    );
}
