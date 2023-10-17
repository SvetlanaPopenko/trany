const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInput);

function onInput(event) {
  if (event.currentTarget.value) {
    return (outputRef.textContent = event.currentTarget.value);
  }
  return (outputRef.textContent = "Anonymous");
}
