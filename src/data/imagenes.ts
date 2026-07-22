// Fotos reales de personas entrenando, alojadas en Unsplash.
// Si alguna URL cambia o deja de existir, basta con reemplazar el valor aquí.
function unsplash(id: string, w = 1200) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const imagenes = {
  hero: unsplash("1571019613454-1cb2f99b2d8b", 1600),
  galeria: [
    { src: unsplash("1517836357463-d25dfeac3438"), alt: "Rack de mancuernas en el gimnasio" },
    { src: unsplash("1534438327276-14e5300c3a48"), alt: "Hombre entrenando con pesas" },
    { src: unsplash("1583454110551-21f2fa2afe61"), alt: "Mujer estirando en el gimnasio" },
    { src: unsplash("1571731956672-f2b94d7dd0cb"), alt: "Entrenamiento funcional con cuerdas" },
    { src: unsplash("1550345332-09e3ac987658"), alt: "Zona de pesas del gimnasio" },
    { src: unsplash("1526506118085-60ce8714f8c5"), alt: "Entrenamiento con kettlebell" },
  ],
  planCard: unsplash("1518611012118-696072aa579a", 800),
};
