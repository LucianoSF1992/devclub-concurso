"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5113";

export default function CadastroPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        setErrorMessage("");
        setSuccessMessage("");

        if (name.trim().length < 2) {
            setErrorMessage(
                "Informe um nome com pelo menos 2 caracteres.",
            );


            return;


        }

        if (password.length < 6) {
            setErrorMessage(
                "A senha deve possuir pelo menos 6 caracteres.",
            );


            return;


        }

        setIsLoading(true);

        try {
            const response = await fetch(
                `${API_URL}/api/Auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim().toLowerCase(),
                        password,
                    }),
                },
            );

            const data = await response.json();

            if (!response.ok) {
                setErrorMessage(
                    data.message ??
                    "Não foi possível realizar o cadastro.",
                );

                return;
            }

            setSuccessMessage(
                "Cadastro realizado com sucesso! Você já pode entrar na plataforma.",
            );

            setName("");
            setEmail("");
            setPassword("");


        } catch (error) {
            console.error(
                "Erro ao realizar cadastro:",
                error,
            );

            setErrorMessage(
                "Não foi possível conectar ao servidor. Verifique se a API está em execução.",
            );

        } finally {
            setIsLoading(false);
        }
    }


    return (<main className="relative flex min-h-screen overflow-hidden bg-[var(--background)]"> <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
    > <div className="absolute left-[10%] top-[20%] h-px w-24 bg-white/10" />

        <div className="absolute bottom-[20%] right-[10%] h-px w-24 bg-white/10" />

        <div className="absolute left-[15%] top-[30%] h-1 w-1 rounded-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent)]" />

        <div className="absolute bottom-[25%] right-[20%] h-1 w-1 rounded-full bg-white/20" />
    </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 py-8 md:px-10 lg:px-16">
            <header className="flex items-center justify-between">
                <Link
                    href="/"
                    className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.04em]"
                >
                    DEV<span className="text-[var(--accent)]">
                        CLUB
                    </span>
                </Link>

                <Link
                    href="/"
                    className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition-colors duration-300 hover:text-white"
                >
                    <ArrowLeft size={16} />

                    Voltar
                </Link>
            </header>

            <div className="flex flex-1 items-center justify-center py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full max-w-md"
                >
                    <div className="mb-10">
                        <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
                            DevClub / Cadastro
                        </span>

                        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold uppercase leading-none tracking-[-0.05em] md:text-5xl">
                            Comece sua
                            <br />
                            <span className="text-[var(--accent)]">
                                jornada.
                            </span>
                        </h1>

                        <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">
                            Crie sua conta e comece a evoluir suas
                            habilidades em desenvolvimento.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-white/60"
                            >
                                Nome
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                placeholder="Seu nome completo"
                                required
                                minLength={2}
                                disabled={isLoading}
                                className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[var(--accent)] focus:bg-white/[0.05]"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-white/60"
                            >
                                E-mail
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="voce@email.com"
                                required
                                disabled={isLoading}
                                className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[var(--accent)] focus:bg-white/[0.05]"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-white/60"
                            >
                                Senha
                            </label>

                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                placeholder="Mínimo de 6 caracteres"
                                required
                                minLength={6}
                                disabled={isLoading}
                                className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[var(--accent)] focus:bg-white/[0.05]"
                            />
                        </div>

                        {errorMessage && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                            >
                                {errorMessage}
                            </motion.div>
                        )}

                        {successMessage && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className="flex items-start gap-3 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/10 px-4 py-3 text-sm text-[var(--accent)]"
                            >
                                <CheckCircle2
                                    size={18}
                                    className="mt-0.5 shrink-0"
                                />

                                <span>{successMessage}</span>
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--accent)] text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(200,255,0,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />

                                    Criando conta...
                                </>
                            ) : (
                                <>
                                    Criar minha conta

                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                                        <ArrowRight size={15} />
                                    </span>
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-[var(--muted)]">
                            Já possui uma conta?{" "}
                            <Link
                                href="/login"
                                className="font-medium text-white transition-colors duration-300 hover:text-[var(--accent)]"
                            >
                                Entrar
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </div>

            <footer className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-white/20">
                <span>DevClub / 2026</span>

                <span className="hidden sm:block">
                    Build. Learn. Evolve.
                </span>
            </footer>
        </div>
    </main>
    );
}
