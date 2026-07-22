import Link from "next/link";
import { StatCard } from "@/components/admin/StatCard";
import { EstadoBadge } from "@/components/admin/EstadoBadge";
import { resumenUsuarios, usuarios } from "@/data/usuarios";
import { totalSedes } from "@/data/sedes";

export default function AdminDashboard() {
  const ultimosRegistros = [...usuarios]
    .sort((a, b) => (a.fechaRegistro < b.fechaRegistro ? 1 : -1))
    .slice(0, 5);

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-white">Dashboard</h1>
      <p className="mt-1 text-sm text-neutral-400">
        Resumen general de suscripciones de Aaron Fitness.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          titulo="Usuarios suscritos"
          valor={resumenUsuarios.total.toString()}
          detalle={`${resumenUsuarios.activos} activos`}
        />
        <StatCard
          titulo="Ingreso mensual estimado"
          valor={`$${resumenUsuarios.ingresoMensual.toFixed(2)}`}
          detalle="Suscripciones activas"
        />
        <StatCard titulo="Sedes activas" valor={totalSedes.toString()} detalle="VE · CO · PA" />
        <StatCard
          titulo="Pendientes / vencidos"
          valor={(resumenUsuarios.pendientes + resumenUsuarios.vencidos).toString()}
          detalle="Requieren seguimiento"
        />
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-neutral-950 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Últimos registros</h2>
          <Link href="/admin/usuarios" className="text-sm font-semibold text-lime-400 hover:underline">
            Ver todos los usuarios →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-neutral-500">
                <th className="pb-3 pr-4 font-medium">Nombre</th>
                <th className="pb-3 pr-4 font-medium">Sede</th>
                <th className="pb-3 pr-4 font-medium">Plan</th>
                <th className="pb-3 pr-4 font-medium">Estado</th>
                <th className="pb-3 font-medium">Registro</th>
              </tr>
            </thead>
            <tbody>
              {ultimosRegistros.map((u) => (
                <tr key={u.id} className="border-b border-white/5 text-neutral-300">
                  <td className="py-3 pr-4 font-medium text-white">{u.nombre}</td>
                  <td className="py-3 pr-4">{u.sede}</td>
                  <td className="py-3 pr-4">{u.plan}</td>
                  <td className="py-3 pr-4">
                    <EstadoBadge estado={u.estado} />
                  </td>
                  <td className="py-3 text-neutral-400">{u.fechaRegistro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
