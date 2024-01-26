let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let currentPlayer = "X";

let counterCross = 0;
let counterCircle = 0;
const pointCircle = document.querySelector("#circle");
const pointCross = document.querySelector("#cross");
pointCross.textContent = counterCross;
pointCircle.textContent = counterCircle;

const resetButton = document.querySelector("#reset");

const spanPlayer = document.querySelector("#player");
const results = document.querySelector(".results");

const continueButton = document.querySelector("#continue");

const makemove = (row, col) => {
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;

    displayBoard();

    if (checkWin(currentPlayer)) {
      spanPlayer.textContent = currentPlayer;
      results.style.visibility = "visible";
      counter();
      resetGame();
      return;
    }

    if (checkDraw()) {
      alert(`Match nul`);
      resetGame();
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
};

const checkWin = (player) => {
  for (let row = 0; row < 3; row++) {
    if (
      (board[row][0] === player) &
      (board[row][1] === player) &
      (board[row][2] === player)
    ) {
      return true;
    }
  }

  for (let col = 0; col < 3; col++) {
    if (
      (board[0][col] === player) &
      (board[1][col] === player) &
      (board[2][col] === player)
    ) {
      return true;
    }
  }

  if (
    (board[0][0] === player) &
    (board[1][1] === player) &
    (board[2][2] === player)
  ) {
    return true;
  }

  if (
    (board[0][2] === player) &
    (board[1][1] === player) &
    (board[2][0] === player)
  ) {
    return true;
  }

  return false;
};

const checkDraw = () => {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === "") {
        return false;
      }
    }
  }

  return true;
};

const displayBoard = () => {
  const boardContainer = document.querySelector(".board");
  boardContainer.innerHTML = "";
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = board[row][col];

      cell.addEventListener("click", () => {
        makemove(row, col);
      });

      boardContainer.appendChild(cell);
    }
  }
};
displayBoard();

const counter = () => {
  if (currentPlayer === "X") {
    counterCross++;
    pointCross.textContent = counterCross;
  }
  if (currentPlayer === "O") {
    counterCircle++;
    pointCircle.textContent = counterCircle;
  }
};

resetButton.addEventListener("click", () => {
  counterCircle = 0;
  counterCross = 0;
  pointCross.textContent = counterCross;
  pointCircle.textContent = counterCircle;
});

const resetGame = () => {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  currentPlayer = "X";

  displayBoard();
};

continueButton.addEventListener("click", () => {
  results.style.visibility = "hidden";
});
