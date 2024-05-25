const playerOption = "✕";
const botOption = "O";
const boxes = Array.from({ length: 9 });

document.querySelector(".game-board").addEventListener("click", (e) => {
  const element = e.target;
  element.textContent = playerOption;
  boxes[element.id] = playerOption;

  // empty boxes = all boxes - full boxes = indexof(empty boxes)
  const emptyBoxes = boxes
    .map((box, index) => (box ? null : index))
    .filter((box) => box !== null);

  // bu index deyil, bos qutularin indexini ozunde saxliyan arrayin icinden index goturmek ucundur
  const botRandomNumber = Math.floor(Math.random() * emptyBoxes.length);
  const botIndex = emptyBoxes[botRandomNumber];

  boxes[botIndex] = botOption;
  document.getElementById(botIndex).textContent = botOption;

  console.log({
    boxes,
    emptyBoxes,
    botRandomNumber,
  });

  //[0, 1, 3,4,5,6,7,8]
});
