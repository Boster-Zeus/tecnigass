// Menú móvil
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

// Animaciones al hacer scroll
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((element) => observer.observe(element));

// Preguntas frecuentes
const faqButtons = document.querySelectorAll('.faq-list button');
faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle('open');
  });
});

// Cotizador conectado a WhatsApp
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const service = document.getElementById('service').value;
    const location = document.getElementById('location').value;
    const property = document.getElementById('property').value;

    const message = `Hola, quiero solicitar una cotización con Tecnigas.%0A%0AServicio: ${encodeURIComponent(service)}%0ALocalidad/Barrio: ${encodeURIComponent(location)}%0ATipo de inmueble: ${encodeURIComponent(property)}`;
    window.open(`https://wa.me/573157471227?text=${message}`, '_blank');
  });
}
