import Image from "next/image";
import { imagenes } from "@/data/imagenes";

const incluye = [
  "Acceso a las +30 sedes en Venezuela, Colombia y Panamá",
  "Clases grupales ilimitadas",
  "Acompañamiento de entrenadores certificados",
  "Acceso a app de reservas y seguimiento",
  "Sin permanencia mínima, cancela cuando quieras",
];

export function Planes() {
  return (
    <section id="planes" className="bg-neutral-900 px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 hidden aspect-[4/5] overflow-hidden rounded-3xl lg:order-1 lg:block">
          <Image
            src={imagenes.planCard}
            alt="Persona levantando una mancuerna en el gimnasio"
            fill
            sizes="(max-width: 1024px) 0px, 40vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Un solo plan, todo incluido
          </h2>
          <p className="mt-3 text-neutral-400">
            Sin letra pequeña. Un precio único que te da acceso completo a
            todas nuestras sedes.
          </p>

          <div className="mt-8 rounded-3xl border border-lime-400/40 bg-neutral-950 p-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-white">$99.99</span>
              <span className="text-neutral-400">/ mes</span>
            </div>
            <p className="mt-1 text-sm text-neutral-500">Facturado mensualmente en USD</p>

            <ul className="mt-6 space-y-3">
              {incluye.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                  <span className="mt-0.5 text-lime-400">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#suscribirse"
              className="mt-8 block rounded-full bg-lime-400 py-4 text-center text-base font-bold text-neutral-950 transition hover:bg-lime-300"
            >
              Quiero suscribirme
            </a>

            <p className="mt-4 text-center text-xs text-neutral-500">
              ¿Prefieres pagar por trimestre o por año? Pregunta por nuestros
              descuentos por compromiso al momento de suscribirte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
