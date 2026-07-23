"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/contact`;

export function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (!name.trim() || !email.trim() || !message.trim()) {
            setErrorMessage("Preencha todos os campos antes de enviar.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    message: message.trim(),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);

                if (response.status === 400 && errorData?.errors) {
                    setErrorMessage(
                        "Verifique os dados informados e tente novamente."
                    );
                } else {
                    setErrorMessage(
                        "Não foi possível enviar sua mensagem. Tente novamente."
                    );
                }

                return;
            }

            setSuccessMessage(
                "Mensagem enviada com sucesso! Obrigado pelo contato."
            );

            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setErrorMessage(
                "Não foi possível conectar ao servidor. Verifique se a API está em execução."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black text-white"
        >
            {/* Decorative typography */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-10 top-1/2 hidden -translate-y-1/2 select-none font-[family-name:var(--font-space-grotesk)] text-[25rem] font-bold leading-none tracking-[-0.12em] text-white/[0.03] lg:block"
            >
                ?
            </div>

            <div className="relative mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    {/* Introduction */}
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
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                            Entre em contato
                        </span>

                        <h2 className="mt-8 max-w-xl font-[family-name:var(--font-space-grotesk)] text-6xl font-bold uppercase leading-[0.85] tracking-[-0.08em] md:text-7xl lg:text-8xl">
                            Vamos
                            <br />
                            conversar?
                        </h2>

                        <p className="mt-8 max-w-md text-base leading-relaxed text-white/60 md:text-lg">
                            Tem um projeto, uma oportunidade ou simplesmente
                            quer trocar uma ideia? Envie uma mensagem.
                        </p>
                    </motion.div>

                    {/* Contact form */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/50"
                                >
                                    Nome
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                    placeholder="Seu nome"
                                    disabled={isSubmitting}
                                    className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-lg text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/50"
                                >
                                    E-mail
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="seu@email.com"
                                    disabled={isSubmitting}
                                    className="w-full border-b border-white/20 bg-transparent px-0 py-4 text-lg text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-white/50"
                                >
                                    Mensagem
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(event) =>
                                        setMessage(event.target.value)
                                    }
                                    placeholder="Como posso ajudar?"
                                    rows={5}
                                    disabled={isSubmitting}
                                    className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-4 text-lg text-white outline-none transition-colors placeholder:text-white/30 focus:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>

                            {successMessage && (
                                <div
                                    role="status"
                                    className="flex items-center gap-3 border border-green-400/20 bg-green-400/10 p-4 text-sm text-green-300"
                                >
                                    <CheckCircle2 size={20} />
                                    <span>{successMessage}</span>
                                </div>
                            )}

                            {errorMessage && (
                                <div
                                    role="alert"
                                    className="border border-red-400/20 bg-red-400/10 p-4 text-sm text-red-300"
                                >
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group inline-flex items-center gap-5 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition-transform duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <>
                                        Enviando
                                        <Loader2
                                            size={18}
                                            className="animate-spin"
                                        />
                                    </>
                                ) : (
                                    <>
                                        Enviar mensagem

                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-[var(--accent)] transition-transform duration-300 group-hover:rotate-45">
                                            <ArrowUpRight size={16} />
                                        </span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );

}
