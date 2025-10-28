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
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

window.addEventListener("scroll", mostrarAoRolar);
window.addEventListener("load", mostrarAoRolar);
