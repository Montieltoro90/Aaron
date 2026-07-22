import Image from "next/image";
import { imagenes } from "@/data/imagenes";

export function Galeria() {
  return (
    <section id="galeria" className="bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Así se entrena en Aaron Fitness
          </h2>
          <p className="mt-3 text-neutral-400">
            Personas reales, entrenando todos los días en nuestras sedes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {imagenes.galeria.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
