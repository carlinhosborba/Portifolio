document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("submitGuess")) {
      const secretCode = generateCode();
      let attempts = [];
  
      document.getElementById("submitGuess").addEventListener("click", () => {
        const guess = document.getElementById("guess").value;
        if (!/^\d{4}$/.test(guess)) {
          alert("Digite um código válido com 4 dígitos.");
          return;
        }
        const result = checkGuess(guess, secretCode);
        attempts.unshift(`Palpite: ${guess} - Resultado: ${result}`);
        updateAttempts();
        document.getElementById("guess").value = "";
      });
  
      document.getElementById("revealCode").addEventListener("click", () => {
        alert(`O código secreto é: ${secretCode}`);
      });
  
      function generateCode() {
        return String(Math.floor(1000 + Math.random() * 9000));
      }
  
      function checkGuess(guess, code) {
        let bulls = 0;
        let cows = 0;
        for (let i = 0; i < 4; i++) {
          if (guess[i] === code[i]) {
            bulls++;
          } else if (code.includes(guess[i])) {
            cows++;
          }
        }
        return `${bulls} Bulls, ${cows} Cows`;
      }
  
      function updateAttempts() {
        const attemptsList = document.getElementById("attempts");
        attemptsList.innerHTML = "";
        attempts.forEach((attempt) => {
          const li = document.createElement("li");
          li.textContent = attempt;
          attemptsList.appendChild(li);
        });
      }
    }
  });
  