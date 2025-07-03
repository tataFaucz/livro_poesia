const poems = [
  {
    title: "Chuva",
    text: `Acalentada pelos lampejos, a chuva vem quase todos os dias na maior cidade do estado.
Seus pingos são frios, tais quais as pessoas que ousam serem hipócritas, fazendo exatamente o oposto do prometido ao seu jus.
Muitas vezes vem acompanhada de sua velha amiga, a ventania...
Quando apenas a garoa se faz presente, a sensação de alívio faz companhia...
Mas quando transformada em tempestade, a solidão me toma conta novamente...`
  },
  {
    title: "Nota 52",
    text: `Primeira coisa que faço ao entrar em qualquer lugar
É verificar detalhadamente se você não está lá...
Em qualquer canto que eu vá, tenho medo de te encontrar...
Mas a verdade, é que faltou-lhe humanidade a mim como mulher...`
  },
  {
    title: "Oceanos",
    text: `Nem os deuses mais astutos seriam capazes de imaginarem isso...
Talvez eu esteja aumentando as coisas...
Ah, e tinha os temporais...
Talvez, o Pacífico seja de boa apenas pra si, não para outros oceanos...`
  }
];

let currentPoem = 0;

function createPoemMarkup(poem) {
  return poem.text.split('\n').map(line => `<p>${line.trim()}</p>`).join('');
}

function displayPoem(index) {
  const poem = poems[index];
  document.getElementById("poem-title").textContent = poem.title;
  document.getElementById("poem-text").innerHTML = createPoemMarkup(poem);
}

document.getElementById("prev-btn").addEventListener("click", () => {
  currentPoem = (currentPoem - 1 + poems.length) % poems.length;
  displayPoem(currentPoem);
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentPoem = (currentPoem + 1) % poems.length;
  displayPoem(currentPoem);
});

const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("open");
  overlay.classList.remove("active");
});

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");
  });
});

displayPoem(currentPoem);
