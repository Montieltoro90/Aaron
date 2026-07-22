export type Pais = "Venezuela" | "Colombia" | "Panamá";

export interface Sede {
  id: number;
  nombre: string;
  pais: Pais;
  estado: string;
  ciudad: string;
  direccion: string;
}

export const sedes: Sede[] = [
  // Venezuela
  { id: 1, nombre: "Aaron Fitness Caracas Centro", pais: "Venezuela", estado: "Distrito Capital", ciudad: "Caracas", direccion: "Av. Francisco de Miranda, Chacao" },
  { id: 2, nombre: "Aaron Fitness Las Mercedes", pais: "Venezuela", estado: "Miranda", ciudad: "Baruta", direccion: "Calle Madrid, Las Mercedes" },
  { id: 3, nombre: "Aaron Fitness Maracaibo", pais: "Venezuela", estado: "Zulia", ciudad: "Maracaibo", direccion: "Av. 15 Delicias" },
  { id: 4, nombre: "Aaron Fitness Valencia", pais: "Venezuela", estado: "Carabobo", ciudad: "Valencia", direccion: "Av. Bolívar Norte" },
  { id: 5, nombre: "Aaron Fitness Barquisimeto", pais: "Venezuela", estado: "Lara", ciudad: "Barquisimeto", direccion: "Av. Libertador" },
  { id: 6, nombre: "Aaron Fitness Maracay", pais: "Venezuela", estado: "Aragua", ciudad: "Maracay", direccion: "Av. Las Delicias" },
  { id: 7, nombre: "Aaron Fitness Puerto La Cruz", pais: "Venezuela", estado: "Anzoátegui", ciudad: "Puerto La Cruz", direccion: "Paseo Colón" },
  { id: 8, nombre: "Aaron Fitness Ciudad Guayana", pais: "Venezuela", estado: "Bolívar", ciudad: "Ciudad Guayana", direccion: "Av. Guayana, Alta Vista" },
  { id: 9, nombre: "Aaron Fitness San Cristóbal", pais: "Venezuela", estado: "Táchira", ciudad: "San Cristóbal", direccion: "Av. Ferrero Tamayo" },
  { id: 10, nombre: "Aaron Fitness Porlamar", pais: "Venezuela", estado: "Nueva Esparta", ciudad: "Porlamar", direccion: "Av. Bolívar" },
  { id: 11, nombre: "Aaron Fitness Coro", pais: "Venezuela", estado: "Falcón", ciudad: "Coro", direccion: "Av. Manaure" },
  { id: 12, nombre: "Aaron Fitness Maturín", pais: "Venezuela", estado: "Monagas", ciudad: "Maturín", direccion: "Av. Bicentenaria" },
  { id: 13, nombre: "Aaron Fitness Cumaná", pais: "Venezuela", estado: "Sucre", ciudad: "Cumaná", direccion: "Av. Universidad" },

  // Colombia
  { id: 14, nombre: "Aaron Fitness Bogotá Norte", pais: "Colombia", estado: "Bogotá D.C.", ciudad: "Bogotá", direccion: "Calle 116 con Carrera 15" },
  { id: 15, nombre: "Aaron Fitness Bogotá Chapinero", pais: "Colombia", estado: "Bogotá D.C.", ciudad: "Bogotá", direccion: "Carrera 13, Chapinero" },
  { id: 16, nombre: "Aaron Fitness Medellín", pais: "Colombia", estado: "Antioquia", ciudad: "Medellín", direccion: "Av. El Poblado" },
  { id: 17, nombre: "Aaron Fitness Cali", pais: "Colombia", estado: "Valle del Cauca", ciudad: "Cali", direccion: "Av. 6N, Granada" },
  { id: 18, nombre: "Aaron Fitness Barranquilla", pais: "Colombia", estado: "Atlántico", ciudad: "Barranquilla", direccion: "Carrera 53, El Prado" },
  { id: 19, nombre: "Aaron Fitness Cartagena", pais: "Colombia", estado: "Bolívar", ciudad: "Cartagena", direccion: "Av. San Martín, Bocagrande" },
  { id: 20, nombre: "Aaron Fitness Bucaramanga", pais: "Colombia", estado: "Santander", ciudad: "Bucaramanga", direccion: "Carrera 33, Cabecera" },
  { id: 21, nombre: "Aaron Fitness Pereira", pais: "Colombia", estado: "Risaralda", ciudad: "Pereira", direccion: "Av. Circunvalar" },
  { id: 22, nombre: "Aaron Fitness Cúcuta", pais: "Colombia", estado: "Norte de Santander", ciudad: "Cúcuta", direccion: "Av. 0, Quinta Bolívar" },
  { id: 23, nombre: "Aaron Fitness Ibagué", pais: "Colombia", estado: "Tolima", ciudad: "Ibagué", direccion: "Carrera 5, Centro" },
  { id: 24, nombre: "Aaron Fitness Neiva", pais: "Colombia", estado: "Huila", ciudad: "Neiva", direccion: "Calle 10, Centro" },
  { id: 25, nombre: "Aaron Fitness Santa Marta", pais: "Colombia", estado: "Magdalena", ciudad: "Santa Marta", direccion: "Carrera 4, Rodadero" },
  { id: 26, nombre: "Aaron Fitness Pasto", pais: "Colombia", estado: "Nariño", ciudad: "Pasto", direccion: "Av. Panamericana" },

  // Panamá
  { id: 27, nombre: "Aaron Fitness Panamá Costa del Este", pais: "Panamá", estado: "Panamá", ciudad: "Ciudad de Panamá", direccion: "Costa del Este, Calle Principal" },
  { id: 28, nombre: "Aaron Fitness Panamá Vía España", pais: "Panamá", estado: "Panamá", ciudad: "Ciudad de Panamá", direccion: "Vía España, El Cangrejo" },
  { id: 29, nombre: "Aaron Fitness La Chorrera", pais: "Panamá", estado: "Panamá Oeste", ciudad: "La Chorrera", direccion: "Av. Central" },
  { id: 30, nombre: "Aaron Fitness Colón", pais: "Panamá", estado: "Colón", ciudad: "Colón", direccion: "Calle 8, Centro" },
  { id: 31, nombre: "Aaron Fitness David", pais: "Panamá", estado: "Chiriquí", ciudad: "David", direccion: "Av. Obaldía" },
  { id: 32, nombre: "Aaron Fitness Santiago", pais: "Panamá", estado: "Veraguas", ciudad: "Santiago", direccion: "Av. Central" },
  { id: 33, nombre: "Aaron Fitness Chitré", pais: "Panamá", estado: "Herrera", ciudad: "Chitré", direccion: "Av. Herrera" },
];

export const paises: Pais[] = ["Venezuela", "Colombia", "Panamá"];

export const totalSedes = sedes.length;
