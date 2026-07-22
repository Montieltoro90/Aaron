export type EstadoSuscripcion = "Activo" | "Pendiente" | "Vencido" | "Cancelado";
export type Plan = "Mensual" | "Trimestral" | "Anual";

export interface Usuario {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  sede: string;
  pais: string;
  plan: Plan;
  estado: EstadoSuscripcion;
  fechaRegistro: string;
  proximoCobro: string;
  montoMensual: number;
}

const nombres = [
  "María González", "Carlos Rodríguez", "Ana Martínez", "Luis Hernández", "Camila López",
  "José Pérez", "Valentina Sánchez", "Andrés Ramírez", "Isabella Torres", "Miguel Díaz",
  "Daniela Flores", "Juan Morales", "Sofía Castro", "Diego Ortiz", "Gabriela Rojas",
  "Ricardo Vargas", "Paula Gómez", "Fernando Silva", "Laura Jiménez", "Alejandro Reyes",
  "Mariana Cruz", "Sebastián Mendoza", "Victoria Aguilar", "Rafael Guerrero", "Natalia Medina",
  "Emilio Vega", "Carolina Herrera", "Tomás Navarro", "Fernanda Ruiz", "Adrián Delgado",
];

const dominios = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com"];
const sedesRef = [
  { nombre: "Aaron Fitness Caracas Centro", pais: "Venezuela" },
  { nombre: "Aaron Fitness Maracaibo", pais: "Venezuela" },
  { nombre: "Aaron Fitness Valencia", pais: "Venezuela" },
  { nombre: "Aaron Fitness Bogotá Norte", pais: "Colombia" },
  { nombre: "Aaron Fitness Medellín", pais: "Colombia" },
  { nombre: "Aaron Fitness Cali", pais: "Colombia" },
  { nombre: "Aaron Fitness Panamá Costa del Este", pais: "Panamá" },
  { nombre: "Aaron Fitness David", pais: "Panamá" },
  { nombre: "Aaron Fitness Cartagena", pais: "Colombia" },
  { nombre: "Aaron Fitness Barquisimeto", pais: "Venezuela" },
];

const planes: Plan[] = ["Mensual", "Trimestral", "Anual"];
const estados: EstadoSuscripcion[] = ["Activo", "Activo", "Activo", "Pendiente", "Vencido", "Cancelado"];

function seedRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

const rand = seedRandom(42);

function montoPorPlan(plan: Plan): number {
  if (plan === "Mensual") return 99.99;
  if (plan === "Trimestral") return 89.99;
  return 79.99;
}

export const usuarios: Usuario[] = Array.from({ length: 30 }, (_, i) => {
  const nombre = nombres[i % nombres.length];
  const sede = sedesRef[i % sedesRef.length];
  const plan = planes[Math.floor(rand() * planes.length)];
  const estado = estados[Math.floor(rand() * estados.length)];
  const diaRegistro = 1 + Math.floor(rand() * 27);
  const mesRegistro = 1 + Math.floor(rand() * 6);

  return {
    id: i + 1,
    nombre,
    email: `${nombre.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, ".")}@${dominios[i % dominios.length]}`,
    telefono: `+58 4${(12 + (i % 4))}-${(1000000 + i * 37).toString().slice(0, 7)}`,
    sede: sede.nombre,
    pais: sede.pais,
    plan,
    estado,
    fechaRegistro: `2026-0${mesRegistro}-${diaRegistro.toString().padStart(2, "0")}`,
    proximoCobro: `2026-07-${(15 + (i % 13)).toString().padStart(2, "0")}`,
    montoMensual: montoPorPlan(plan),
  };
});

export const resumenUsuarios = {
  total: usuarios.length,
  activos: usuarios.filter((u) => u.estado === "Activo").length,
  pendientes: usuarios.filter((u) => u.estado === "Pendiente").length,
  vencidos: usuarios.filter((u) => u.estado === "Vencido").length,
  cancelados: usuarios.filter((u) => u.estado === "Cancelado").length,
  ingresoMensual: usuarios
    .filter((u) => u.estado === "Activo")
    .reduce((acc, u) => acc + u.montoMensual, 0),
};
