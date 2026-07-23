"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  LogOut,
  UserRound,
} from "lucide-react";
import { motion } from "motion/react";

import {
  api,
  type CourseListItemResponse,
  type MyCourseResponse,
  type StudentProfileResponse,
} from "@/lib/api";

import {
  getToken,
  logout,
} from "@/lib/auth";

export default function StudentAreaPage() {
  const router = useRouter();

  const [profile, setProfile] =
    useState<StudentProfileResponse | null>(null);

  const [myCourses, setMyCourses] =
    useState<MyCourseResponse[]>([]);

  const [availableCourses, setAvailableCourses] =
    useState<CourseListItemResponse[]>([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function loadStudentArea() {
      const token = getToken();

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        setError("");

        const [
          profileResponse,
          myCoursesResponse,
          coursesResponse,
        ] = await Promise.all([
          api.getStudentProfile(token),
          api.getMyCourses(token),
          api.getCourses(),
        ]);

        setProfile(profileResponse);
        setMyCourses(myCoursesResponse);

        const enrolledCourseIds = new Set(
          myCoursesResponse.map(
            (course) => course.id,
          ),
        );

        const filteredCourses =
          coursesResponse.filter(
            (course) =>
              !enrolledCourseIds.has(course.id),
          );

        setAvailableCourses(filteredCourses);
      } catch (error) {
        if (
          error instanceof Error &&
          error.message
            .toLowerCase()
            .includes("autentic")
        ) {
          logout();
          router.replace("/login");
          return;
        }

        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError(
            "Não foi possível carregar sua área do aluno.",
          );
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadStudentArea();

  }, [router]);

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  if (isLoading) {
    return (<main className="flex min-h-screen items-center justify-center bg-[var(--background)] text-[var(--foreground)]"> <div className="text-center"> <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[var(--accent)]" />

      <p className="text-sm text-[var(--muted)]">
        Carregando sua área do aluno...
      </p>
    </div>
    </main>
    );


  }

  return (<main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
    {/* Background */} <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
    > <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[140px]" />


      <div className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[120px]" />
    </div>

    {/* Header */}
    <header className="relative z-10 border-b border-white/10 bg-black/20 backdrop-blur-xl">
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

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <UserRound
                size={16}
                strokeWidth={1.5}
                className="text-[var(--accent)]"
              />
            </div>

            <div>
              <p className="text-xs font-medium text-white">
                {profile?.name}
              </p>

              <p className="text-[10px] text-[var(--muted)]">
                Área do aluno
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="group flex h-10 items-center gap-2 rounded-full border border-white/10 px-4 text-xs uppercase tracking-[0.15em] text-[var(--muted)] transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/5 hover:text-red-400"
          >
            <LogOut
              size={15}
              strokeWidth={1.5}
            />

            <span className="hidden sm:inline">
              Sair
            </span>
          </button>
        </div>
      </div>
    </header>

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-12 md:px-10 md:py-16 lg:px-16">
      {/* Welcome */}
      <motion.section
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="mb-16"
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--accent)]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
            Área do aluno
          </span>
        </div>

        <h1 className="max-w-4xl font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-[-0.05em] md:text-6xl lg:text-7xl">
          Olá,{" "}
          <span className="text-[var(--accent)]">
            {profile?.name?.split(" ")[0] ?? "Aluno"}
          </span>
          .
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
          Continue sua jornada de aprendizado,
          desenvolva suas habilidades e avance
          para o próximo nível.
        </p>
      </motion.section>

      {/* Error */}
      {error && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-10 rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-4"
        >
          <p className="text-sm text-red-400">
            {error}
          </p>
        </motion.div>
      )}

      {/* My Courses */}
      <section className="mb-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <BookOpen
                size={18}
                strokeWidth={1.5}
                className="text-[var(--accent)]"
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                Minha jornada
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.04em] md:text-4xl">
              Meus cursos
            </h2>
          </div>

          <span className="hidden text-xs text-[var(--muted)] sm:block">
            {myCourses.length}{" "}
            {myCourses.length === 1
              ? "curso matriculado"
              : "cursos matriculados"}
          </span>
        </div>

        {myCourses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-14 text-center">
            <BookOpen
              size={32}
              strokeWidth={1}
              className="mx-auto mb-5 text-white/20"
            />

            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold">
              Você ainda não está matriculado
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Explore os cursos disponíveis abaixo
              e escolha o próximo passo da sua
              jornada.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {myCourses.map(
              (course, index) => (
                <motion.article
                  key={course.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/30"
                >
                  <div className="relative flex h-44 items-end overflow-hidden bg-white/[0.03] p-6">
                    {course.imageUrl ? (
                      <img
                        src={course.imageUrl}
                        alt={course.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <span className="relative z-10 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                      Matriculado
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.03em]">
                      {course.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
                      {course.description}
                    </p>

                    <div className="mt-5 flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-white/40">
                      <span>
                        {course.level}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-white/20" />

                      <span className="flex items-center gap-1.5">
                        <Clock3 size={12} />

                        {course.durationInHours}h
                      </span>
                    </div>

                    <Link
                      href={`/aluno/cursos/${course.slug}`}
                      className="group/link mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]"
                    >
                      Continuar curso

                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        )}
      </section>

      {/* Available Courses */}
      <section>
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--accent)]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
              Próximo nível
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.04em] md:text-4xl">
            Explore novos cursos
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            Encontre novos conteúdos para
            continuar evoluindo suas habilidades.
          </p>
        </div>

        {availableCourses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-14 text-center">
            <p className="text-sm text-[var(--muted)]">
              Você já está matriculado em todos
              os cursos disponíveis.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map(
              (course, index) => (
                <motion.article
                  key={course.id}
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
                    delay: index * 0.08,
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)]/30"
                >
                  <div className="relative h-44 overflow-hidden bg-white/[0.03]">
                    {course.imageUrl ? (
                      <img
                        src={course.imageUrl}
                        alt={course.title}
                        className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-[var(--accent)]/10 via-transparent to-transparent" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.03em]">
                      {course.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
                      {course.description}
                    </p>

                    <div className="mt-5 flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-white/40">
                      <span>
                        {course.level}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-white/20" />

                      <span className="flex items-center gap-1.5">
                        <Clock3 size={12} />

                        {course.durationInHours}h
                      </span>
                    </div>

                    <Link
                      href={`/aluno/cursos/${course.slug}`}
                      className="group/link mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]"
                    >
                      Ver curso

                      <ArrowRight
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        )}
      </section>
    </div>
  </main>

  );
}
