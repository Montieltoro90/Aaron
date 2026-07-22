"use client";

import { useMemo, useState } from "react";
import { paises, sedes, totalSedes, type Pais } from "@/data/sedes";

export function Sedes() {
  const [filtro, setFiltro] = useState<Pais | "Todos">("Todos");

  const sedesFiltradas = useMemo(
    () => (filtro === "Todos" ? sedes : sedes.filter((s) => s.pais === filtro)),
    [filtro],
  );

  return (
    <section id="sedes" className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {totalSedes} sedes, un solo carnet
            </h2>
            <p className="mt-3 max-w-xl text-neutral-400">
              Entrena en cualquiera de nuestras sedes en Venezuela, Colombia y
              Panamá sin costo adicional. Tu suscripción es válida en todas.
            </p>
          </div>

          <div className="flex gap-2 rounded-full bg-neutral-900 p-1">
            {(["Todos", ...paises] as const).map((opcion) => (
              <button
                key={opcion}
                onClick={() => setFiltro(opcion)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  filtro === opcion
                    ? "bg-lime-400 text-neutral-950"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {opcion}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sedesFiltradas.map((sede) => (
            <div
              key={sede.id}
              className="rounded-2xl border border-white/10 bg-neutral-900 p-5 transition hover:border-lime-400/40"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-lime-400">
                {sede.pais}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">{sede.nombre}</h3>
              <p className="mt-1 text-sm text-neutral-400">
                {sede.direccion}, {sede.ciudad}
              </p>
              <p className="text-sm text-neutral-500">{sede.estado}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
