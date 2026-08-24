/* =====================================================================
   Este archivo solo controla el menú de navegación en pantallas
   pequeñas (mostrar / ocultar al tocar el botón hamburguesa).
   No necesitas tocar nada aquí para editar textos o estilos.
   ===================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Cierra el menú automáticamente al elegir una opción (en móvil)
  nav.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
