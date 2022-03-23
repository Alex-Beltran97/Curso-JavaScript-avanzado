//IIFE

// (()=>{
//     console.log('Fruta 🍎');
// })();

import manzanaVerde, { fresa, pintarPlatano as platano ,Fruta } from "./frutas.js"; //export normal (las variables conservan su mismo nombre)
//Se coloca sin llaves y se le asigna el nombre

//'as' se usa para renombrar al platano

console.log(fresa);
console.log(platano());

const cereza = new Fruta ('🍒'); 

console.log(cereza.nombre);
console.log(manzanaVerde);

