const inputColor = document.getElementById('inputColor');
const btnVisualizar = document.getElementById('btnVisualizar');
const parrafoHexa = document.getElementById('parrafoHexa');
const cardColor = document.getElementById('cardColor');


btnVisualizar.addEventListener('click',()=>{
    parrafoHexa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;


    navigator.clipboard
        .writeText(inputColor.value) //Formula para copiar el texto de algun valor
        .then(()=>console.log('Texto copiado'))
        .catch(error=>console.log(error));
});


//Podemos usar netlify como servicio de hosting gratuito
