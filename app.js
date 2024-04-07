function playerChoice() {
  choice = prompt("Escola entre pedra papel tesoura");
  return choice;
}

function computerChoice() {
  computerOptions = ["pedra", "papel", "tesoura"];
  randomNumber = Math.floor(Math.random() * computerOptions.length);
  console.log(randomNumber);
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
    return "player venceu";
  }
}

let playerPoints = 0;
let computerPoints = 0;
let gameOn = true;
