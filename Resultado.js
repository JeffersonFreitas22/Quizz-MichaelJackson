    const score = localStorage.getItem('mjScore') ? parseInt(localStorage.getItem('mjScore')) : 0;
    const total = 10;
    const percentage = Math.round((score / total) * 100);

    document.getElementById('score').textContent = `${score}/${total} (${percentage}%)`;

    const messageEl = document.getElementById('message');
    if (percentage >= 90) {
      messageEl.innerHTML = "🎉 Parabéns! Você é um verdadeiro expert no Rei do Pop!";
    } else if (percentage >= 70) {
      messageEl.innerHTML = "👏 Muito bom! Você conhece bastante sobre Michael Jackson.";
    } else if (percentage >= 50) {
      messageEl.innerHTML = "🙂 Bom resultado! Continue ouvindo as músicas dele.";
    } else {
      messageEl.innerHTML = "😊 Dá pra melhorar... mas o importante é curtir o legado do Michael!";
    }

    function restartQuiz() {
      localStorage.removeItem('mjScore');
      window.location.href = "index.html";
    }