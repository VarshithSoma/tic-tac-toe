"use strict";

const Allbtn = document.querySelectorAll(".btn-option");

const container = document.querySelector(".container");

let currentPlayer = "X";
let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-option")) {
    if (board[e.target.dataset.row][e.target.dataset.col] != 0) {
      return;
    }
    board[e.target.dataset.row][e.target.dataset.col] = currentPlayer;
    e.target.textContent = currentPlayer;
    if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    document.querySelector(".turns").textContent = currentPlayer + " TURN";
    let win = CheckFunction(board);
    let drawn = draw(board);

    if (drawn == "1") {
      document.querySelector(".popup").classList.remove("hide");
      currentPlayer = "X";
      document.querySelector(".turns").textContent = "X TURN";
      document.querySelector("#message").textContent = "TRY AGAIN";
    } else if (win == "X") {
      document.querySelector(".popup").classList.remove("hide");
      document.querySelector("#message").textContent = "X WON";
    } else if (win == "O") {
      document.querySelector(".popup").classList.remove("hide");
      document.querySelector("#message").textContent = "O WON";
    }
  }
});

const CheckFunction = function (arr) {
  //row check
  for (let i = 0; i <= 2; i++) {
    if (arr[i][0] == arr[i][1] && arr[i][0] == arr[i][2]) {
      return arr[i][0];
    }
  }
  //column check
  for (let i = 0; i <= 2; i++) {
    if (arr[0][i] == arr[1][i] && arr[0][i] == arr[2][i]) {
      return arr[0][i];
    }
  }
  //diagonal
  if (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2]) {
    return arr[0][0];
  }
  if (arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0]) {
    return arr[0][2];
  }

  return 0;
};
const draw = function (arr) {
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      if (arr[i][j] == 0) {
        return 0;
      }
    }
  }
  return 1;
};

const newGame = document.querySelector("#restart");
newGame.addEventListener("click", function () {
  Allbtn.forEach((e) => {
    e.textContent = "";
  });
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      board[i][j] = 0;
    }
  }
  document.querySelector(".popup").classList.add("hide");
  document.querySelector("#message").textContent = "new game";
  currentPlayer = "X";
});

document.querySelector(".retry").addEventListener("click", function () {
  Allbtn.forEach((e) => {
    e.textContent = "";
  });
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      board[i][j] = 0;
    }
  }
  document.querySelector(".popup").classList.add("hide");
  document.querySelector("#message").textContent = "new game";
  currentPlayer = "X";
});
