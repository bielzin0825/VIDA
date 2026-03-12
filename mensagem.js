const fotos = [
  { src: "fotos/foto1.img.jpeg", data: "07/03/2026"},
  { src: "fotos/foto2.img.jpeg", data: "07/03/2026" },
  { src: "fotos/foto3.img.jpeg", data: "07/03/2026" },
  { src: "fotos/foto4.img.jpeg", data: "07/03/2026" },
  { src: "fotos/foto5.img.jpeg", data: "07/03/2026" },
  { src: "fotos/foto6.img.jpeg", data: "07/03/2026" },
  { src: "fotos/foto7.img.jpeg", data: "" },
  { src: "fotos/foto8.img.jpeg", data: "22/02/2026" },
  { src: "fotos/foto9.img.jpeg", data: "22/02/2026" },
  { src: "fotos/foto10.img.jpeg", data: "22/02/2026" },
  { src: "fotos/foto11.img.jpeg", data: "22/02/2026" },
  { src: "fotos/foto12.img.jpeg", data: "" },
  { src: "fotos/foto13.img.jpeg", data: "" },
  
];

let indexAtual = 0;

const fotoEl = document.getElementById("foto");
const legendaEl = document.getElementById("legenda");
const btnProximo = document.getElementById("proximo");
const btnAnterior = document.getElementById("anterior");
const botaoVideo = document.getElementById("ver-video");

const somClique = new Audio("click.mp3");
const musica = document.getElementById("musica"); // <audio> com autoplay

function mostrarFoto(index) {
  indexAtual = (index + fotos.length) % fotos.length;

  fotoEl.classList.add("fade");
  legendaEl.classList.add("fade");

  setTimeout(() => {
    fotoEl.src = fotos[indexAtual].src;
    legendaEl.textContent = fotos[indexAtual].data;

    fotoEl.classList.remove("fade");
    legendaEl.classList.remove("fade");

    // Mostra botão do vídeo na última foto
    if (indexAtual === fotos.length - 1) {
      botaoVideo.style.display = "block";
    } else {
      botaoVideo.style.display = "none";
    }
  }, 200);
}

btnAnterior.addEventListener("click", () => {
  somClique.play();
  mostrarFoto(indexAtual - 1);
});

btnProximo.addEventListener("click", () => {
  somClique.play();
  mostrarFoto(indexAtual + 1);
}); 

// Inicia a galeria
mostrarFoto(indexAtual);

// Inicia música quando a página é clicada
document.body.addEventListener('click', () => {
  const musica = document.getElementById('musica');
  if (musica.paused) {
    musica.play().catch((e) => {
      console.log("Reprodução bloqueada pelo navegador:", e);
    });
  }
}, { once: true }); // só executa uma vez