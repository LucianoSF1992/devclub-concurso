"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    label: "Início",
    href: "#hero",
  },
  {
    label: "O desafio",
    href: "#challenge",
  },
  {
    label: "Próximo nível",
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
  {
    label: "Começar",
    href: "#final-cta",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavigation() {
    setIsOpen(false);
  }

  return (
    <> <header className="fixed inset-x-0 top-0 z-50"> <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16"> <a
      href="#hero"
      onClick={handleNavigation}
      className="relative z-50 font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.04em]"
    >
      DEV<span className="text-[var(--accent)]">CLUB</span> </a>

      ```
      <button
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="group relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} strokeWidth={1.5} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={20} strokeWidth={1.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
    </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[var(--background)]"
          >
            <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 md:px-10 lg:px-16">
              <nav
                aria-label="Navegação principal"
                className="flex flex-col"
              >
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={handleNavigation}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center justify-between border-b border-white/10 py-5 transition-colors duration-300 md:py-7"
                  >
                    <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold uppercase tracking-[-0.05em] transition-colors duration-300 group-hover:text-[var(--accent)] md:text-6xl lg:text-7xl">
                      {item.label}
                    </span>

                    <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="mt-10 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/20"
              >
                <span>DevClub / 2026</span>

                <span>Build. Learn. Evolve.</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
