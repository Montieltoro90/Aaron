"use client";

import Link from "next/link";
import { useState } from "react";

const enlaces = [
  { href: "#sedes", label: "Sedes" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#planes", label: "Planes" },
  { href: "#galeria", label: "Galería" },
  { href: "#suscribirse", label: "Suscríbete" },
];

export function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white">
          AARON<span className="text-lime-400">FITNESS</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                href={enlace.href}
                className="text-sm font-medium text-neutral-300 transition hover:text-lime-400"
              >
                {enlace.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#suscribirse"
          className="hidden rounded-full bg-lime-400 px-5 py-2 text-sm font-bold text-neutral-950 transition hover:bg-lime-300 md:inline-block"
        >
          Únete ahora
        </a>

        <button
          className="text-white md:hidden"
          onClick={() => setAbierto(!abierto)}
          aria-label="Abrir menú"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {abierto ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {abierto && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-neutral-950 px-6 py-4 md:hidden">
          {enlaces.map((enlace) => (
            <li key={enlace.href}>
              <a
                href={enlace.href}
                onClick={() => setAbierto(false)}
                className="block py-2 text-sm font-medium text-neutral-300 hover:text-lime-400"
              >
                {enlace.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#suscribirse"
              onClick={() => setAbierto(false)}
              className="mt-2 block rounded-full bg-lime-400 px-5 py-2 text-center text-sm font-bold text-neutral-950"
            >
              Únete ahora
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
