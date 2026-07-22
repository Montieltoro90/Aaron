"use client";

import { useMemo, useState, type FormEvent } from "react";
import { paises, sedes, type Pais } from "@/data/sedes";

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  pais: Pais | "";
  sede: string;
  plan: "Mensual" | "Trimestral" | "Anual";
  aceptaTerminos: boolean;
}

const estadoInicial: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  pais: "",
  sede: "",
  plan: "Mensual",
  aceptaTerminos: false,
};

export function FormularioSuscripcion() {
  const [form, setForm] = useState<FormState>(estadoInicial);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const sedesDisponibles = useMemo(
    () => (form.pais ? sedes.filter((s) => s.pais === form.pais) : []),
    [form.pais],
  );

  function actualizar<K extends keyof FormState>(campo: K, valor: FormState[K]) {
    setForm((prev) => ({ ...prev, [campo]: valor }));
  }

  function manejarEnvio(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.nombre || !form.email || !form.telefono || !form.pais || !form.sede) {
      setError("Por favor completa todos los campos obligatorios.");
      return;
    }
    if (!form.aceptaTerminos) {
      setError("Debes aceptar los términos y condiciones para continuar.");
      return;
    }

    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="mx-auto max-w-lg rounded-3xl border border-lime-400/40 bg-neutral-900 p-10 text-center">
        <span className="text-4xl">🎉</span>
        <h3 className="mt-4 text-2xl font-bold text-white">¡Solicitud recibida!</h3>
        <p className="mt-2 text-neutral-400">
          Gracias {form.nombre}, un asesor de Aaron Fitness se pondrá en
          contacto contigo al {form.telefono} para activar tu suscripción en{" "}
          {form.sede || "la sede seleccionada"}.
        </p>
        <button
          onClick={() => {
            setForm(estadoInicial);
            setEnviado(false);
          }}
          className="mt-6 rounded-full border border-white/20 px-6 py-2 text-sm font-semibold text-white hover:bg-white/10"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={manejarEnvio}
      className="mx-auto max-w-lg space-y-5 rounded-3xl border border-white/10 bg-neutral-900 p-8"
    >
      <div>
        <label className="mb-1 block text-sm font-semibold text-neutral-300">
          Nombre completo *
        </label>
        <input
          type="text"
          required
          value={form.nombre}
          onChange={(e) => actualizar("nombre", e.target.value)}
          placeholder="Ej. María González"
          className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:border-lime-400"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-neutral-300">
            Correo electrónico *
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => actualizar("email", e.target.value)}
            placeholder="tucorreo@email.com"
            className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:border-lime-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-neutral-300">
            Teléfono *
          </label>
          <input
            type="tel"
            required
            value={form.telefono}
            onChange={(e) => actualizar("telefono", e.target.value)}
            placeholder="+58 412 1234567"
            className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-white placeholder-neutral-500 outline-none focus:border-lime-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-neutral-300">País *</label>
          <select
            required
            value={form.pais}
            onChange={(e) => {
              actualizar("pais", e.target.value as Pais);
              actualizar("sede", "");
            }}
            className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none focus:border-lime-400"
          >
            <option value="">Selecciona un país</option>
            {paises.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-neutral-300">
            Sede más cercana *
          </label>
          <select
            required
            disabled={!form.pais}
            value={form.sede}
            onChange={(e) => actualizar("sede", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-white outline-none focus:border-lime-400 disabled:opacity-40"
          >
            <option value="">
              {form.pais ? "Selecciona una sede" : "Elige un país primero"}
            </option>
            {sedesDisponibles.map((s) => (
              <option key={s.id} value={s.nombre}>
                {s.ciudad} — {s.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-neutral-300">
          Plan de suscripción
        </label>
        <div className="grid grid-cols-3 gap-3">
          {(["Mensual", "Trimestral", "Anual"] as const).map((p) => (
            <button
              type="button"
              key={p}
              onClick={() => actualizar("plan", p)}
              className={`rounded-xl border px-3 py-3 text-sm font-semibold transition ${
                form.plan === p
                  ? "border-lime-400 bg-lime-400/10 text-lime-400"
                  : "border-white/10 text-neutral-400 hover:border-white/30"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-neutral-500">
          Plan mensual: US$99.99/mes. Trimestral y anual incluyen descuento por
          compromiso.
        </p>
      </div>

      <label className="flex items-start gap-3 text-sm text-neutral-400">
        <input
          type="checkbox"
          checked={form.aceptaTerminos}
          onChange={(e) => actualizar("aceptaTerminos", e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-neutral-950 accent-lime-400"
        />
        Acepto los términos y condiciones y el tratamiento de mis datos
        personales.
      </label>

      {error && <p className="text-sm font-medium text-red-400">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-full bg-lime-400 py-4 text-base font-bold text-neutral-950 transition hover:bg-lime-300"
      >
        Confirmar suscripción
      </button>
    </form>
  );
}
