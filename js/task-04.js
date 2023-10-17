let counterValue = 0;
const counter = document.querySelector("#value");

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  counter.textContent = counterValue;
};

function onIncrementBtnClick() {
  counterValue += 1;
  counter.textContent = counterValue;
};

