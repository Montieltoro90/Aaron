import type { EstadoSuscripcion } from "@/data/usuarios";

const estilos: Record<EstadoSuscripcion, string> = {
  Activo: "bg-lime-400/10 text-lime-400 border-lime-400/30",
  Pendiente: "bg-amber-400/10 text-amber-400 border-amber-400/30",
  Vencido: "bg-red-400/10 text-red-400 border-red-400/30",
  Cancelado: "bg-neutral-500/10 text-neutral-400 border-neutral-500/30",
};

export function EstadoBadge({ estado }: { estado: EstadoSuscripcion }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${estilos[estado]}`}
    >
      {estado}
    </span>
  );
}
