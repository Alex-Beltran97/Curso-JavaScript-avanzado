fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res=>res.json())
    .then(data=>console.log(data.forms[0].name)); 
    
//URI->PATCH o ruta para hacer la peticion

//Pormedio del response puro que emite se [pueden ver propiedades tales como: header o status: en este caso cuando es posiitva da un codigo 200

//GET->Este verbo si lo soprta el navegador asi nada mas.
// Se recomienda probar antes el URI

//Fetch tambien lee imagenes



