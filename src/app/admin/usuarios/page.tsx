import { TablaUsuarios } from "@/components/admin/TablaUsuarios";

export default function UsuariosPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-white">Usuarios suscritos</h1>
      <p className="mt-1 text-sm text-neutral-400">
        Gestiona y filtra todas las membresías activas en Aaron Fitness.
      </p>

      <div className="mt-8">
        <TablaUsuarios />
      </div>
    </div>
  );
}
