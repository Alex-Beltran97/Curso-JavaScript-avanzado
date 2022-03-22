//El paradigma es una forma de ver y crear codigo de porgramacion apra resolver un problema

//IMPERATIVO: Te dice que hacer. Tiene varias ramas, tal como podria ser la POO. Dictamos 
//el camino a seguir a traves del control de flujo

//Declarativo. Se llama para usarse, como la funcional


//Metodos Array No mutables

//MAP: Itera sobre cada elemento de un Array y devuleve un nuevo array con los resultados de la nueva funcion callback
//callback: funcion que pasa a otra funcion como argumento

const fruits = ["🍌","🍏","🍓"];

const newArray = fruits.map(item=>item);

console.log(newArray);

const users = [
    {uid:1, name:'Jhon', age:34},
    {uid:2, name:'Amy', age:20},
    {uid:3, name:'camperCat', age:10},
];

const names = users.map(item=>item.name);

console.log(names);


const numbers = [];

for(i=1;i<=10;i++){
    numbers.push(i);
}

const multiplyBy2 = numbers.map(item=>item*2);

console.log(multiplyBy2);


//FILTER: Crea un nuevo array que umpla con la condicion asignada

const greater = users.filter(item=>item.age>30);//Aqui devuleve el elemento del objeto siempre y 
//cuando se cupla la condicion que se instancia en el metodo

console.log(greater);//[ { uid: 1, name: 'Jhon', age: 34 } ]


//Tambien lo podemos usar para eliminar elementos

const userFiltered = users.filter(item=>item.uid !== 3);

console.log(userFiltered);


//FIND: Devuelve el primer elemento de un array que cumpla con la prueba instanciada
//Se usa para buscar

//para buscar con metodos de array usamos: Find, some, FindIndex

const {age} = users.find(item=>item.uid ===2);

console.log(age); //Con esto tambien podemos usar el destructuring

//SOME: Comprueba si hay al menos un elemento que cumpla con la validacion instanciada


const exist  = users.some(item=>item.uid==2);
const exist2  = users.some(item=>item.uid==4);

console.log(exist,"|",exist2);

//FindIndex: Devuleve el idnice del primer elemento del array que cumpla con la funcion, si no lo encuentra devuelve -1

const index  = users.findIndex(item=>item.uid==2);
const amy2  = users[index];
const index2  = users.findIndex(item=>item.uid==4);

console.log(index,index2,amy2);

//SLICE: Devuleve  una copia e parte de un array dentro de un array

const animals = ['cat','dog','tiger','zebra'];

const arrayAnimals = animals.slice(1,3)//Se usa desde el inicio hasta elsiguiente indice despues del que se quieremostrar
//(final no incluido)

console.log(arrayAnimals); //[ 'dog', 'tiger' ]

//CONCAT: Se usa para unir dos o mas array

const array1 = ['a','b','c'];
const array2 = ['d','e','f'];
const array3 = array1.concat(array2);

console.log(array3);

const alterArray3 = [...array1,...array2]; //SPREAD OPERATOR

console.log(alterArray3);


//REDUCE: Recorre los elementos e un arreglo yu devulve un unico valor, reduce el valor de un elemento

//Reduce es un acumulador. El valor devuelto de la uncion reductora se asigna al acumulador cuyo valor
//se recuerda en cada iteracion de la matriz, y en ulitma instancia se convierte en el valor unico y resultante


const numbersReduce = [];

for(i=0;i<5;i++){
    numbersReduce.push(i+1);
}


const sumEmAll = numbersReduce.reduce((acc,current)=>acc+current);

console.log(sumEmAll)


const arrayNumbers = [
    [0,1],
    [2,3],
    [4,5],
];


const arraysReduce = arrayNumbers.reduce((acc,current)=>acc.concat(current));

console.log(arraysReduce);

const arrayPlano = [].concat(...arrayNumbers);

console.log(arrayPlano);

const arrayFlat = arrayNumbers.flat();

console.log(arrayFlat);

const deepArray = [
    [0,1],
    [2,3,[4,5]]
];

console.log(deepArray.flat(2))

//SPLIT: Convierte "String" en "Array"

const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const monthSplit = monthString.split(",");

console.log(monthSplit);

//JOIN: PaSA DE ARRAY A STRING

const monthJoin = monthSplit.join("-");

console.log(monthJoin);



















