
  //Toggle_BAR
    const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav_links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });



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


  //Corrusel 
const cinta = document.querySelector('.testimonios-cinta');
  let index = 0;

  setInterval(() => {
    index = (index + 1) % 3; // Cicla de 0 a 2
    cinta.style.transform = `translateX(-${index * 100}%)`;
  }, 5000); // 5 segundos por testimonio 
