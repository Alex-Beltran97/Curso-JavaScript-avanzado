const regExp  = /bluuweb/i; //Patron de evalauacion basico
//esta palabra debera de aparecer en una cadena de caracteres

//aniadimos la bandera i

const regExpObject = new RegExp('bluuweb','i')//Notacion de objeto

//aqui el flag se aniade como segundo parametro
console.group('Expresion literal')
console.log(regExp.test('sdfsdfdsbluuwebdfsdfsdfsd')); //Se coloca la 
//vaariable, luego el metodo .text() y sus parametros son el 'string'
//a validar 

//true

console.log(regExp.test('sdfsdfdsbluu webdfsdfsdfsd'));
//Para este caso, si la expresion se separa queda 'false'
console.groupEnd();

console.group('Rango de caracteres');

const regExpRango = /[ue]/; //Detecta si en el string estos caracteres 
//que se encierran en los corchetes existen en el string

console.log(regExpRango.test('sdfsdfdsbluuwebdfsdfsdfsd')); 

console.groupEnd()

console.group('Establecer alternativas -> |');

const regExpAlter = /bluweb|bluuweb/i ;

console.log(regExpAlter.test('bluuweb'), 'bluuweb');
console.log(regExpAlter.test('bluweb'),'bluweb');
console.log(regExpAlter.test('Alex'),'Alex');

console.groupEnd()

console.group('Encontrar expresiones Alfanumericas');

const regExpAlphanum = /[A-Za-z0-9]/;//Se puede usar para
// validaciones en donde no se permitan simbolos

console.log(regExpAlphanum.test('sd5as1d56sa1d65s1sd1as6wAASASs321'))//true
console.log(regExpAlphanum.test('$$$'))//false

console.groupEnd()

console.group('Encontrar solo numeros');

const regExpOnlynum = /^\d+$/;//Se puede usar para
// validaciones en donde no se permitan simbolos

console.log(regExpOnlynum.test('2131654'))//true
console.log(regExpOnlynum.test('Alex123'))//false

console.groupEnd()

console.group('Encontrar solo letras');

const regExpOnlyLetter = /^[a-zA-Z]/;//Se puede usar para
// validaciones en donde no se permitan simbolos

console.log(regExpOnlyLetter.test('asdjkaskdlsj sdkas jdasdask'))//true
console.log(regExpOnlyLetter.test('123SDSDFASD'))//false

console.groupEnd()


console.group('Validar e-mail');

const regExpOnlyAccent = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9]+)*(\.[a-z{2,15}])$/;//Se puede usar para

console.log(regExpOnlyLetter.test('alex@ejemplo.com'))//true
console.log(regExpOnlyLetter.test('123SDSDFASD'))//false

console.groupEnd()







