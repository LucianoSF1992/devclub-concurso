import { ArrowUpRight } from "lucide-react";

const links = [
    {
        label: "Início",
        href: "#hero",
    },
    {
        label: "Desafio",
        href: "#challenge",
    },
    {
        label: "Next Level",
        href: "#next-level",
    },
    {
        label: "Sobre",
        href: "#about",
    },
    {
        label: "Jornada",
        href: "#journey",
    },
];

export function Footer() {
    return (<footer className="bg-[var(--background)] text-[var(--foreground)]"> <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Main footer */} <div className="grid gap-16 border-b border-white/10 py-20 md:py-24 lg:grid-cols-[1fr_auto] lg:items-end"> <div> <a
            href="#hero"
            className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold tracking-[-0.05em]"
        >
            DEV<span className="text-[var(--accent)]">CLUB</span> </a>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                Você não está apenas aprendendo a programar. Você está
                construindo o seu próximo nível.
            </p>
        </div>

            <nav
                aria-label="Navegação do rodapé"
                className="grid grid-cols-2 gap-x-12 gap-y-4 md:grid-cols-3"
            >
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-300 hover:text-[var(--accent)]"
                    >
                        {link.label}

                        <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                    </a>
                ))}
            </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 py-8 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <p>
                © {new Date().getFullYear()} DevClub — Next Level.
            </p>

            <p className="uppercase tracking-[0.2em]">
                Built for the next level.
            </p>
        </div>
    </div>
    </footer>
    );
}
