//JavaScript DOM

//DOCUMENT

// console.log(document)
// console.log(document.head)
// console.log(document.title)
// console.log(document.body)


//getElementeById


// document.addEventListener('DOMContentLoaded',()=>{
//     console.log(document.getElementById('webTitle').textContent); //TextContent es una propiedad que muestra el contenido el elemento
//     console.log(document.getElementById('webTitle').innerHTML); //InnerHTML no se recomienda por tener inyecciones
// })

//DOMContentLoaded indica que se carge todo el  DOM y luego ejecute metodos que establescamos. Se usa cuando la etiqueta Script se posiciona en el head

//Mostrar clase del elemento


const h1 = document.querySelector('#webTitle'); 
const button = document.querySelector('.btn'); 

// console.log(h1.className);
// console.log(h1.id);




//Eventos

button.addEventListener('click',()=>{
    alert('holo');
    h1.textContent = 'Texto desde js';
    h1.style.backgroundColor = 'royalBlue';
    h1.style.color = 'white';
    h1.style.fontFamily = 'helvetica';
})


