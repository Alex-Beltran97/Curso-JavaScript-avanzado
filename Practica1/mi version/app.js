const color = document.getElementById('color');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const showColor = document.getElementById('showColor');

result.textContent = color.value;

showColor.style.backgroundColor = color.value;


const showResult = () =>{
    result.textContent = color.value;
    showColor.style.backgroundColor = color.value;
};


btn.addEventListener('click',showResult);