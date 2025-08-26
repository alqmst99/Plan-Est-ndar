//Toggle_BAR
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav_links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/*VALIDATION MAIL*/
document
  .getElementById("form-contacto")
  .addEventListener("submit", function (e) {
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
window.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about_image");
  setTimeout(() => {
    aboutSection.classList.add("visible");
  }, 0); // retardo para más elegancia
});

//Corrusel
const cinta = document.querySelector(".testimonios-cinta");
let index = 0;

setInterval(() => {
  index = (index + 1) % 3; // Cicla de 0 a 2
  cinta.style.transform = `translateX(-${index * 100}%)`;
}, 5000); // 5 segundos por testimonio

//TOOLTIP'S

//con esta funcion donde sea que coloquemos el atributo [data-guia] 
// aparecera el una burbuja de dialogo explicando o mencionando el texto que este en [data-guia].
document.addEventListener("DOMContentLoaded", function () {
  const toolTip = document.createElement("div");
  toolTip.className = "guia-tooltip";
  document.body.appendChild(toolTip);

  document.querySelectorAll("[data-guia]").forEach((section) => {
    section.addEventListener("mouseenter", function (e) {
      toolTip.textContent = section.getAttribute("data-guia");
      toolTip.classList.add("visible");
      //tomamos las medidas de la seccion como si fueran el perimetro
      const rect = section.getBoundingClientRect();
      //calculamos a partir de las medidas rectangulares la posicion de la burbuja de dialogo
      toolTip.style.top =
        window.screenY + rect.top - toolTip.offsetHeight + 50 + "px";
      toolTip.style.left =
        rect.left + rect.width / 2 - toolTip.offsetWidth / 2 + "px";
    });
    section.addEventListener("mouseleave", function () {
      toolTip.classList.remove("visible");
    });
  });
});

//Warning modal

function mostrarDemoWarning() {
  const modal = document.getElementById('demoModal');
  if (modal) modal.style.display = 'flex';
}

document.getElementById('closeDemoModal').onclick = function() {
  document.getElementById('demoModal').style.display = 'none';
};

// Ejemplo: Asocia la función al botón con id "demoBtn"
document.getElementById('demoBtn')?.addEventListener('click', mostrarDemoWarning);