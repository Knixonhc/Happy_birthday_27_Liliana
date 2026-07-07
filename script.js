const photos = [
  {
    src: "assets/photos/foto-01.jpg",
    alt: "Liliana y yo en uno de nuestros recuerdos favoritos",
    fallback: "Tu foto favorita",
  },
  {
    src: "assets/photos/foto-02.jpg",
    alt: "Un momento bonito juntos",
    fallback: "Una risa de los dos",
  },
  {
    src: "assets/photos/foto-03.jpg",
    alt: "Un dia especial de nuestra relacion",
    fallback: "Un dia inolvidable",
  },
  {
    src: "assets/photos/foto-04.jpg",
    alt: "Nosotros compartiendo un recuerdo feliz",
    fallback: "Nosotros",
  },
  {
    src: "assets/photos/foto-05.jpg",
    alt: "Liliana sonriendo",
    fallback: "Tu sonrisa",
  },
  {
    src: "assets/photos/foto-06.jpg",
    alt: "Otra foto de nuestra historia",
    fallback: "Otro capitulo",
  },
  {
    src: "assets/photos/foto-07.jpg",
    alt: "Un recuerdo tierno de pareja",
    fallback: "Un abrazo",
  },
  {
    src: "assets/photos/foto-08.jpg",
    alt: "Una aventura juntos",
    fallback: "Una aventura",
  },
  {
    src: "assets/photos/foto-09.jpg",
    alt: "Liliana y yo celebrando la vida",
    fallback: "La vida contigo",
  },
  {
    src: "assets/photos/foto-10.jpg",
    alt: "Un recuerdo mas de nuestra relacion",
    fallback: "Mi lugar feliz",
  },
  {
    src: "assets/photos/foto-11.jpg",
    alt: "Nosotros en un momento especial",
    fallback: "Momento especial",
  },
  {
    src: "assets/photos/foto-12.jpg",
    alt: "Una foto para guardar siempre",
    fallback: "Para siempre",
  },
];

const gallery = document.querySelector("#photoGallery");
const tilts = ["-2deg", "1deg", "2.5deg", "-1deg", "1.5deg", "-2.4deg"];

photos.forEach((photo, index) => {
  const card = document.createElement("figure");
  card.className = "photo-card";
  card.style.setProperty("--tilt", tilts[index % tilts.length]);

  const img = document.createElement("img");
  img.src = photo.src;
  img.alt = photo.alt;
  img.loading = "lazy";

  const placeholder = document.createElement("div");
  placeholder.className = "photo-placeholder";
  placeholder.textContent = photo.fallback;

  img.addEventListener("error", () => {
    img.remove();
    card.appendChild(placeholder);
  });

  card.appendChild(img);
  gallery.appendChild(card);
});
