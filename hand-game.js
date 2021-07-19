const playerRock = document.querySelector("#player .jari-batu");
const playerScissor = document.querySelector("#player .jari-gunting");
const playerPpaper = document.querySelector("#player .jari-kertas");
const computerRock = document.querySelector("#computer .jari-batu");
const computerScissor = document.querySelector("#computer .jari-gunting");
const computerPpaper = document.querySelector("#computer .jari-kertas");
const info = document.querySelector("#info");
const playerPictures = document.querySelectorAll("#player .jari");
const computerPicture = document.querySelector("#computer .jari");
refresh = document.querySelector("#refresh");

// Fungsi Pilihan Random Computer
const computerChoise = function () {
    const comp = Math.floor(Math.random() * 3) + 1;
    if (comp == 1) {
        return "rock";
    } else if (comp == 2) {
        return "paper";
    } else {
        return "scissor";
    }
};

// Aturan Game
const draw = "draw",
    playerWin = "you<br>win",
    computerWin = "computer<br>win";

const rules = function (computer, player) {
    if (computer == player) {
        return draw;
    } else if (player == "rock" && comp == "scissor") {
        return playerWin;
    } else if (player == "paper" && comp == "rock") {
        return playerWin;
    } else if (player == "scissor" && comp == "paper") {
        return playerWin;
    } else {
        return computerWin;
    }
};

// Box Pemenang
const box = function (element) {
    element.style.backgroundColor = "#c4c4c4";
    element.style.borderRadius = "10px";
    element.style.width = "100px";
    element.style.boxShadow = "0 0 5px 5px rgba(0, 0, 0, 0.3)";
  };

  // Menghapus Box Pemenang
  const unbox = function (element) {
    element.style.removeProperty("box-shadow");
    element.style.removeProperty("background-color");
    element.style.removeProperty("border-radius");
  };

  