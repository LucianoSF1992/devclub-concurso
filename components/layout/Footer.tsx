export function Footer() {
    return (<footer className="border-t border-white/10 bg-[var(--background)]"> <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-10 md:px-10 md:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-16"> <div> <a
        href="#hero"
        className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.04em]"
    >
        DEV<span className="text-[var(--accent)]">CLUB</span> </a>

        <p className="mt-3 text-xs text-[var(--muted)]">
            Não apenas aprenda. Construa o seu próximo nível.
        </p>
    </div>

        <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]"
        >
            <a
                href="#hero"
                className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
                Início
            </a>

            <a
                href="#next-level"
                className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
                Próximo nível
            </a>

            <a
                href="#journey"
                className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
                Jornada
            </a>

            <a
                href="#final-cta"
                className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
                Começar
            </a>
        </nav>

        <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">
            © 2026 DevClub
        </span>
    </div>
    </footer>

    );
}
