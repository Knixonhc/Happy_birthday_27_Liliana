const photos = [
  {
    src: "assets/photos/web/photo-01.jpg",
    alt: "Liliana y yo en uno de nuestros recuerdos favoritos",
    fallback: "Tu foto favorita",
  },
  {
    src: "assets/photos/web/photo-02.jpg",
    alt: "Un momento bonito juntos",
    fallback: "Una risa de los dos",
  },
  {
    src: "assets/photos/web/photo-03.jpg",
    alt: "Un día especial de nuestra relación",
    fallback: "Un día inolvidable",
  },
  {
    src: "assets/photos/web/photo-04.jpg",
    alt: "Nosotros compartiendo un recuerdo feliz",
    fallback: "Nosotros",
  },
  {
    src: "assets/photos/web/photo-05.jpg",
    alt: "Liliana sonriendo",
    fallback: "Tu sonrisa",
  },
  {
    src: "assets/photos/web/photo-06.jpg",
    alt: "Otra foto de nuestra historia",
    fallback: "Otro capitulo",
  },
  {
    src: "assets/photos/web/photo-07.jpg",
    alt: "Un recuerdo tierno de pareja",
    fallback: "Un abrazo",
  },
  {
    src: "assets/photos/web/photo-08.jpg",
    alt: "Una aventura juntos",
    fallback: "Una aventura",
  },
  {
    src: "assets/photos/web/photo-09.jpg",
    alt: "Liliana y yo celebrando la vida",
    fallback: "La vida contigo",
  },
  {
    src: "assets/photos/web/photo-10.jpg",
    alt: "Un recuerdo más de nuestra relación",
    fallback: "Mi lugar feliz",
  },
  {
    src: "assets/photos/web/photo-11.jpg",
    alt: "Nosotros en un momento especial",
    fallback: "Momento especial",
  },
  {
    src: "assets/photos/web/photo-12.jpg",
    alt: "Una foto para guardar siempre",
    fallback: "Para siempre",
  },
  {
    src: "assets/photos/web/photo-13.jpg",
    alt: "Otra etapa bonita juntos",
    fallback: "Nuestra historia",
  },
  {
    src: "assets/photos/web/photo-14.jpg",
    alt: "Un recuerdo de amor y alegría",
    fallback: "Amor y alegría",
  },
  {
    src: "assets/photos/web/photo-15.jpg",
    alt: "Kenji y Liliana compartiendo un momento especial",
    fallback: "Siempre nosotros",
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
