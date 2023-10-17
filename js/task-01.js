const listOfRef = document.querySelector("#categories");
const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${listOfRef.children.length}`);

// for (let i = 0; i < list.length; i += 1) {
//   console.log(`Category: ${list[i].querySelector("h2").textContent}`);
//   console.log(`Elements: ${list[i].querySelectorAll("li").length}`);
// };

[...listOfRef.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
