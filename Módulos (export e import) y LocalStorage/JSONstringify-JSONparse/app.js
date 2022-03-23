const frutas = [
    {
        nombre: "🍌",
        color: "amarillo",
    },
    {
        nombre: "🍒",
        color: "rojo",
    },
    {
        nombre: "🍏",
        color: "verde",
    },
];

localStorage.setItem('frutas',JSON.stringify(frutas));

if(localStorage.getItem('frutas')){
    console.log(JSON.parse(localStorage.getItem('frutas')));
}



