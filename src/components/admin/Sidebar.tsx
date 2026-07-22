"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const enlaces = [
  { href: "/admin", label: "Dashboard", icono: "📊" },
  { href: "/admin/usuarios", label: "Usuarios", icono: "👥" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-white/10 bg-neutral-950 px-4 py-6">
      <Link href="/" className="mb-10 px-2 text-lg font-extrabold text-white">
        AARON<span className="text-lime-400">FITNESS</span>
        <span className="ml-1 block text-xs font-semibold text-neutral-500">
          Panel administrativo
        </span>
      </Link>

      <nav className="flex flex-col gap-1">
        {enlaces.map((enlace) => {
          const activo = pathname === enlace.href;
          return (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                activo
                  ? "bg-lime-400 text-neutral-950"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{enlace.icono}</span>
              {enlace.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/"
        className="mt-auto rounded-xl px-4 py-3 text-sm font-semibold text-neutral-500 hover:text-white"
      >
        ← Volver a la landing
      </Link>
    </aside>
  );
}
