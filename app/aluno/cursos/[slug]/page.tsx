"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
ArrowLeft,
BookOpen,
CheckCircle2,
Clock3,
GraduationCap,
PlayCircle,
} from "lucide-react";
import { motion } from "motion/react";

import { api } from "@/lib/api";
import { getToken } from "@/lib/auth";

interface Lesson {
id: number;
title: string;
description: string;
videoUrl?: string | null;
durationInMinutes: number;
order: number;
}

interface CourseModule {
id: number;
title: string;
order: number;
lessons: Lesson[];
}

interface CourseDetails {
id: number;
title: string;
description: string;
slug: string;
imageUrl?: string | null;
level: string;
durationInHours: number;
modules: CourseModule[];
}

export default function CourseDetailsPage() {
const params = useParams();

const slug = params.slug as string;

const [course, setCourse] =
useState<CourseDetails | null>(null);

const [isLoading, setIsLoading] =
useState(true);

const [error, setError] =
useState("");

useEffect(() => {
async function loadCourse() {
if (!slug) {
return;
}

  setIsLoading(true);
  setError("");

  try {
    const courseResponse =
      await api.getCourseBySlug(slug);

    setCourse(courseResponse);
  } catch (error) {
    if (error instanceof Error) {
      setError(error.message);
    } else {
      setError(
        "Não foi possível carregar o curso.",
      );
    }
  } finally {
    setIsLoading(false);
  }
}

loadCourse();


}, [slug]);

if (isLoading) {
return ( <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"> <div className="mx-auto flex min-h-screen max-w-[1440px] items-center justify-center px-6"> <div className="text-center"> <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[var(--accent)]" />


        <p className="text-sm text-[var(--muted)]">
          Carregando curso...
        </p>
      </div>
    </div>
  </main>
);

}

if (error || !course) {
return ( <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"> <div className="mx-auto flex min-h-screen max-w-[1440px] items-center justify-center px-6"> <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[var(--surface)] p-8 text-center"> <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-red-500/20 bg-red-500/5"> <BookOpen
             size={24}
             className="text-red-400"
             strokeWidth={1.5}
           /> </div>


        <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
          Curso não encontrado
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {error ||
            "Não foi possível encontrar o curso solicitado."}
        </p>

        <Link
          href="/aluno"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-80"
        >
          <ArrowLeft size={16} />

          Voltar para área do aluno
        </Link>
      </div>
    </div>
  </main>
);

}

const totalLessons = course.modules.reduce(
(total, module) =>
total + module.lessons.length,
0,
);

return ( <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
{/* Background */} <div
     aria-hidden="true"
     className="pointer-events-none fixed inset-0 overflow-hidden"
   > <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[140px]" />

    <div className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[120px]" />
  </div>

  {/* Header */}
  <header className="relative z-10 border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
      <Link
        href="/aluno"
        className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.04em]"
      >
        DEV
        <span className="text-[var(--accent)]">
          CLUB
        </span>
      </Link>

      <Link
        href="/aluno"
        className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-white"
      >
        <ArrowLeft
          size={16}
          strokeWidth={1.5}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />

        Área do aluno
      </Link>
    </div>
  </header>

  {/* Course Hero */}
  <section className="relative z-10 overflow-hidden border-b border-white/10">
    <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20 lg:px-16 lg:py-24">
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
        className="max-w-4xl"
      >
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {course.level}
          </span>

          <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <Clock3 size={14} />

            {course.durationInHours} horas
          </span>

          <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
            <BookOpen size={14} />

            {totalLessons} aulas
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.05em] md:text-6xl lg:text-7xl">
          {course.title}
          <span className="text-[var(--accent)]">
            .
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          {course.description}
        </p>
      </motion.div>
    </div>
  </section>

  {/* Content */}
  <section className="relative z-10">
    <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
        {/* Modules */}
        <div>
          <div className="mb-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
              Conteúdo do curso
            </p>

            <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.04em] md:text-4xl">
              Sua jornada
            </h2>
          </div>

          <div className="space-y-4">
            {course.modules.map(
              (module, moduleIndex) => (
                <motion.div
                  key={module.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-50px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      moduleIndex * 0.05,
                  }}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)]"
                >
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-6">
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-sm font-bold text-[var(--accent)]">
                        {String(
                          module.order,
                        ).padStart(2, "0")}
                      </span>

                      <div>
                        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold">
                          {module.title}
                        </h3>

                        <p className="mt-1 text-xs text-[var(--muted)]">
                          {module.lessons.length}{" "}
                          {module.lessons.length ===
                          1
                            ? "aula"
                            : "aulas"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="divide-y divide-white/5">
                    {module.lessons.map(
                      (lesson) => (
                        <Link
                          key={lesson.id}
                          href={`/aluno/cursos/${course.slug}/aulas/${lesson.id}`}
                          className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03] md:px-6"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition-colors group-hover:border-[var(--accent)]/30 group-hover:text-[var(--accent)]">
                            <PlayCircle
                              size={18}
                              strokeWidth={1.5}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h4 className="truncate text-sm font-medium text-white/80 transition-colors group-hover:text-white">
                              {lesson.order}.{" "}
                              {lesson.title}
                            </h4>

                            <div className="mt-1 flex items-center gap-3">
                              <span className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                                Aula
                              </span>

                              {lesson.durationInMinutes >
                                0 && (
                                <>
                                  <span className="h-1 w-1 rounded-full bg-white/20" />

                                  <span className="flex items-center gap-1 text-[10px] text-white/30">
                                    <Clock3
                                      size={11}
                                    />

                                    {
                                      lesson.durationInMinutes
                                    }{" "}
                                    min
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          <ArrowLeft
                            size={16}
                            className="rotate-180 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                          />
                        </Link>
                      ),
                    )}
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="sticky top-8 overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)]">
            <div className="h-1 bg-[var(--accent)]" />

            <div className="p-6">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)]/10">
                <GraduationCap
                  size={28}
                  className="text-[var(--accent)]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
                Continue aprendendo
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Acesse as aulas do curso e
                avance na sua jornada de
                desenvolvimento.
              </p>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--muted)]">
                    Módulos
                  </span>

                  <span className="font-semibold">
                    {course.modules.length}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--muted)]">
                    Aulas
                  </span>

                  <span className="font-semibold">
                    {totalLessons}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--muted)]">
                    Duração
                  </span>

                  <span className="font-semibold">
                    {course.durationInHours}h
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-[var(--accent)]/10 bg-[var(--accent)]/5 p-4">
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[var(--accent)]"
                />

                <p className="text-xs leading-relaxed text-white/60">
                  Seu progresso será salvo
                  conforme você avança pelas
                  aulas.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</main>

);
}
