import Link from "next/link";
import { totalSedes } from "@/data/sedes";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 px-6 py-12 text-neutral-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p className="text-xl font-extrabold text-white">
            AARON<span className="text-lime-400">FITNESS</span>
          </p>
          <p className="mt-2 max-w-xs text-sm">
            {totalSedes} sedes en Venezuela, Colombia y Panamá. Una sola
            suscripción, todo el acceso.
          </p>
        </div>

        <div className="flex gap-16 text-sm">
          <div>
            <p className="font-semibold text-white">Enlaces</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#sedes" className="hover:text-lime-400">Sedes</a></li>
              <li><a href="#planes" className="hover:text-lime-400">Planes</a></li>
              <li><a href="#suscribirse" className="hover:text-lime-400">Suscríbete</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Empresa</p>
            <ul className="mt-3 space-y-2">
              <li><Link href="/admin" className="hover:text-lime-400">Portal administrativo</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl text-xs text-neutral-600">
        © 2026 Aaron Fitness. Todos los derechos reservados.
      </p>
    </footer>
  );
}
