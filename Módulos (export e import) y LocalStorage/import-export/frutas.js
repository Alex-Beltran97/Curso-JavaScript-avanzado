const fresa = 'Fruta 🍓';

const manzana = '🍏';

const pintarPlatano = ()=>{
    return 'Platano 🍌';
};

class Fruta{
    constructor(nombre){
        this.nombre = nombre;
    }
};

export {fresa, pintarPlatano, Fruta};

export default manzana;