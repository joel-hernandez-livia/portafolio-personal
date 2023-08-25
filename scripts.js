const bars = document.querySelector('.bars');
const navbar = document.querySelector('.navbar');

bars.addEventListener('click',()=>{navbar.classList.toggle('active')})

const colapsarItems = document.querySelectorAll('.colapsar');
colapsarItems.forEach(item => {
  item.addEventListener('click', () => {
    navbar.classList.remove('active');
    console.log("Menú colapsado");
  });
});
