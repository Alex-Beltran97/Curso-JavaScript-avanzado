//Palabras reservadas

// *alert

//PROMPT

// const num1 = prompt("Ingrese un numero");
// const num2 = prompt("Ingrese otro numero");

// document.write(parseFloat(num1)+parseFloat(num2));


//Math.random

    // const random = Math.floor(Math.random()*(10-1)+1);

    // console.log(random);


    // let numUser = parseFloat(prompt('Adivina el numero'));

    // let vidas = 3;

    // while(numUser!==random&&vidas>1){
    //     let mensaje = numUser>random
    //         ?'El numero es menor al que escribiste.'
    //         :'El numero es mayor al que escribiste.';
    //     vidas--
    //     console.log(`Te equivocaste. ${mensaje}`);
    //     numUser = parseFloat(prompt('Adivina el numero'));
    // };

    // if(numUser===random){
    //     console.log('Ganste 😁👍')
    // }else{
    //     console.log('Perdiste 😒👎')
    // };


    // FOR OF/IN


    // let array = [];
    
    // let palabra = "Chimichanga";

    // for (i=0;i<5;i++){
    //     array.push(`Ejemplo${i+1}`);
    // };
    

    // for(element of array){
    //     console.log(element);
    // };

    
    // for(item in array){
    //     console.log(item);
    // };
    

    // for(word of palabra){
    //     console.log(word);
    // };


    //Symbol.iterator: Sirve para validar si un elemento es iterable. Ej: array[Symbol.iterator];

//Funciones

// const data = [];

// const name = document.querySelector('#name');
// const lastName = document.querySelector('#lastName');
// const age = document.querySelector('#age');
// const btn = document.querySelector('.container__item--btn');



// const setData = ()=>{
//     let object = {};

//     object["name"] = name.value;
//     object["lastName"] = lastName.value;
//     object["age"] = age.value;


//     console.log(object);
    
//     data.push(object)
    
//     console.log(data);

// }


// btn.addEventListener("click",setData);

//confirm();

// const result = window.confirm("¿Desea agregar otra cosa al carrito?");


// if(result){    
//     alert('Continua');
// }else{
//     alert('Gracias por comprar');
// };


// const frutas = [];

// const agregarfruta = ()=>{

//     const fruta = prompt('🍉Feria market🍊 ¿Qué desea comprar?');

//     frutas.push(fruta);
// };

// agregarfruta();

// while(confirm('¿Desea agregar otro elemento al carrito?')){
//     agregarfruta();
// };


// console.log('Compraste:');

// frutas.forEach(item=>console.log(item));




//CRUD


// const dog = {
//     name: "Keiloh",
//     age: 8,
//     color: "black",
//     sleep:true
// }

// //-Create

// console.group('Create');

// dog["feet"] = 4;

// console.log(dog);

// console.groupEnd();

// //-Read

// console.group('Read');

// console.log(dog.feet);

// console.log(dog);

// console.groupEnd();

// //update

// console.group('Update');

// dog["color"] = "Black and white";

// console.log(dog);

// console.groupEnd();

// //Delete

// console.group('Delete');

// delete dog["sleep"];

// console.log(dog);

// console.groupEnd();

//hasOwnpeoperty -> SIRVE PARA VER SI LA PROPIEDAD DENTRO DEL OBJETO EXISTE

// if(dog.hasOwnProperty("LastName")){
//     dog["name"] = "kerlitos";
// }

// console.log(dog);

//FOR... IN -> SIRVE PARA RECORRER UN OBJETO


    // const cat = {
    //     name:'Brave',
    //     sleep:true,
    //     age:10,
    //     enemies:['water','dogs'],
    //     others:{
    //         friends:["Coward","Shy","Sticky"],
    //         favorites:{
    //             meal:{
    //                 cold:"Salmon",
    //                 hot:"Chicken",
    //             },
    //         },
    //     },
    // };

// for (let properties in cat){ //Para ver el label/nombre de la propiedad
//     console.log(properties);
// };

// for (let properties in cat){ //Para ver el valor de la propiedad
//     console.log(cat[properties]);
// };



//Object.value() -> Convierte los valores del objeto en un array


// console.log(Object.values(cat));
// console.log(Object.keys(cat));
// console.log(Object.entries(cat));
// console.log(Object.getOwnPropertyNames(cat));


//DESTRUCTURACION EN OBJETOS

// const {name : nameCat , otherName = "Empty",sleep,age,enemies} = cat; //Tambien podemos usar "Alias"

// console.log(nameCat);
// console.log(sleep);
// console.log(age);
// console.log(enemies);
// console.log(otherName); //Tambien podemos asignar valores por defecto

//DESTRUCTURACION ANIDADA

// const {others: {friends}} = cat

// console.log(friends);

// //DESTRUCTURACION DE ARRAYS

// const [friend1,friend2,friend3] = cat.others.friends //Como no tienen propiedades, a cada indice se le asigna un nombre

// console.log(friend1);
// console.log(friend2);
// console.log(friend3);



//GETTER Y SETTERS


//     const cat = {
//         name:'Brave',
//         sleep:true,
//         age:10,
//         enemies:['water','dogs'],
//         others:{
//             friends:["Coward","Shy","Sticky"],
//             favorites:{
//                 meal:{
//                     cold:"Salmon",
//                     hot:"Chicken",
//                 },
//             },
//         },
//         get nameToUpperCase(){
//             return this.name.toUpperCase();
//         },
//         set addEnemy(enemy){
//             this.enemies.push(enemy);
//         },
//     };


// console.log(cat.nameToUpperCase); //GET ES UN METODO QUE SE CONECTA A UNA PROPIEDAD PARA TRAER SU VALOR Y CON EL PODEMOS REALIZAR COSAS 

// cat.addEnemy = "Batman"; //SET PUEDE MODIFICAR UNA PROPIEDAD DEL OBJETO

// console.log(cat.enemies);

//PROPIEDADES POR REFERENCIA

// let a = {name:"Hola"};
// let b = a;

// a.name = "chao";

// a = "chao";

// console.log(b);

//JavaScript DOM


//NOTA: Revisar a profundidad el arbol DOM ---------------------------------------------------------------------













