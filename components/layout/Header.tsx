"use client";

import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
        <a
          href="#hero"
          className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold tracking-[-0.04em]"
        >
          DEV<span className="text-[var(--accent)]">CLUB</span>
        </a>

        <button
          type="button"
          aria-label="Abrir menu"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
        >
          <Menu
            size={20}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:rotate-90"
          />
        </button>
      </div>
    </header>
  );
}