import Image from "next/image";
import { imagenes } from "@/data/imagenes";
import { totalSedes } from "@/data/sedes";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <Image
        src={imagenes.hero}
        alt="Persona entrenando con barra de pesas en el gimnasio"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <p className="mb-4 inline-block rounded-full border border-lime-400/40 bg-lime-400/10 px-4 py-1 text-sm font-semibold text-lime-400">
          +{totalSedes} sedes en Venezuela, Colombia y Panamá
        </p>
        <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          Entrena sin límites, <span className="text-lime-400">en cualquier sede</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-neutral-300">
          Una sola suscripción, acceso a todas nuestras sedes. Equipos de última
          generación, clases grupales y entrenadores certificados por solo{" "}
          <span className="font-bold text-white">US$99.99 al mes</span>.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#suscribirse"
            className="rounded-full bg-lime-400 px-8 py-4 text-base font-bold text-neutral-950 transition hover:bg-lime-300"
          >
            Suscribirme ahora
          </a>
          <a
            href="#sedes"
            className="rounded-full border border-white/30 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10"
          >
            Ver sedes cercanas
          </a>
        </div>
      </div>
    </section>
  );
}
