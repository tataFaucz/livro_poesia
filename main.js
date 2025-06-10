const poems = [
    {
        title: "Amanhecer",
        text: `O sol desperta no horizonte,\nTrazendo luz ao coração.\nVersos suaves, brisa constante,\nPoesia em cada estação.`
    },
    {
        title: "Noite Estrelada",
        text: `No silêncio da noite calma,\nEstrelas dançam no céu.\nA alma encontra a palma,\nDo universo em seu véu.`
    },
    {
        title: "Esperança",
        text: `Mesmo em dias de tempestade,\nFloresce a esperança no olhar.\nA poesia é liberdade,\nÉ sonho a se realizar.`
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

// Inicializa com o primeiro poema
displayPoem(currentPoem);

// Controle das abas
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active de todos
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        // Adiciona active ao selecionado
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});