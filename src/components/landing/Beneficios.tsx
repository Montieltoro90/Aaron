const beneficios = [
  {
    titulo: "Acceso multisede",
    descripcion: "Una sola membresía te da acceso a las +30 sedes en 3 países, sin costo extra.",
    icono: "🌎",
  },
  {
    titulo: "Clases grupales",
    descripcion: "Spinning, funcional, yoga y crossfit incluidos en tu suscripción mensual.",
    icono: "🧘",
  },
  {
    titulo: "Entrenadores certificados",
    descripcion: "Equipo de coaches profesionales disponibles en cada sede para guiar tu rutina.",
    icono: "🏋️",
  },
  {
    titulo: "Equipos de última generación",
    descripcion: "Máquinas y zonas de peso libre renovadas constantemente en todas nuestras sedes.",
    icono: "⚙️",
  },
  {
    titulo: "App de seguimiento",
    descripcion: "Reserva clases, controla tu progreso y gestiona tu suscripción desde el celular.",
    icono: "📱",
  },
  {
    titulo: "Sin permanencia",
    descripcion: "Cancela cuando quieras, sin penalidades ni letras pequeñas.",
    icono: "✅",
  },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-neutral-900 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Todo lo que necesitas para entrenar
          </h2>
          <p className="mt-3 text-neutral-400">
            Diseñamos cada sede para que tengas la mejor experiencia sin
            importar en qué país te encuentres.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <div key={b.titulo} className="rounded-2xl border border-white/10 bg-neutral-950 p-6">
              <span className="text-3xl">{b.icono}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{b.titulo}</h3>
              <p className="mt-2 text-sm text-neutral-400">{b.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
