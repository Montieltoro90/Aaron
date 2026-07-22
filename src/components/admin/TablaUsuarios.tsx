"use client";

import { useMemo, useState } from "react";
import { EstadoBadge } from "@/components/admin/EstadoBadge";
import { usuarios, type EstadoSuscripcion, type Plan } from "@/data/usuarios";
import { paises } from "@/data/sedes";

export function TablaUsuarios() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroEstado, setFiltroEstado] = useState<EstadoSuscripcion | "Todos">("Todos");
  const [filtroPais, setFiltroPais] = useState<string>("Todos");
  const [filtroPlan, setFiltroPlan] = useState<Plan | "Todos">("Todos");

  const usuariosFiltrados = useMemo(() => {
    return usuarios.filter((u) => {
      const coincideBusqueda =
        u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        u.email.toLowerCase().includes(busqueda.toLowerCase());
      const coincideEstado = filtroEstado === "Todos" || u.estado === filtroEstado;
      const coincidePais = filtroPais === "Todos" || u.pais === filtroPais;
      const coincidePlan = filtroPlan === "Todos" || u.plan === filtroPlan;
      return coincideBusqueda && coincideEstado && coincidePais && coincidePlan;
    });
  }, [busqueda, filtroEstado, filtroPais, filtroPlan]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Buscar por nombre o email..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full max-w-xs rounded-xl border border-white/10 bg-neutral-950 px-4 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-lime-400"
        />

        <div className="flex flex-wrap gap-2">
          <select
            value={filtroPais}
            onChange={(e) => setFiltroPais(e.target.value)}
            className="rounded-xl border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none focus:border-lime-400"
          >
            <option value="Todos">Todos los países</option>
            {paises.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>

          <select
            value={filtroPlan}
            onChange={(e) => setFiltroPlan(e.target.value as Plan | "Todos")}
            className="rounded-xl border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none focus:border-lime-400"
          >
            <option value="Todos">Todos los planes</option>
            <option value="Mensual">Mensual</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Anual">Anual</option>
          </select>

          <select
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value as EstadoSuscripcion | "Todos")}
            className="rounded-xl border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white outline-none focus:border-lime-400"
          >
            <option value="Todos">Todos los estados</option>
            <option value="Activo">Activo</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Vencido">Vencido</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-neutral-950">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-neutral-500">
              <th className="px-4 py-3 font-medium">Nombre</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Sede</th>
              <th className="px-4 py-3 font-medium">País</th>
              <th className="px-4 py-3 font-medium">Plan</th>
              <th className="px-4 py-3 font-medium">Estado</th>
              <th className="px-4 py-3 font-medium">Próx. cobro</th>
              <th className="px-4 py-3 text-right font-medium">Monto</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map((u) => (
              <tr key={u.id} className="border-b border-white/5 text-neutral-300 hover:bg-white/5">
                <td className="px-4 py-3 font-medium text-white">{u.nombre}</td>
                <td className="px-4 py-3 text-neutral-400">{u.email}</td>
                <td className="px-4 py-3">{u.sede}</td>
                <td className="px-4 py-3">{u.pais}</td>
                <td className="px-4 py-3">{u.plan}</td>
                <td className="px-4 py-3">
                  <EstadoBadge estado={u.estado} />
                </td>
                <td className="px-4 py-3 text-neutral-400">{u.proximoCobro}</td>
                <td className="px-4 py-3 text-right font-semibold text-white">
                  ${u.montoMensual.toFixed(2)}
                </td>
              </tr>
            ))}

            {usuariosFiltrados.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-neutral-500">
                  No se encontraron usuarios con esos filtros.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-sm text-neutral-500">
        Mostrando {usuariosFiltrados.length} de {usuarios.length} usuarios
      </p>
    </div>
  );
}
