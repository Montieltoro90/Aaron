export function StatCard({
  titulo,
  valor,
  detalle,
}: {
  titulo: string;
  valor: string;
  detalle?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-950 p-6">
      <p className="text-sm font-medium text-neutral-400">{titulo}</p>
      <p className="mt-2 text-3xl font-extrabold text-white">{valor}</p>
      {detalle && <p className="mt-1 text-xs text-neutral-500">{detalle}</p>}
    </div>
  );
}
