const lista = document.getElementById('lista');


const arrayCountries = ['Peru','Bolivia','Colombia'];

// arrayCountries.forEach(item=>{ //Esta tecnica se debe implemntar pero no se  recomienda porque gener reflow
//     const li = document.createElement('li');

//     li.textContent = item;
    
//     lista.appendChild(li);
// });


// console.log(li);

//Lo que debemos hacer es usar el FRAGMENT

//Fragment: Elemento que se crea de forma paralela y no se asigna como padre, este solo se pasara al documento hasta que
//Usemos el appendChild

const fragment = document.createDocumentFragment(''); //Primera manera

// const fragment = new DocumentFragment(); //Segunda opcion

arrayCountries.forEach(item=>{ //Esta tecnica se debe implemntar pero no se  recomienda porque gener reflow
    const newNode = document.createElement('li');
    newNode.textContent = item;

    const referenceNode = fragment.firstChild //Selecciona el primer hijo del fragmento

    fragment.insertBefore(newNode,referenceNode); //Formula para insertar los nodos de manera inversa.
    //El elemento inserta el primer elemento ya que su valor va a ser null, pero luego al ver que ya 
    //hay un elemento, no lo insertara despues sino antes
});

lista.appendChild(fragment);

console.log(li);
