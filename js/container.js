const container = document.querySelector('.js-content');

let markup = '';

for (let i = 0; i < 9; i += 1){
    markup+=`<div class="item"></div>`
}

container.innerHTML = markup;

container.addEventListener('click', onclick);

function onClick(evt) {
    
}