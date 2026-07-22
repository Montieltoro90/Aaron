import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Sedes } from "@/components/landing/Sedes";
import { Beneficios } from "@/components/landing/Beneficios";
import { Galeria } from "@/components/landing/Galeria";
import { Planes } from "@/components/landing/Planes";
import { FormularioSuscripcion } from "@/components/landing/FormularioSuscripcion";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sedes />
        <Beneficios />
        <Galeria />
        <Planes />
        <section id="suscribirse" className="bg-neutral-950 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Empieza tu suscripción hoy
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-neutral-400">
                Completa el formulario y un asesor te contactará para activar
                tu membresía en la sede de tu preferencia.
              </p>
            </div>
            <FormularioSuscripcion />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
