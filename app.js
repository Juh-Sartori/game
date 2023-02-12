let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  /*const rock = "r";
  const paper = "p";
  const scissor = "s";*/
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertWord(letter) {
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  return "SCISSOR";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user : ".fontsize(3).sup();
  const smallCompWord = "comp : ".fontsize(3).sup();
  result_div.innerHTML = `${smallUserWord}${convertWord(userChoice)} beats 
  ${smallCompWord}${convertWord(computerChoice)}(comp). You Win`;
  document
    .getElementById(userChoice)
    .classList.add(
      "green-glow"
    ); /*userChoice e nao r, p, s, para execurtar as cores que for apertado */
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    300
  );
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user : ".fontsize(3).sup();
  const smallCompWord = "comp : ".fontsize(3).sup();
  result_div.innerHTML = `${smallUserWord}${convertWord(userChoice)} loses to
  ${smallCompWord}${convertWord(computerChoice)}(comp). You lost...`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user : ".fontsize(3).sup();
  const smallCompWord = "comp : ".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML = `${smallUserWord}${convertWord(userChoice)} equals
  ${smallCompWord}${convertWord(computerChoice)}(comp). It's a DRAW`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "ps":
    case "sr":
    case "rp":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "ss":
    case "rr":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
    console.log("ROCK");
  });

  paper_div.addEventListener("click", function () {
    game("p");
    console.log("PAPER");
  });

  scissor_div.addEventListener("click", function () {
    game("s");
    console.log("S");
  });
}

main();
