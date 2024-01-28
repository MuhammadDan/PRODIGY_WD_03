let AllBoxes = document.querySelectorAll(".box");
let turn = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 7],
  [6, 7, 8],
];

AllBoxes.forEach((box) => {
  box.addEventListener("click", function () {
    // console.log("BOX WAS CLICKED");
    if (turn === true) {
      box.innerText = "X";
      box.style.color = "white";
      turn = false;
      box.disabled = true;
    } else {
      box.innerText = "O";
      box.style.color = "black";
      turn = true;
      box.disabled = true;
    }
    check();
  });
});
const check = () => {
  for (let p of winPattern) {
    let position1 = AllBoxes[p[0]].innerText;
    let position2 = AllBoxes[p[1]].innerText;
    let position3 = AllBoxes[p[2]].innerText;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        alert(`Congratulations! ${position1} You won this game`);
        disablebtn();
      }
    }
  }
};
const disablebtn = () => {
  for (let BOX of AllBoxes) {
    BOX.style.pointerEvents = "none";
    // BOX.disabled = true;
  }
};
const ResetGame = () => {
  turn = true;
  enablebtn();
};
const enablebtn = () => {
  for (let Box1 of AllBoxes) {
    Box1.disabled = false;
    Box1.innerText = "";
  }
};
let Resetbutton = document.querySelector(".resetbtn");
Resetbutton.addEventListener("click", ResetGame);
// complete
