//DOM # 2

//BURBUJEO  Y CAPTURA

// const father = document.querySelector(".border-primary");
// const son = document.querySelector(".border-secondary");
// const grandson = document.querySelector(".border-danger");

// father.addEventListener('click',()=>{
//     console.log('Me diste click padre')
// },true)

// son.addEventListener('click',()=>{
//     console.log('Me diste click hijo')
// },true)

// grandson.addEventListener('click',()=>{
//     console.log('Me diste click nieto')
// },true)

//Bubbling: Suceso en el cual si hay eventos anidados el elemento hijo se 
//propaga hasta el padre

//Fase de captura: Invertir el burbujeo. Se propaga desde el elemento padre
//al hijo, para esto se le pasa un tercer parametro al evento y este 
//sera "TRUE"

//Cuando anidamos un evento dentro de otro se presenta el fenomeno del 
//bubbling y al pulsar el evento de un hijo se ejecuta el hijo seguido
//del padre. Esto no debe pasar. Al pulsar el hijo se debe ejecutar el 
//padre seguido del hijo y no al reves

//Des pues de solucionar con la fase de captura, como no queremos que 
//se propague el evento, para eso usamos "stopPropagation"

// const littleBoxes = document.querySelectorAll(".border");

// littleBoxes.forEach(item=>{
//     item.addEventListener('click',(e)=>{
//         e.stopPropagation();
//         console.log(`me diste click ${e.target.dataset.test}`);
//     })
// });

//preventDefault:  
//Se ocupara para formularios pero se puede detener cualquier evento
// del navegador.
//Detiene cualquier evento si este es canselable sin afectar el
//funcionamiento del evento. Significa que lo podemos volver a utilizar.

// const form = document.querySelector("form");
// const ancla = document.querySelector("a");

// form.addEventListener('submit',e=>{ //Submit envia la informacion por 
//     //su metodo get
//     console.log('Me diste click')
//     e.preventDefault();
// })

// ancla.addEventListener('click', e =>{
//     e.preventDefault();
//     console.log('Me diste click');
// });

//DELEGACION DE EVENTOS:
//Evita la propagacion de eventos.
//Patro para manejar eventos de manera eficientes.
//En vez de agregar un detector de eventos a todos y cada uno de los 
//elementos similares, podemos agregar un detector de eventos en un
//elemento principal o contenedor padre y llmar a un evento en un objetivo
//en particular por medio de la propiedad target.

//De esa manera se evita la propagacion

const container = document.querySelector('.container');

container.addEventListener('click',e=>{ //tambien podemos acceder con document
    console.log(e.target);

    if(e.target.id==="padre"){
        console.log("Diste click al padre")
    }
    
    console.log(e.target.matches(".border-secondary"));
    
    if(e.target.matches(".border-secondary")){
        console.log("Diste click al Hijo");
    }

    console.log(e.target.dataset.test);
    if(e.target.dataset.test==="grandson"){
        console.log("Diste click al nieto");
    }
})





