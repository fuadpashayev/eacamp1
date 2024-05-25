const gameItems = ["Daş", "Kağız", "Qayçı"];
const resultSelector = document.getElementById("result");
const resultTexts = {
  player: '<span class="win">Siz qalib gəldiniz!</span>',
  draw: '<span class="draw">Siz bərabərə qaldınız!</span>',
  computer: '<span class="lose">Siz məğlub oldunuz!</span>',
};

const buttons = document.querySelectorAll(".chooseItem");

const findWinner = (playerNumber, botNumber) => {
  if (
    (playerNumber === 0 && botNumber === 2) ||
    (playerNumber === 1 && botNumber === 0) ||
    (playerNumber === 2 && botNumber === 1)
  ) {
    return "player";
  } else if (playerNumber === botNumber) {
    return "draw";
  } else {
    return "computer";
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const botItemNumber = Math.floor(Math.random() * gameItems.length);
    const botGameItem = gameItems[botItemNumber];

    const playerItemNumber = +event.target.getAttribute("data-item-index");
    const playerGameItem = gameItems[playerItemNumber];

    const winner = findWinner(playerItemNumber, botItemNumber);

    resultSelector.innerHTML = `
        ${resultTexts[winner]}
        <div>Sizin seçdiyiniz: <strong>${playerGameItem}</strong></div>
        <div>Kompüterin seçdiyi: <strong>${botGameItem}</strong></div>
      `;
  });
});

// const buttonSelector = document.getElementById("salam");

// buttonSelector.textContent = "sdsd";

// buttonSelector.innerHTML = "";
// buttonSelector.attributes;
// buttonSelector.getAttribute("id");
// buttonSelector.setAttribute("data-test", "test attribute value bla bla...");

// if (number < 4) {
//   bot = "das";
// } else if (number >= 4 && number < 7) {
//   bot = "kagiz";
// } else if (number >= 7 && number < 10) {
//   bot = "qayci";
// }

// const dasButton = document.getElementById("das");
// const text = document.getElementById("text");
// dasButton.addEventListener("click", () => {
//   if (bot == "das") {
//     text.innerText = "siz beraber qaldiniz";
//   } else if (bot == "kagiz") {
//     text.innerText = "siz meglub oldunuz";
//   } else {
//     text.innerText = "siz qalib geldiniz";
//   }
// });

// const kagizButton = document.getElementById("kagiz");
// kagizButton.addEventListener("click", () => {
//   if (bot == "das") {
//     text.innerText = "siz qalib geldiniz";
//   } else if (bot == "kagiz") {
//     text.innerText = "siz beraber qaldiniz";
//   } else {
//     text.innerText = "siz meglub oldunuz";
//   }
// });

// const qayciButton = document.getElementById("qayci");
// qayciButton.addEventListener("click", () => {
//   if (bot == "das") {
//     text.innerText = "siz qalib geldiniz";
//   } else if (bot == "kagiz") {
//     text.innerText = "siz meglub oldunuz";
//   } else {
//     text.innerText = "siz beraber qaldiniz";
//   }
// });
