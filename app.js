function playerChoice() {
  choice = prompt("Escola entre pedra papel tesoura");
  return choice;
}

function computerChoice() {
  let computerOptions = ["pedra", "papel", "tesoura"];
  randomNumber = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[randomNumber];
}

function game(player, computer) {
  if (player == computer) {
    console.log(
      `Foi empate, ambos fizeram a mesma escolha. Jogador:${player}. Computador: ${computer}.`
    );
    return "empate";
  } else if (player == "pedra" && computer == "tesoura") {
    console.log(`O jogador venceu. Jogador: ${player}. Computer: ${computer}.`);
    return "player venceu";
  } else if (player == "papel" && computer == "pedra") {
    console.log(`O jogador venceu. Jogador: ${player}. Computer: ${computer}.`);
    return "player venceu";
  } else if (player == "tesoura" && computer == "papel") {
    console.log(`O jogador venceu. Jogador: ${player}. Computer: ${computer}.`);
    return "player venceu";
  } else {
    console.log(
      `O Computador venceu. Computer: ${computer}. Player: ${player}.`
    );
    return "computer venceu";
  }
}

function analisandoAdicionandoResultado(resultado) {
  if (resultado == "empate") {
    playerPoints += 0;
    computerPoints += 0;
  } else if (resultado == "player venceu") {
    playerPoints += 1;
    console.log(
      `Player ganhou mais um ponto. Pontuação total: ${playerPoints}.`
    );
    if (playerPoints == 3) {
      console.log(
        `Jogo finalizado. O Player venceu o jogo com ${playerPoints} pontos!`
      );
      gameOn = false;
    }
  } else {
    computerPoints += 1;
    console.log(
      `Computer ganhou mais um ponto. Pontuação total: ${computerPoints}.`
    );
    if (computerPoints == 3) {
      console.log(
        `Jogo finalizado. O Computer venceu o jogo com ${computerPoints} pontos!`
      );
      gameOn = false;
    }
  }
}

let playerPoints = 0;
let computerPoints = 0;
let gameOn = true;
console.log(`Jogo iniciado. Pontos do Player: ${playerPoints}.`);
console.log(`Jogo iniciado. Pontos do Computer: ${computerPoints}.`);

while (gameOn == true) {
  resultadoJogo = game(playerChoice(), computerChoice());
  analisandoAdicionandoResultado(resultadoJogo);
  console.log(`Rodada finalizada. Pontos do Player: ${playerPoints}.`);
  console.log(`Rodada finalizada. Pontos do Computer: ${computerPoints}.`);
}
