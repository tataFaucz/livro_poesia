const poems = [
    {
        title: "Chuva",
        text: `Acalentada pelos lampejos, a chuva vem quase todos os dias na maior cidade do estado. Seus pingos são frios, tais quais as pessoas que ousam serem hipócritas, fazendo exatamente o oposto do prometido ao seu jus.\nMuitas vezes vem acompanhada de sua velha amiga, a ventania. Aquela na qual destalha casas na mesma velocidade que eu me sinto perdida após ver que estou só.\nQuando apenas a garoa se faz presente, a sensação de alívio faz companhia. Alívio de ver ele entrendo em casa, vir me fazer um cafuné e dizer que está tudo bem.\nMas quando transformada em tempestade, a solidão me toma conta novamente. Do que adianta ser amigo de todos, se quando mais forte está o temporal, todos estão ausentes?.`
    },
    {
        title: "Nota 52",
        text: `Primeira coisa que faço ao entrar em qualquer lugar\nÉ verificar detalhadamente se você não está lá\n Pois se estiver, pode apostar\nAli eu não vou ficar 
\n
A coragem que habita em mim\nVira covardia ao te avistar\nMas o único covarde é você \nAquele que traiu a minha confiança quando chamei de "lar"
\n
Em qualquer canto que eu vá, tenho medo de te encontrar\nMe assusto só de imaginar \nPois quando a sua máscara caiu\nA única coisa que consegui fazer, foi perder o ar
\n
Eu não queria te atrapalhar \nPor mais magoada e violada que estivesse\nMas a verdade, é que faltou-lhe humanidade a mim como mulher\nAquela que deveria ser respeitada assim como outro qualquer
\n
Não quero vingança a você \nMesmo com tudo que me fez sofrer\nO que tantas mulheres passam\nPor estarem nas mãos de caras como você`
    },
    {
        title: "Oceanos ",
        text: `Nem os deuses mais astutos seriam capazes de imaginarem isso. Os oceanos entraram em conflito, no qual ambos querem se afastar, mas a força da água acaba sempre unindo eles. É uma força tão grande, que nem parece real.
Talvez eu esteja aumentando as coisas. Os oceanos de fato tiveram uma grave intriga, porém o Pacífico  conseguiu seguir a vida como se nada tivesse acontecido. Não é possível dizer o mesmo do Atlântico.
Este estava em constante perturbação, por conta das altas navegações que ocorriam nele. Navegações essas com nomes únicos, todas com missões autodepressiativas. E por mais que o Pacífico não tivesse mais suas águas presentes em meio às do Atlântico, o da "paz" estava sempre presente em seu interior. Desde a maresia mais calma, até a maré mais alta enfrentada em qualquer outro temporal.
Ah, e tinha os temporais. Aqueles em que você perde a noção de qualquer tipo de pancada que tenha passado por ti, pois a consequência da alta ventania e adrenalina é a perda da memória.
Mesmo o Atlântico evitando ao máximo, os temporais sempre voltam maiores, e as lembranças de temporais mais antigos vêm a tona; fazendo com que o atual temporal ser ainda mais pesado.

Talvez, o Pacífico seja de boa apenas pra si, não para outros oceanos..`
    }
];

let currentPoem = 0;

function displayPoem(index) {
    document.getElementById('poem-title').textContent = poems[index].title;
    document.getElementById('poem-text').textContent = poems[index].text;
}

document.getElementById('prev-btn').addEventListener('click', () => {
    currentPoem = (currentPoem - 1 + poems.length) % poems.length;
    displayPoem(currentPoem);
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentPoem = (currentPoem + 1) % poems.length;
    displayPoem(currentPoem);
});

displayPoem(currentPoem);

// Menu lateral
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.getElementById('overlay');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
    overlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
});

// Controle das abas
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
        sideMenu.classList.remove('open');
        overlay.classList.remove('active');
    });
});
