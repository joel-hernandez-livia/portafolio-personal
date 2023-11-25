const bars = document.querySelector('.bars');
const navbar = document.querySelector('.navbar');

bars.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const colapsarItems = document.querySelectorAll('.colapsar');
colapsarItems.forEach(item => {
  item.addEventListener('click', () => {
    navbar.classList.remove('active');
    console.log("Menú colapsado");
  });
});

const links = document.querySelectorAll('.navbar--menu a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');

    if (targetId.startsWith('#')) {
      e.preventDefault();

      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > document.querySelector('.hero').offsetHeight) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  // Agrega aquí la lógica de validación antes de enviar el formulario
  // e.preventDefault(); para evitar que el formulario se envíe automáticamente
});
