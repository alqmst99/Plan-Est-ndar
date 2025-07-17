/*VALIDATION MAIL*/
document.getElementById("form-contacto").addEventListener("submit", function(e) {
  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Todos los campos son obligatorios.");
    e.preventDefault();
  } else if (!email.includes("@")) {
    alert("El correo no es válido.");
    e.preventDefault();
  }
});

//Animation About section
  window.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('.about_image');
    setTimeout(() => {
      aboutSection.classList.add('visible');
    }, 0); // retardo para más elegancia
  });