"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Clock3,
    PlayCircle,
} from "lucide-react";
import { motion } from "motion/react";

import {
    api,
    type CourseProgressResponse,
    type EnrolledCourseResponse,
    type LessonResponse,
} from "@/lib/api";
import { getToken } from "@/lib/auth";

export default function LessonPage() {
    const params = useParams();
    const router = useRouter();

    const slug = params.slug as string;
    const lessonId = Number(params.lessonId);

    const [course, setCourse] =
        useState<EnrolledCourseResponse | null>(null);

    const [progress, setProgress] =
        useState<CourseProgressResponse | null>(null);

    const [isUpdatingProgress, setIsUpdatingProgress] =
        useState(false);

    const [lesson, setLesson] =
        useState<LessonResponse | null>(null);

    const [isLoading, setIsLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    useEffect(() => {
        async function loadLesson() {
            if (!slug || !lessonId) {
                setError("Aula não encontrada.");
                setIsLoading(false);
                return;
            }

            const token = getToken();

            if (!token) {
                router.replace("/login");
                return;
            }

            setIsLoading(true);
            setError("");

            try {
                // Busca o curso público pelo slug
                // para descobrir o ID do curso.
                const publicCourse =
                    await api.getCourseBySlug(slug);

                // Busca o curso pelo endpoint protegido.
                // Assim garantimos que o aluno está matriculado.
                const enrolledCourse =
                    await api.getMyCourse(
                        publicCourse.id,
                        token,
                    );

                // Procura a aula dentro dos módulos
                // do curso matriculado.
                let selectedLesson:
                    | LessonResponse
                    | null = null;

                for (const module of enrolledCourse.modules) {
                    const foundLesson =
                        module.lessons.find(
                            (item) => item.id === lessonId,
                        );

                    if (foundLesson) {
                        selectedLesson = foundLesson;
                        break;
                    }
                }

                if (!selectedLesson) {
                    setError(
                        "A aula não foi encontrada neste curso.",
                    );
                    return;
                }

                const courseProgress =
                    await api.getCourseProgress(
                        enrolledCourse.id,
                        token,
                    );

                setCourse(enrolledCourse);
                setLesson(selectedLesson);
                setProgress(courseProgress);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError(
                        "Não foi possível carregar a aula.",
                    );
                }
            } finally {
                setIsLoading(false);
            }
        }

        loadLesson();


    }, [slug, lessonId, router]);

    const allLessons = useMemo(() => {
        if (!course) {
            return [];
        }


        return course.modules.flatMap(
            (module) => module.lessons,
        );


    }, [course]);

    const currentLessonIndex =
        lesson && allLessons.length > 0
            ? allLessons.findIndex(
                (item) => item.id === lesson.id,
            )
            : -1;

    const previousLesson =
        currentLessonIndex > 0
            ? allLessons[currentLessonIndex - 1]
            : null;

    const nextLesson =
        currentLessonIndex >= 0 &&
            currentLessonIndex <
            allLessons.length - 1
            ? allLessons[currentLessonIndex + 1]
            : null;

    const currentLessonProgress =
        progress?.lessons.find(
            (item) => item.id === lesson?.id,
        );

    const isCompleted =
        currentLessonProgress?.isCompleted ?? false;

    function getLessonUrl(
        targetLesson: LessonResponse,
    ) {
        return `/aluno/cursos/${slug}/aulas/${targetLesson.id}`;
    }

    async function toggleLessonCompletion() {
        if (!lesson || !course) {
            return;
        }

        const token = getToken();

        if (!token) {
            return;
        }

        try {
            setIsUpdatingProgress(true);

            if (isCompleted) {
                await api.uncompleteLesson(
                    lesson.id,
                    token,
                );
            } else {
                await api.completeLesson(
                    lesson.id,
                    token,
                );
            }

            const updatedProgress =
                await api.getCourseProgress(
                    course.id,
                    token,
                );

            setProgress(updatedProgress);
        } catch (error) {
            console.error(error);
        } finally {
            setIsUpdatingProgress(false);
        }
    }

    if (isLoading) {
        return (<main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"> <div className="mx-auto flex min-h-screen max-w-[1440px] items-center justify-center px-6"> <div className="text-center"> <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[var(--accent)]" />


            <p className="text-sm text-[var(--muted)]">
                Carregando aula...
            </p>
        </div>
        </div>
        </main>
        );


    }

    if (error || !course || !lesson) {
        return (<main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]"> <div className="mx-auto flex min-h-screen max-w-[1440px] items-center justify-center px-6"> <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[var(--surface)] p-8 text-center"> <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-red-500/20 bg-red-500/5"> <BookOpen
            size={24}
            className="text-red-400"
            strokeWidth={1.5}
        /> </div>


            <h1 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
                Aula não encontrada
            </h1>

            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {error ||
                    "Não foi possível encontrar a aula solicitada."}
            </p>

            <Link
                href={`/aluno/cursos/${slug}`}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-80"
            >
                <ArrowLeft size={16} />

                Voltar para o curso
            </Link>
        </div>
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
        <header className="relative z-20 border-b border-white/10 bg-[var(--background)]/80 backdrop-blur-xl">
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
                    href={`/aluno/cursos/${slug}`}
                    className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-white"
                >
                    <ArrowLeft
                        size={16}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                    Voltar para o curso
                </Link>
            </div>
        </header>

        {/* Main Content */}
        <section className="relative z-10">
            <div className="mx-auto max-w-[1440px] px-6 py-10 md:px-10 md:py-14 lg:px-16">
                <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
                    {/* Lesson Content */}
                    <div>
                        {/* Breadcrumb */}
                        <div className="mb-6 flex items-center gap-2 text-xs text-[var(--muted)]">
                            <Link
                                href="/aluno"
                                className="transition-colors hover:text-white"
                            >
                                Área do aluno
                            </Link>

                            <span className="text-white/20">
                                /
                            </span>

                            <Link
                                href={`/aluno/cursos/${slug}`}
                                className="max-w-[200px] truncate transition-colors hover:text-white"
                            >
                                {course.title}
                            </Link>

                            <span className="text-white/20">
                                /
                            </span>

                            <span className="text-white/50">
                                Aula {lesson.order}
                            </span>
                        </div>

                        {/* Video */}
                        <motion.div
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
                            className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
                        >
                            <div className="relative aspect-video w-full">
                                {lesson.videoUrl ? (
                                    <iframe
                                        src={lesson.videoUrl}
                                        title={lesson.title}
                                        className="absolute inset-0 h-full w-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--surface)]">
                                        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)]/10">
                                            <PlayCircle
                                                size={32}
                                                className="text-[var(--accent)]"
                                                strokeWidth={1.5}
                                            />
                                        </div>

                                        <p className="text-sm font-medium">
                                            Vídeo ainda não disponível
                                        </p>

                                        <p className="mt-2 text-xs text-[var(--muted)]">
                                            O conteúdo desta aula será
                                            disponibilizado em breve.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Lesson Info */}
                        <motion.div
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
                                delay: 0.1,
                            }}
                            className="mt-8"
                        >
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                                    Aula {lesson.order}
                                </span>

                                {lesson.durationInMinutes > 0 && (
                                    <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
                                        <Clock3 size={14} />

                                        {lesson.durationInMinutes} minutos
                                    </span>
                                )}
                            </div>

                            <h1 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.04em] md:text-5xl">
                                {lesson.title}
                                <span className="text-[var(--accent)]">
                                    .
                                </span>
                            </h1>

                            {lesson.description && (
                                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
                                    {lesson.description}
                                </p>
                            )}
                        </motion.div>

                        <div className="mt-8">
                            <button
                                onClick={toggleLessonCompletion}
                                disabled={isUpdatingProgress}
                                className={`inline-flex items-center gap-3 rounded-xl px-6 py-3 text-sm font-semibold transition-all ${isCompleted
                                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                                    : "bg-[var(--accent)] text-black hover:opacity-90"
                                    }`}
                            >
                                <CheckCircle2 size={18} />

                                {isUpdatingProgress
                                    ? "Atualizando..."
                                    : isCompleted
                                        ? "Marcar como não concluída"
                                        : "Marcar como concluída"}
                            </button>
                        </div>

                        {/* Navigation */}
                        <div className="mt-10 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-2">
                            {previousLesson ? (
                                <Link
                                    href={getLessonUrl(
                                        previousLesson,
                                    )}
                                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[var(--surface)] p-4 transition-all hover:border-white/20 hover:bg-white/[0.03]"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
                                        <ArrowLeft
                                            size={18}
                                            className="text-white/50 transition-transform group-hover:-translate-x-1"
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
                                            Aula anterior
                                        </p>

                                        <p className="mt-1 truncate text-sm font-medium">
                                            {previousLesson.title}
                                        </p>
                                    </div>
                                </Link>
                            ) : (
                                <div />
                            )}

                            {nextLesson ? (
                                <Link
                                    href={getLessonUrl(nextLesson)}
                                    className="group flex items-center justify-end gap-4 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-4 text-right transition-all hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10"
                                >
                                    <div className="min-w-0">
                                        <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--accent)]">
                                            Próxima aula
                                        </p>

                                        <p className="mt-1 truncate text-sm font-medium">
                                            {nextLesson.title}
                                        </p>
                                    </div>

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-black">
                                        <ArrowRight
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </div>
                                </Link>
                            ) : (
                                <div className="flex items-center justify-end gap-3 rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-4">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--accent)]">
                                            Curso concluído
                                        </p>

                                        <p className="mt-1 text-sm font-medium">
                                            Você chegou à última aula
                                        </p>
                                    </div>

                                    <CheckCircle2
                                        size={22}
                                        className="text-[var(--accent)]"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Course Sidebar */}
                    <aside>
                        <div className="sticky top-8 overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)]">
                            <div className="h-1 bg-[var(--accent)]" />

                            <div className="border-b border-white/10 p-6">
                                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
                                    Curso atual
                                </p>

                                <h2 className="mt-3 font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
                                    {course.title}
                                </h2>

                                <div className="mt-4 flex items-center gap-2 text-xs text-[var(--muted)]">
                                    <BookOpen size={14} />

                                    {allLessons.length} aulas
                                </div>

                                {progress && (
                                    <div className="mt-6">
                                        <div className="mb-2 flex items-center justify-between text-xs">
                                            <span className="text-[var(--muted)]">
                                                Progresso
                                            </span>

                                            <span className="font-semibold text-[var(--accent)]">
                                                {progress.progressPercentage}%
                                            </span>
                                        </div>

                                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                            <div
                                                className="h-full rounded-full bg-[var(--accent)] transition-all duration-500"
                                                style={{
                                                    width: `${progress.progressPercentage}%`,
                                                }}
                                            />
                                        </div>

                                        <p className="mt-2 text-[11px] text-[var(--muted)]">
                                            {progress.completedLessons} de{" "}
                                            {progress.totalLessons} aulas concluídas
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Lesson List */}
                            <div className="max-h-[600px] overflow-y-auto">
                                {course.modules.map(
                                    (module) => (
                                        <div key={module.id}>
                                            <div className="border-b border-white/5 bg-white/[0.02] px-5 py-4">
                                                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                                                    Módulo{" "}
                                                    {String(
                                                        module.order,
                                                    ).padStart(2, "0")}
                                                </p>

                                                <p className="mt-1 text-sm font-medium">
                                                    {module.title}
                                                </p>
                                            </div>

                                            <div className="divide-y divide-white/5">
                                                {module.lessons.map(
                                                    (moduleLesson) => {
                                                        const isCurrent =
                                                            moduleLesson.id ===
                                                            lesson.id;

                                                        return (
                                                            <Link
                                                                key={
                                                                    moduleLesson.id
                                                                }
                                                                href={getLessonUrl(
                                                                    moduleLesson,
                                                                )}
                                                                className={`group flex items-center gap-3 px-5 py-4 transition-colors ${isCurrent
                                                                    ? "bg-[var(--accent)]/5"
                                                                    : "hover:bg-white/[0.03]"
                                                                    }`}
                                                            >
                                                                <div
                                                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${isCurrent
                                                                        ? "border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)]"
                                                                        : "border-white/10 text-white/30"
                                                                        }`}
                                                                >
                                                                    {progress?.lessons.some(
                                                                        (item) =>
                                                                            item.id === moduleLesson.id &&
                                                                            item.isCompleted,
                                                                    ) ? (
                                                                        <CheckCircle2
                                                                            size={15}
                                                                            className="text-emerald-400"
                                                                        />
                                                                    ) : isCurrent ? (
                                                                        <PlayCircle size={15} />
                                                                    ) : (
                                                                        <span className="text-[10px]">
                                                                            {moduleLesson.order}
                                                                        </span>
                                                                    )}
                                                                </div>

                                                                <div className="min-w-0 flex-1">
                                                                    <p
                                                                        className={`truncate text-xs ${isCurrent
                                                                            ? "font-semibold text-[var(--accent)]"
                                                                            : "text-white/60 group-hover:text-white"
                                                                            }`}
                                                                    >
                                                                        {
                                                                            moduleLesson.title
                                                                        }
                                                                    </p>

                                                                    {moduleLesson.durationInMinutes >
                                                                        0 && (
                                                                            <p className="mt-1 text-[10px] text-white/25">
                                                                                {
                                                                                    moduleLesson.durationInMinutes
                                                                                }{" "}
                                                                                min
                                                                            </p>
                                                                        )}
                                                                </div>
                                                            </Link>
                                                        );
                                                    },
                                                )}
                                            </div>
                                        </div>
                                    ),
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    </main>


    );
}
