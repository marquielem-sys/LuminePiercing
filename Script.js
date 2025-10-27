// Carrossel
let index = 0;
const imagens = document.querySelectorAll(".carrossel img");

function mudarImagem() {
  index++;
  if (index >= imagens.length) index = 0;
  document.querySelector(".carrossel").style.transform = `translateX(${-index * 100}%)`;
}
setInterval(mudarImagem, 4000);

// Fade-in animado ao rolar a página
const fadeElements = document.querySelectorAll('.fade-in');

function mostrarAoRolar() {
  fadeElements.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight - 100;
    if (posicao < alturaJanela) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', mostrarAoRolar);
window.addEventListener('load', mostrarAoRolar);
