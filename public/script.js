console.log('source kek 2');

let text = document.getElementById('text');
console.log(text);

const button = document.getElementById('button');
button.onclick = () => {
    console.log('clicked');
    text.innerText = 'Нажата кнопочка';

};