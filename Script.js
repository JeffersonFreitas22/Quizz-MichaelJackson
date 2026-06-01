// script.js

let score = 0;
let answers = [];

// Carregar progresso
function loadProgress() {
    score = localStorage.getItem('mjScore') ? parseInt(localStorage.getItem('mjScore')) : 0;
    answers = JSON.parse(localStorage.getItem('mjAnswers')) || [];
}

// Responder pergunta
function responder(perguntaIndex, escolhaIndex, corretaIndex) {
    loadProgress();

    answers[perguntaIndex] = escolhaIndex;
    localStorage.setItem('mjAnswers', JSON.stringify(answers));

    if (escolhaIndex === corretaIndex) {
        score++;
        localStorage.setItem('mjScore', score);
    }

    const nextLink = document.getElementById('nextLink');
    if (nextLink) nextLink.style.display = 'inline-block';
}

// Mostrar revisão (usado em Confirmacao.html)
function mostrarRevisao() {
    const container = document.getElementById('review-list');
    if (!container) return;

    const questions = [
        "Qual é o apelido mais famoso de Michael Jackson?",
        "Em que ano nasceu Michael Jackson?",
        "Qual álbum é o mais vendido da história da música?",
        "Qual dança famosa Michael Jackson popularizou?",
        "Qual foi o primeiro grande sucesso solo de Michael Jackson?",
        "Quantos irmãos Michael Jackson tinha no Jackson 5?",
        "Em qual clipe Michael Jackson aparece como zumbi?",
        "Qual instrumento Michael Jackson tocava muito bem?",
        "Qual música tem o famoso solo de guitarra de Eddie Van Halen?",
        "Em que ano Michael Jackson faleceu?"
    ];

    const optionsList = [
        ["Rei do Pop", "Rei do Rock", "Rei da Soul", "Rei do Funk"],
        ["1956", "1958", "1960", "1963"],
        ["Bad", "Dangerous", "Thriller", "Off the Wall"],
        ["Moonwalk", "Robot", "Breakdance", "Twerk"],
        ["Billie Jean", "Don't Stop 'Til You Get Enough", "Rock With You", "Thriller"],
        ["4", "5", "6", "7"],
        ["Bad", "Beat It", "Thriller", "Smooth Criminal"],
        ["Bateria", "Guitarra", "Piano", "Saxofone"],
        ["Beat It", "Billie Jean", "Black or White", "Remember the Time"],
        ["2007", "2008", "2009", "2010"]
    ];

    const correctAnswers = [0, 1, 2, 0, 1, 1, 2, 2, 0, 2];

    container.innerHTML = '';

    questions.forEach((question, i) => {
        const userAnswerIndex = answers[i];
        const userAnswerText = userAnswerIndex !== undefined ? optionsList[i][userAnswerIndex] : "Não respondida";
        const isCorrect = userAnswerIndex === correctAnswers[i];

        const div = document.createElement('div');
        div.style.marginBottom = "25px";
        div.style.padding = "18px";
        div.style.borderRadius = "12px";
        div.style.background = isCorrect ? "#0a1a0a" : "#2a0a0a";

        div.innerHTML = `
            <strong>Pergunta ${i+1}:</strong><br>
            ${question}<br><br>
            <strong>Sua resposta:</strong> 
            <span style="color: ${isCorrect ? '#0f0' : '#f66'}">
                ${userAnswerText}
            </span>
        `;
        container.appendChild(div);
    });
}

// Reiniciar quiz
function restartQuiz() {
    localStorage.removeItem('mjScore');
    localStorage.removeItem('mjAnswers');
    window.location.href = "Index.html";
}