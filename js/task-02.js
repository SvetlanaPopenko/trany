const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const arr = [];
// const list = document.querySelector('#ingredients');
// console.log(list);
// for (let i = 0; i < ingredients.length; i+=1){
//   const ingredient = document.createElement('li');
//   ingredient.textContent = ingredients[i];
//   ingredient.classList.add ('item');
   
//   arr.push(ingredient);
// }

// list.append(...arr);

const list = document.querySelector('#ingredients');
const markup = ingredients.map((ingredient) => `<li class="item"> ${ingredient}</li>`).join("");
console.log(markup);
list.innerHTML = markup;