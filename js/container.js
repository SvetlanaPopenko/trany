const container = document.querySelector(".js-content");

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let player = "x";
let historyx = [];
let history0 = [];

function createMarkup() {
    let markup = "";
    for (let i = 1; i < 10; i += 1) {
  markup += `<div class="item js-item" data-id=${i}></div>`;
}

container.innerHTML = markup;
}
createMarkup();
container.addEventListener("click", onClick);

function onClick(evt) {
  const { target } = evt;
  if (!target.classList.contains("js-item") || target.textContent) {
    return;
    }
    let result = false;
    const  id = Number(target.dataset.id);
    if (player === 'x') {
        historyx.push(id);
        result = isWinner(historyx);
    } else {
        history0.push(id);
        result = isWinner(history0);
    }
     target.textContent = player;
    if (result) {
        console.log(`Winner ${player}`);
        resetGame();
        return;
  }
 
  player = player === "x" ? "0" : "x";
}

function isWinner(arr) {
    return wins.some(item => item.every(id => arr.includes(id)));
}

function resetGame() {
    createMarkup();
    historyx = [];
    history0 = [];
    player='x';
}