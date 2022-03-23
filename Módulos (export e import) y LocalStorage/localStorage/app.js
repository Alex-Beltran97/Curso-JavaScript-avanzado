localStorage.setItem('platano','🍌'); //setItem se usa para definir el nombre de la propiedad y su valor
localStorage.setItem('sandia','🍉'); 

if(localStorage.getItem("platano")){
    console.log(localStorage.getItem("platano")); //getItem lo usamos para traer el valor llamando a su propiedad
};

// localStorage.removeItem('platano'); //removeItem se usa para borrar a la propiedad y su valor. Esto para una propiedad en particular

// localStorage.clear(); //Clear borra de manera masiva todo lo contenido en localStorage

