function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const numberEl = document.querySelector("input");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
numberEl.addEventListener("change", onChange);

let inputNumber = 0;
function onChange(evt) {
  inputNumber = evt.target.value;
}
let widthValue = 30;
let heightValue = 30;

function createBoxes(amount) {
  amount = inputNumber;
  const box = [];

  for (let i = 0; i < amount; i += 1) {
    const markup = `<div style="width: ${widthValue}px; height: ${heightValue}px; background-color: ${getRandomHexColor()}"></div>`;
    widthValue += 10;
    heightValue += 10;

    box.push(markup);
    console.log(markup);
  }
  boxesEl.insertAdjacentHTML("afterbegin", box.join(""));
}

function destroyBoxes() {
  return (boxesEl.innerHTML = "");
}
