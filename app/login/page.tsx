"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
} from "lucide-react";
import { motion } from "motion/react";

import { api } from "@/lib/api";
import { saveAuth } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [isLoading, setIsLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const authResponse = await api.login({
        email: email.trim(),
        password,
      });

      saveAuth(authResponse);

      router.push("/aluno");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(
          "Não foi possível realizar o login.",
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[120px]" />

        <div className="absolute bottom-[-15%] right-[-10%] h-[400px] w-[400px] rounded-full bg-white/[0.03] blur-[100px]" />
      </div>

      {/* Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Header */}
      <header className="relative z-10">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
          <Link
            href="/"
            className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.04em]"
          >
            DEV
            <span className="text-[var(--accent)]">
              CLUB
            </span>
          </Link>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition-colors duration-300 hover:text-white"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Voltar
          </Link>
        </div>
      </header>

      {/* Main */}
      <section className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center px-6 py-16 md:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-md"
        >
          {/* Intro */}
          <div className="mb-10 text-center">
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.15,
              }}
              className="mb-5 flex items-center justify-center gap-3"
            >
              <span className="h-px w-8 bg-[var(--accent)]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                Área do aluno
              </span>

              <span className="h-px w-8 bg-[var(--accent)]" />
            </motion.div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.05em] md:text-5xl">
              Bem-vindo
              <span className="text-[var(--accent)]">
                .
              </span>
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Entre na sua conta para continuar
              sua jornada no DevClub.
            </p>
          </div>

          {/* Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)]/80 p-6 shadow-2xl backdrop-blur-xl md:p-8">
            {/* Accent line */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]"
                >
                  E-mail
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="seu@email.com"
                    disabled={isLoading}
                    className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-12 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[var(--accent)]/60 focus:bg-white/[0.05] focus:ring-1 focus:ring-[var(--accent)]/20 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-[var(--muted)]"
                  >
                    Senha
                  </label>
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={18}
                    strokeWidth={1.5}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  />

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Digite sua senha"
                    disabled={isLoading}
                    className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-12 pr-12 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/20 focus:border-[var(--accent)]/60 focus:bg-white/[0.05] focus:ring-1 focus:ring-[var(--accent)]/20 disabled:cursor-not-allowed disabled:opacity-50"
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword
                        ? "Ocultar senha"
                        : "Mostrar senha"
                    }
                    onClick={() =>
                      setShowPassword(
                        (current) => !current,
                      )
                    }
                    disabled={isLoading}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-white/30 transition-colors duration-300 hover:bg-white/5 hover:text-white disabled:cursor-not-allowed"
                  >
                    {showPassword ? (
                      <EyeOff
                        size={18}
                        strokeWidth={1.5}
                      />
                    ) : (
                      <Eye
                        size={18}
                        strokeWidth={1.5}
                      />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3"
                >
                  <p className="text-sm leading-relaxed text-red-400">
                    {error}
                  </p>
                </motion.div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[var(--accent)] px-6 text-sm font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,255,0,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <LoaderCircle
                      size={18}
                      className="animate-spin"
                    />

                    Entrando...
                  </>
                ) : (
                  <>
                    Entrar

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight
                        size={15}
                        strokeWidth={1.5}
                      />
                    </span>
                  </>
                )}
              </button>
            </form>

            {/* Register */}
            <div className="mt-8 border-t border-white/10 pt-6 text-center">
              <p className="text-sm text-[var(--muted)]">
                Ainda não possui uma conta?
              </p>

              <Link
                href="/cadastro"
                className="mt-2 inline-block text-sm font-semibold text-[var(--accent)] transition-opacity duration-300 hover:opacity-70"
              >
                Criar minha conta
              </Link>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-[10px] uppercase tracking-[0.25em] text-white/20">
            Build. Learn. Evolve.
          </p>
        </motion.div>
      </section>
    </main>
  );
}