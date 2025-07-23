let score1 = parseFloat(localStorage.getItem("score1")) || 0;
let score2 = parseFloat(localStorage.getItem("score2")) || 0;

function updateScoreDisplay() {
  document.getElementById("score1").textContent = score1.toFixed(2);
  document.getElementById("score2").textContent = score2.toFixed(2);
}

function saveScores() {
  localStorage.setItem("score1", score1);
  localStorage.setItem("score2", score2);
}

function changeScore(direction, player = 1) {
  const inputId = player === 1 ? "input1" : "input2";
  const value = parseFloat(document.getElementById(inputId).value);

  if (!isNaN(value)) {
    if (player === 1) {
      score1 += direction * value;
    } else {
      score2 += direction * value;
    }
    saveScores();
    updateScoreDisplay();
  }
}

function resetScore(player) {
  if (player === 1) {
    score1 = 0;
  } else {
    score2 = 0;
  }
  saveScores();
  updateScoreDisplay();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    score1 += 0.5;
    saveScores();
    updateScoreDisplay();
  } else if (event.key === "ArrowDown") {
    score1 -= 0.5;
    saveScores();
    updateScoreDisplay();
  }
});

updateScoreDisplay();
