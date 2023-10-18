const inputRef = document.querySelector('#font-size-control');
const textRef=document.querySelector('#text');


const onChangeSize = (evt) => {
    textRef.style.fontSize = `${evt.currentTarget.value}px`;
}

inputRef.addEventListener('input', onChangeSize);