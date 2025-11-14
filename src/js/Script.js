// Carrossel
let index = 0;
const imagens = document.querySelectorAll(".carrossel img");

function mudarImagem() {
  index++;
  if (index >= imagens.length) index = 0;
  document.querySelector(".carrossel").style.transform = `translateX(${
    -index * 100
  }%)`;
}
setInterval(mudarImagem, 4000);

// Fade-in animado ao rolar a página
const fadeElements = document.querySelectorAll(".fade-in");

function mostrarAoRolar() {
  fadeElements.forEach((el) => {
    const posicao = el.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight - 100;
    if (posicao < alturaJanela) {
      el.classList.add("show");
    }
  });
}


// Menu Hamburguer
const mobileBtn = document.querySelector('.btn-mobile');
const navMenu = document.getElementById('nav-menu');
const icon = document.querySelector('.btn-mobile i');

// Evento para abrir o menu
mobileBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll("#nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// Fecha o menu se aumentar a tela
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("show");
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  }
});

window.addEventListener("scroll", mostrarAoRolar);
window.addEventListener("load", mostrarAoRolar);
