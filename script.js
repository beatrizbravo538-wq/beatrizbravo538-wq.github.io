// Script básico para interacción
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portafolio cargado correctamente");

  // Pequeña animación al hacer hover en los tags
  const tags = document.querySelectorAll(".tag");
  tags.forEach(tag => {
    tag.addEventListener("mouseover", () => {
      tag.style.transform = "scale(1.1)";
      tag.style.transition = "0.3s";
    });
    tag.addEventListener("mouseout", () => {
      tag.style.transform = "scale(1)";
    });
  });
});
