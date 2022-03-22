// function constructora = planitlla/clase

// function Persona(nombre){
//     this.nombre = nombre;
//     this.saludar = function (){
//         return `${this.nombre} dice "Hola!".`
//     }
// };

// Persona.prototype.saludarIngles = function (){
//     return `${this.nombre} says hi!`
// };

// const juanito = new Persona('Juanito');
// const pedrito = new Persona('Pedrito');

// console.log(juanito.saludar());
// console.log(pedrito.saludarIngles());

//Class

class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    get getNombre(){ //Los get no reciben parametros y deben retornar algo
        return this.nombre;
    }

    set setNombre(nombre){//solo recibe un solo parametro
        this.nombre = nombre;
    }

    saludar(){
        return `${this.nombre} dice "Hola!".`
    }
    
    static probarSaludo(nombre){//Aqui no usamos el this
        return `${nombre} probando saludo.`
    }
};

class Estudiante extends Persona {

    #notas = [];

    set setNotas(nota){
        this.#notas.push(nota)
    }

    get getNotas(){
        return this.#notas
    }

};

const juanito = new Estudiante ('Juanito',25);

juanito.setNotas = 7;
juanito.setNotas = 5;
juanito.setNotas = 1;

console.log(juanito.getNotas);

juanito.setNotas = 3;

console.log(juanito.getNotas);


// console.log(juanito.getNotas); 

// console.log(Persona.probarSaludo('Nacho'));


// juanito.setNombre = "Pedrito";

// console.log(juanito.getNombre);
// console.log(juanito.saludar());


