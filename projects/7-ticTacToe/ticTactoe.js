console.log("Welcome to Tic Tac Toe");

let turn = "X";
let arr = Array(9).fill("");
let game = true;

//music when player click the inside box
function turnMusic() {
  let turnMusic = new Audio("./assets/ting.mp3");
  return turnMusic.play();
}
//game over music
function gameOverMusic() {
  let gameOver = new Audio("./assets/gameover.mp3");
  return gameOver.play();
}

//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

//Game logic

// console.log("here all box are return as node list easy for for each loop ")
let divBoxes = document.querySelectorAll(".box");
divBoxes.forEach((element, index) => {
  // console.log(element)
  // console.log(index)
  let spanBox = element.querySelector(".boxtext");
  // console.log(spanBox)
  element.addEventListener("click", () => {
    if (game && spanBox.innerText === "") {
      spanBox.innerText = turn;
      arr[index] = turn;
      // console.log(arr);
      turnMusic();
      turn = changeTurn();
      document.getElementById("info").innerText = "Turn for " + turn;
      checkWin();
    }
  });
});

//Function to check who win

const checkWin = () => {
  if (
    (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== "") ||
    (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== "") ||
    (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== "") ||
    (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== "") ||
    (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== "") ||
    (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== "") ||
    (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== "") ||
    (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== "")
  ) {
    document.querySelector("#image-box img").src = "./assets/excited.gif";
    const winner = turn === "X" ? "O" : "X"; // last move
    document.getElementById("info").innerText = "Winner is " + winner;
    gameOverMusic();
    game = false;
  } else if (!arr.includes("")) {
    document.getElementById("info").innerText = "Game Draw! ";
    console.log("It's a draw !");
    gameOverMusic();
    game = false;
  }
};

document.getElementById("reset").addEventListener("click", () => {
  let boxes = document.querySelectorAll(".boxtext");
  boxes.forEach((box) => {
    box.innerText = "";
  });
  arr = Array(9).fill("");
  turn = "X";
  game = true;
  document.getElementById("info").innerText = "Turn for " + turn;
  document.querySelector("#image-box img").src = "";
});
